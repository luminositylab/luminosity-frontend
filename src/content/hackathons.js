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
  }
];

const hackathonsWithPaths = hackathons.map(hackathon => ({
  ...hackathon,
  path: translateHackathonTitleToPath(hackathon.title)
}));

module.exports = hackathonsWithPaths;
