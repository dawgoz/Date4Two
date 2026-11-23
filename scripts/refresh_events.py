"""Refresh the public events used by Date4Two."""
import argparse
import json
import re
from datetime import date, datetime, timedelta, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
from urllib.request import Request, urlopen
from zoneinfo import ZoneInfo

SOURCE = "https://www.vilnius-events.lt/en/search/"
VILNIUS = ZoneInfo("Europe/Vilnius")
OUTPUT = Path(__file__).resolve().parents[1] / "daily-events.json"
MONTHS = "January February March April May June July August September October November December".split()
DATE = re.compile(r"\b(" + "|".join(MONTHS) + r")\s+(\d{1,2})(?:,\s*(\d{4}))?\b")
SEASONS = ("winter", "spring", "summer", "autumn")
OLD_TOWN_VENUES = {
    "cathedral square", "vilnius cathedral", "vilnius cathedral crypts",
    "vilnius town hall", "town hall square", "palace of the grand dukes of lithuania",
    "vilnius university", "bernardine garden", "contemporary art centre",
}


class Calendar(HTMLParser):
    def __init__(self):
        super().__init__()
        self.cards = []
        self.card = None
        self.field = None
        self.parts = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        classes = set(attrs.get("class", "").split())
        if tag == "a" and "oe-card" in classes:
            self.card = {"url": attrs.get("href", ""), "text": [], "tags": []}
        if self.card is None:
            return
        if tag == "h3" and "oe-card__title" in classes:
            self.field = ("title", tag)
        elif tag == "span":
            field = next((name for css, name in {
                "oe-card__location": "venue",
                "oe-card__price-value": "cost",
                "oe-card__tag": "tags",
            }.items() if css in classes), None)
            if field:
                self.field = (field, tag)
        if self.field and self.field[1] == tag:
            self.parts = []

    def handle_data(self, value):
        if self.card is not None:
            self.card["text"].append(value)
            if self.field:
                self.parts.append(value)

    def handle_endtag(self, tag):
        if self.card is None:
            return
        if self.field and self.field[1] == tag:
            field = self.field[0]
            value = " ".join("".join(self.parts).split())
            if field == "tags":
                self.card[field].append(value)
            else:
                self.card[field] = value
            self.field = None
        if tag == "a":
            self.cards.append(self.card)
            self.card = None
            self.field = None


def event_dates(value):
    matches = list(DATE.finditer(value))
    if not matches or not matches[-1][3]:
        return None
    end_year = int(matches[-1][3])
    result = []
    for match in matches:
        month = MONTHS.index(match[1]) + 1
        year = int(match[3]) if match[3] else end_year
        if not match[3] and month > MONTHS.index(matches[-1][1]) + 1:
            year -= 1
        try:
            result.append(date(year, month, int(match[2])))
        except ValueError:
            return None
    return result[0], result[-1]


def season_tags(start, end):
    month = start.replace(day=1)
    tags = set()
    while month <= end and len(tags) < 4:
        tags.add(SEASONS[month.month % 12 // 3])
        month = (month + timedelta(days=32)).replace(day=1)
    return sorted(tags)


def listings(page, today):
    parser = Calendar()
    parser.feed(page)
    if not parser.cards:
        raise ValueError("Vilnius Events returned no readable event cards")
    by_url = {}
    for card in parser.cards:
        url = urlsplit(card["url"])
        if url.scheme != "https" or url.hostname != "www.vilnius-events.lt" or not url.path.startswith("/en/event/"):
            continue
        dates = event_dates(" ".join(card["text"]))
        if not card.get("title") or dates is None:
            continue
        start, end = dates
        if end < today or end < start:
            continue
        key = f"https://www.vilnius-events.lt{url.path}"
        venue = card.get("venue", "")
        by_url[key] = {
            "id": "vilnius-events-" + url.path.rstrip("/").rsplit("/", 1)[-1],
            "category": "event",
            "title": card["title"],
            "url": key,
            "link": "Official event details",
            "area": venue or "Vilnius",
            "place": venue if venue and venue != "Various venues" else None,
            "oldTown": venue.casefold() in OLD_TOWN_VENUES,
            "startsOn": start.isoformat(),
            "endsOn": end.isoformat(),
            "cost": card.get("cost") or "Check listing",
            "summary": " · ".join(card["tags"]) or "From the Vilnius Events calendar",
            "plan": "Check the Vilnius Events listing for the venue, event time and ticket details.",
            "weather": [],
            "seasons": season_tags(max(start, today), end),
        }
    if not by_url:
        raise ValueError("Vilnius Events returned no usable upcoming dates")
    return sorted(by_url.values(), key=lambda event: (max(event["startsOn"], today.isoformat()), event["endsOn"], event["title"]))


def main():
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument("--input", type=Path, help="Parse a saved calendar page for local verification")
    cli.add_argument("--output", type=Path, default=OUTPUT)
    args = cli.parse_args()
    if args.input:
        page = args.input.read_text(encoding="utf-8")
    else:
        request = Request(SOURCE, headers={"User-Agent": "Date4Two events refresh/1.0"})
        with urlopen(request, timeout=25) as response:
            page = response.read(3_000_000).decode("utf-8")
    now = datetime.now(timezone.utc)
    snapshot = {"updatedAt": now.isoformat(), "events": listings(page, now.astimezone(VILNIUS).date())}
    pending = args.output.with_suffix(".tmp")
    pending.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    pending.replace(args.output)
    print(f"Saved {len(snapshot['events'])} upcoming events")


if __name__ == "__main__":
    main()
