const forumProgramme = 'https://forumcinemas.lt/lt/';
const fullListings = [
  ['event', 'Full Vilnius events calendar', 'https://www.vilnius-events.lt/en/'],
  ['hike', 'All sections of the Vilnius 100 km trail', 'https://vilnius100km.lt/en/'],
  ['cinema', 'Current Forum Cinemas programme', forumProgramme],
];

const outdoors = ['spring', 'summer', 'autumn'];
const cityIdeas = [
  {
    id: 'puckoriai', category: 'hike', title: 'Pūčkoriai nature trail', area: 'Pavilniai', oldTown: false,
    time: 'About 6 km · moderate', cost: 'Free', place: 'Pūčkorių atodanga',
    seasons: outdoors, weather: [],
    summary: 'Follow the Vilnelė past a historic mill and through the river valley.',
    plan: 'Use the park map to follow the signed Pūčkoriai cognitive trail. Allow extra time for the overlook and the Belmontas mill area.',
    url: 'https://www.govilnius.lt/visit-vilnius/places/pavilniai-regional-park', link: 'Trail information',
  },
  {
    id: 'vingis-loop', category: 'hike', title: 'Vingis Park forest loop', area: 'Naujamiestis', oldTown: false,
    time: '60–90 min · easy', cost: 'Free', place: 'Vingis Park entrance M. K. Čiurlionio g.',
    weather: ['hot', 'cold'],
    summary: 'Walk the wooded park paths with a detour to the Neris riverbank.',
    plan: 'Start at the M. K. Čiurlionio Street entrance, walk to the park’s central clearing and take the riverside paths back. In cold weather, stick to cleared paths.',
    url: 'https://www.govilnius.lt/visit-vilnius/latest-tips/activities-in-vilnius-for-people-who-like-to-move', link: 'Park and walking guide',
  },
  {
    id: 'vilnius-100', category: 'hike', title: 'Pick a section of the Vilnius 100 km trail', area: 'Across Vilnius', oldTown: false,
    time: 'Distance varies by section', cost: 'Free', place: 'Stalo kalnas Vilnius',
    seasons: outdoors, weather: [],
    summary: 'Pick one stretch of the marked loop that links forest, river and hill paths around the city.',
    plan: 'Use the official map to choose a section and download the route. Stalo kalnas is the official start if you want to set off close to Old Town.',
    url: 'https://vilnius100km.lt/en/', link: 'Route map and downloads',
  },
  {
    id: 'hill-loop', category: 'hike', title: 'Table Hill and Kalnų Park', area: 'Old Town edge', oldTown: false,
    time: '60–90 min · hilly', cost: 'Free', place: 'Stalo kalnas Vilnius',
    seasons: outdoors, weather: [],
    summary: 'Link Table Hill and the Three Crosses for two viewpoints on one walk.',
    plan: 'Start at Stalo kalnas, take the park paths toward Three Crosses and descend toward Bernardine Garden. Expect climbs, steps and uneven paths.',
    url: 'https://www.govilnius.lt/visit-vilnius/tours/100km-trail-around-vilnius', link: 'Find Table Hill on the trail map',
  },
  {
    id: 'neris', category: 'walk', title: 'A long walk along the Neris', area: 'City centre', oldTown: false,
    time: 'About 1 hour', cost: 'Free', place: 'White Bridge Vilnius',
    weather: ['hot'],
    summary: 'Start at the White Bridge, follow the river and choose a spot to watch the city go by.',
    plan: 'Meet at the south end of the White Bridge, cross together and explore the river path. On hot days, start in the morning or after the afternoon heat.',
    url: 'https://www.govilnius.lt/visit-vilnius/latest-tips/activities-in-vilnius-for-people-who-like-to-move', link: 'Explore riverside routes',
  },
  {
    id: 'light-festival', category: 'event', title: 'Vilnius Light Festival', area: 'Old Town', oldTown: true,
    time: '22–24 Jan 2027', cost: 'Check programme', place: 'Vilnius Old Town',
    seasons: ['winter'], weather: ['cold'], expires: Date.parse('2027-01-25T00:00:00+02:00'),
    summary: 'Walk between light installations in Old Town streets and courtyards.',
    plan: 'Use the festival map to choose a few installations close to each other. Add a warm drink stop halfway through.',
    url: 'https://lightfestival.lt/en/', link: 'Official festival programme',
  },
  {
    id: 'kaziukas', category: 'event', title: 'Kaziukas Fair', area: 'City centre', oldTown: false,
    time: '5–7 Mar 2027', cost: 'Free to browse', place: 'Gedimino prospektas Vilnius',
    seasons: ['spring'], weather: ['cold'], expires: Date.parse('2027-03-08T00:00:00+02:00'),
    summary: 'Browse Lithuanian craft stalls and pick a treat for each other.',
    plan: 'Check the published fair map, then meet at one end and walk the stalls together.',
    url: 'https://www.govilnius.lt/visit-vilnius/latest-tips/vilniuss-biggest-events', link: 'Go Vilnius event details',
  },
  {
    id: 'pink-soup', category: 'event', title: 'Vilnius Pink Soup Fest', area: 'Across Vilnius', oldTown: false,
    time: '28–30 May 2027', cost: 'Free to browse', place: 'Vilnius',
    seasons: ['spring'], weather: ['hot'], expires: Date.parse('2027-05-31T00:00:00+03:00'),
    summary: 'Compare bowls of šaltibarščiai and see what the city has planned for the festival.',
    plan: 'Check the official programme for locations and choose two stops you can walk between.',
    url: 'https://www.govilnius.lt/visit-vilnius/latest-tips/vilniuss-biggest-events', link: 'Go Vilnius event details',
  },
  {
    id: 'culture-night', category: 'event', title: 'Culture Night', area: 'Across Vilnius', oldTown: false,
    time: '12 Jun 2027', cost: 'Check programme', place: 'Vilnius',
    seasons: ['summer'], weather: ['hot'], expires: Date.parse('2027-06-13T00:00:00+03:00'),
    summary: 'Make an evening out of installations, performances and pop-up culture.',
    plan: 'Choose one performance each once the programme is out. Leave room between stops for a walk and a late snack.',
    url: 'https://www.govilnius.lt/visit-vilnius/latest-tips/vilniuss-biggest-events', link: 'Go Vilnius event details',
  },
  {
    id: 'paupys-food', category: 'food', title: 'Share three plates at Paupys Market', area: 'Paupys', oldTown: false,
    time: '1–2 hours', cost: 'Pay as you go', place: 'Paupys Market',
    summary: 'Pick a dish each from different kitchens, then decide on a dessert together.',
    plan: 'Take a lap around the food hall before deciding. If it’s nice out, finish with a walk by the Vilnelė.',
    url: 'https://www.govilnius.lt/api/files/68cd53d4d0b35497748f2d7/Tasty%20Vilnius%202025.pdf', link: 'Go Vilnius food guide',
  },
  {
    id: 'forum-vingis', category: 'cinema', title: 'Movie night at Forum Cinemas Vingis', area: 'Naujamiestis', oldTown: false,
    time: '2–3 hours', cost: 'Ticketed', place: 'Forum Cinemas Vingis',
    summary: 'Choose a big-screen release or an IMAX screening at Vingis.',
    plan: 'Open Forum Cinemas’ programme and choose Vilnius and Vingis. Check the screening’s format, language and subtitles before booking.',
    url: forumProgramme, link: 'Current Forum Cinemas listings',
  },
];

const forumSnapshot = [
  ['hunger-games', 'Bado žaidynės: aukų dienai auštant', 'Fantasy adventure · English audio', 'https://forumcinemas.lt/lt/movie/the-hunger-games-sunrise-on-the-reaping/'],
  ['josephine', 'Džozefina', 'Drama · English audio', forumProgramme],
  ['bank', 'Kaip apiplėšti banką', 'Action thriller', forumProgramme],
  ['scrooge', 'Ponas Skrudžas ir Kalėdų dvasios', 'Christmas ghost story · English audio', forumProgramme],
];

for (const [id, title, genre, url] of forumSnapshot) {
  cityIdeas.push({
    id: 'forum-' + id, category: 'cinema', title, area: 'Forum Cinemas Vingis', oldTown: false,
    time: 'November 2026 listing', cost: 'Ticketed', place: 'Forum Cinemas Vingis',
    seasons: ['autumn'], expires: Date.parse('2026-11-27T00:00:00+02:00'),
    summary: genre + '. Listed by Forum Cinemas for Vingis.',
    plan: 'From the November programme, checked 23 November. Check the current showtimes, audio and subtitles at Forum Cinemas before booking.',
    url, link: 'Check Forum Cinemas',
  });
}
