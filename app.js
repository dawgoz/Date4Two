const categories = {
  all: 'All ideas',
  walk: 'Walks',
  hike: 'Hiking trails',
  cinema: 'Cinema',
  art: 'Museums & exhibitions',
  fun: 'Fun activities',
  event: 'Events',
  food: 'Food & drinks',
};

const ideas = [
  {
    seasons: ['spring', 'summer', 'autumn'], weather: [],
    id: 'crosses', category: 'walk', title: 'Sunset at Three Crosses', area: 'Old Town edge', oldTown: false,
    time: 'About 1 hour', cost: 'Free', place: 'Hill of Three Crosses',
    summary: 'Climb through Kalnų Park for a wide-open view over the rooftops.',
    plan: 'Start near Bernardine Garden and walk up together before sunset. The uphill route has stairs. Bring something warm to sip at the viewpoint.',
    url: 'https://www.govilnius.lt/visit-vilnius/places/the-hill-of-three-crosses', link: 'Route information',
  },
  {
    id: 'pasaka', category: 'cinema', title: 'An indie film at Pasaka', area: 'Old Town', oldTown: true,
    time: 'About 2 hours', cost: 'Ticketed', place: 'Senamiesčio Pasaka',
    summary: 'Pick a film at the Old Town cinema and compare notes over a drink afterward.',
    plan: 'Select Old Town Pasaka in the programme. Check the original audio and subtitle languages before booking, then leave a little time for a walk around Town Hall Square.',
    url: 'https://pasaka.lt/en', link: 'See showtimes',
  },
  {
    id: 'mo', category: 'art', title: 'Trade favourites at MO Museum', area: 'Old Town edge', oldTown: false,
    time: '1–2 hours', cost: 'Ticketed', place: 'MO Museum',
    summary: 'Explore Lithuanian modern and contemporary art, then show each other the work you’d take home.',
    plan: 'Give yourselves time to wander separately for a few minutes. Meet back up and take turns explaining which work stayed with you.',
    url: 'https://mo.lt/en/exhibitions/', link: 'See exhibitions',
  },
  {
    weather: ['hot'],
    id: 'garden', category: 'walk', title: 'A riverside garden stroll', area: 'Old Town', oldTown: true,
    time: '30–60 min', cost: 'Free', place: 'Bernardine Garden',
    summary: 'Take the slow route from St Anne’s Church through Bernardine Garden and along the Vilnelė.',
    plan: 'Meet by St Anne’s Church, walk the garden paths together, and continue toward the bridge into Užupis if you feel like extending the date.',
    url: 'https://www.govilnius.lt/api/files/5e8dc76d0ee028313dc4efc8/Vilnius%2520City%2520Map.pdf', link: 'See the city map',
  },
  {
    weather: [],
    id: 'literatu', category: 'fun', title: 'A Literatų Street photo hunt', area: 'Old Town', oldTown: true,
    time: '30–60 min', cost: 'Free', place: 'Literatų gatvė',
    summary: 'Set each other three photo challenges among the tiny artworks and cobbled lanes.',
    plan: 'Try these prompts: an unexpected face, a tiny detail, and a photo that captures the mood. Reveal your favourites over coffee.',
    url: 'https://visitvilnius.lt/en/articles/vilnius-streets-where-the-city-comes-to-life', link: 'Read about the street',
  },
  {
    id: 'market', category: 'food', title: 'A two-person tasting at Halės', area: 'Old Town edge', oldTown: false,
    time: 'About 1 hour', cost: 'Pay as you go', place: 'Halės Market',
    summary: 'Each pick something savoury and something sweet, then share your finds.',
    plan: 'Start at Halės Market on Pylimo Street. If you want to keep going, head toward the Gate of Dawn and into Old Town.',
    url: 'https://www.govilnius.lt/visit-vilnius/latest-tips/vilnius-station-district', link: 'About Halės Market',
  },
  {
    seasons: ['autumn', 'winter'], weather: ['cold'],
    id: 'christmas', category: 'event', title: 'Christmas market for two', area: 'Old Town', oldTown: true,
    time: '28 Nov–27 Dec 2026', cost: 'Free to browse', place: 'Cathedral Square',
    summary: 'Meet under the lights in Cathedral Square and pick a warm drink for each other.',
    plan: 'Browse the stalls at your own pace, then walk up Pilies Street to see the evening lights. Check the official programme for opening details.',
    url: 'https://www.govilnius.lt/christmas-in-vilnius-2026', link: 'See the Christmas programme',
    expires: Date.parse('2026-12-28T00:00:00+02:00'),
  },
  {
    id: 'paupys', category: 'cinema', title: 'Dinner and a film in Paupys', area: 'Paupys', oldTown: false,
    time: '2–3 hours', cost: 'Ticket + food', place: 'Paupio Pasaka',
    summary: 'Pair a screening at Paupio Pasaka with a shared bite at nearby Paupys Market.',
    plan: 'Look for Paupys Pasaka in the listings and check subtitles when selecting your film. Meet at the market before showtime so you can eat at your own pace.',
    url: 'https://pasaka.lt/en', link: 'See showtimes',
  },
  {
    id: 'tower', category: 'art', title: 'A view from Gediminas’ Tower', area: 'Old Town', oldTown: true,
    time: '1–2 hours', cost: 'Ticketed', place: 'Gediminas Castle Tower',
    summary: 'Spend an hour with the castle exhibits and pick out landmarks from above.',
    plan: 'Check the museum’s latest access information and hours. After the tower visit, make your way down to Cathedral Square for a hot drink.',
    url: 'https://lnm.lt/en/museums/gediminas-castle-tower/', link: 'Plan your visit',
  },
  {
    weather: [],
    id: 'uzupis', category: 'fun', title: 'Make a treasure hunt in Užupis', area: 'Užupis', oldTown: false,
    time: 'About 1 hour', cost: 'Free', place: 'Angel of Užupis',
    summary: 'Find the Angel, read the Užupis Constitution, and take turns choosing the next side street.',
    plan: 'Cross into Užupis from Maironio Street. Make up one playful rule for your own two-person republic to finish the walk.',
    url: 'https://visitvilnius.lt/en/articles/vilnius-streets-where-the-city-comes-to-life', link: 'Explore Užupis',
  },
  {
    id: 'lukiskes', category: 'event', title: 'A gig at Lukiškės Prison 2.0', area: 'City centre', oldTown: false,
    time: 'Depends on the event', cost: 'Varies', place: 'Lukiškės Prison 2.0',
    summary: 'Pick a live show together at a former prison turned cultural venue.',
    plan: 'Check the venue’s listings for the date, room, and ticket information before heading over. Choose a show neither of you would usually pick.',
    url: 'https://www.lukiskiukalejimas.lt/', link: 'See the venue programme',
  },
  {
    id: 'pylimo', category: 'food', title: 'Coffee and a pastry swap', area: 'Old Town', oldTown: true,
    time: '30–60 min', cost: 'Pay as you go', place: 'Stiklių gatvė',
    summary: 'Find a café around Stiklių Street and order each other a pastry.',
    plan: 'Meet near Town Hall Square and wander until you find a spot with two seats. If the weather is good, take your order to go and stroll along the side streets.',
  },
  ...cityIdeas,
];

