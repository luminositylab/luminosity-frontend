const translateHackathonTitleToPath = title =>
  title.replace(/\s+/g, '-').toLowerCase();

const hackathons = [
  {
    title: 'Action.ML',
    description: 'Hosted by Fox.'
  },
  {
    title: 'SolutionsX',
    description: 'Hosted by Bank of the West.'
  },
  {
    title: 'Emergentech',
    description: 'Hosted by The Luminosity Lab.'
  }
];

const hackathonsWithPaths = hackathons.map(hackathon => ({
  ...hackathon,
  path: translateHackathonTitleToPath(hackathon.title)
}));

module.exports = hackathonsWithPaths;