const filters = document.querySelector('#filters');
const cards = document.querySelector('#cards');
const oldTown = document.querySelector('#old-town');
const season = document.querySelector('#season');
const temperature = document.querySelector('#temperature');
const clearFilters = document.querySelector('#clear-filters');
const sourceLinks = document.querySelector('#source-links');
const savedButton = document.querySelector('#saved');
const dialog = document.querySelector('#details');
const surprise = document.querySelector('#surprise');
const eventDay = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Vilnius' });
const displayDay = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
});
let eventsUpdatedAt;
let category = 'all';
let savedOnly = false;
let lastSurprise;
let saved;

try {
  const stored = JSON.parse(localStorage.getItem('vilnius-for-two-saved'));
  saved = new Set(Array.isArray(stored) ? stored : []);
} catch {
  saved = new Set();
}

for (const [key, label] of Object.entries(categories)) {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = label;
  button.dataset.filter = key;
  button.addEventListener('click', () => {
    category = key;
    render();
  });
  filters.append(button);
}

function active(idea) {
  if (idea.endsOn) return idea.endsOn >= eventDay.format(new Date());
  return !idea.expires || idea.expires > Date.now();
}

function matchingIdeas() {
  return ideas.filter(idea => active(idea)
    && (category === 'all' || idea.category === category)
    && (!oldTown.checked || idea.oldTown)
    && (!season.value || !idea.seasons || idea.seasons.includes(season.value))
    && (!temperature.value || (idea.weather ?? ['hot', 'cold']).includes(temperature.value))
    && (!savedOnly || saved.has(idea.id)));
}

function toggleSaved(id, button) {
  if (saved.has(id)) saved.delete(id);
  else saved.add(id);
  try {
    localStorage.setItem('vilnius-for-two-saved', JSON.stringify([...saved]));
  } catch {
    // Browsing restrictions may limit saves to this visit.
  }
  if (savedOnly) {
    render();
    (cards.querySelector('.heart') || savedButton).focus();
  } else {
    updateHeart(button, ideas.find(idea => idea.id === id));
    updateSavedCount();
  }
}

function updateHeart(button, idea) {
  button.textContent = saved.has(idea.id) ? '♥' : '♡';
  button.setAttribute('aria-pressed', String(saved.has(idea.id)));
  button.setAttribute('aria-label', 'Save ' + idea.title);
}

function updateSavedCount() {
  const count = ideas.filter(idea => active(idea) && saved.has(idea.id)).length;
  document.querySelector('#saved-count').textContent = count ? ' ' + count : '';
}

function render() {
  const matches = matchingIdeas();
  clearFilters.hidden = !oldTown.checked && !season.value && !temperature.value && category === 'all';
  sourceLinks.replaceChildren();
  for (const [kind, label, url] of fullListings) {
    if (savedOnly || (category !== 'all' && category !== kind)) continue;
    const link = document.createElement('a');
    link.textContent = label;
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    sourceLinks.append(link);
  }
  if (eventsUpdatedAt && !savedOnly && (category === 'all' || category === 'event')) {
    const updated = document.createElement('span');
    updated.textContent = 'Event calendar checked ' + displayDay.format(new Date(eventDay.format(eventsUpdatedAt)));
    sourceLinks.append(updated);
  }
  sourceLinks.hidden = !sourceLinks.children.length;
  for (const button of filters.children) {
    button.setAttribute('aria-pressed', String(button.dataset.filter === category));
  }
  savedButton.setAttribute('aria-pressed', String(savedOnly));
  document.querySelector('#ideas-title').textContent = savedOnly ? 'Saved dates' : 'Find your next date';
  document.querySelector('#results').textContent = matches.length + (matches.length === 1 ? ' date idea' : ' date ideas');
  updateSavedCount();
  cards.replaceChildren();

  for (const idea of matches) {
    const card = document.querySelector('#card').content.firstElementChild.cloneNode(true);
    card.dataset.category = idea.category;
    card.querySelector('.category').textContent = categories[idea.category];
    card.querySelector('h3').textContent = idea.title;
    card.querySelector('p').textContent = idea.summary;
    card.querySelector('.meta').textContent = [idea.area, idea.time, idea.cost].join(' · ');
    const heart = card.querySelector('.heart');
    updateHeart(heart, idea);
    heart.addEventListener('click', () => toggleSaved(idea.id, heart));
    const details = card.querySelector('.text-button');
    details.setAttribute('aria-label', 'Date details for ' + idea.title);
    details.addEventListener('click', () => openDetails(idea));
    cards.append(card);
  }

  if (!matches.length) {
    const message = document.createElement('p');
    message.className = 'empty';
    message.textContent = savedOnly
      ? 'No saved dates match these filters. Try All ideas or tap a heart while browsing.'
      : 'No date ideas match these filters. Try clearing a filter to see more of Vilnius.';
    cards.append(message);
  }
  surprise.disabled = !matches.length;
}

function openDetails(idea) {
  const content = document.querySelector('#detail-content');
  content.dataset.category = idea.category;
  content.innerHTML = '<span class="category"></span><h2 id="detail-title"></h2><p class="meta"></p><p class="plan"></p><div class="detail-links"></div>';
  content.querySelector('.category').textContent = categories[idea.category];
  content.querySelector('h2').textContent = idea.title;
  content.querySelector('.meta').textContent = [idea.area, idea.time, idea.cost].join(' · ');
  content.querySelector('.plan').textContent = idea.plan;
  const links = content.querySelector('.detail-links');
  const destinations = idea.url ? [[idea.link, idea.url]] : [];
  if (idea.place) {
    const map = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(idea.place + ', Vilnius');
    destinations.push(['Open map', map]);
  }
  for (const [label, url] of destinations) {
    const link = document.createElement('a');
    link.className = 'button secondary';
    link.textContent = label;
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    links.append(link);
  }
  dialog.showModal();
}

savedButton.addEventListener('click', () => {
  savedOnly = !savedOnly;
  category = 'all';
  resetFilters();
  render();
  document.querySelector('#ideas').scrollIntoView();
});
document.querySelector('nav a').addEventListener('click', () => {
  if (savedOnly) {
    savedOnly = false;
    render();
  }
});
function resetFilters() {
  category = 'all';
  oldTown.checked = false;
  season.value = '';
  temperature.value = '';
}

for (const input of [oldTown, season, temperature]) input.addEventListener('change', render);
clearFilters.addEventListener('click', () => {
  resetFilters();
  render();
  filters.firstElementChild.focus();
});
surprise.addEventListener('click', () => {
  const matches = matchingIdeas();
  const options = matches.length > 1 ? matches.filter(idea => idea.id !== lastSurprise) : matches;
  if (!options.length) return;
  const idea = options[Math.floor(Math.random() * options.length)];
  lastSurprise = idea.id;
  openDetails(idea);
});
render();


async function loadDailyEvents() {
  try {
    const response = await fetch('./daily-events.json', { cache: 'no-cache' });
    if (!response.ok) return;
    const snapshot = await response.json();
    const updatedAt = new Date(snapshot.updatedAt);
    if (!Array.isArray(snapshot.events) || Number.isNaN(updatedAt.getTime())) return;

    const events = snapshot.events.map(event => {
      const start = new Date(event.startsOn);
      const end = new Date(event.endsOn);
      const time = event.startsOn === event.endsOn
        ? displayDay.format(start)
        : displayDay.formatRange(start, end);
      return { ...event, time };
    });
    const firstEvent = ideas.findIndex(idea => idea.category === 'event');
    ideas.splice(firstEvent, 0, ...events);
    eventsUpdatedAt = updatedAt;
    render();
  } catch {
    // The built-in suggestions remain available if the calendar cannot load.
  }
}

loadDailyEvents();
