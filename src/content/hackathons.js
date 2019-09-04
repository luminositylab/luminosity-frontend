const translateHackathonTitleToPath = title =>
  title.replace(/\s+/g, '-').toLowerCase();

const hackathons = [
  {
    title: 'SolutionsX Hackathon',
    description: 'Hosted by Bank of the West.'
  }
];

const hackathonsWithPaths = hackathons.map(hackathon => ({
  ...hackathon,
  path: translateHackathonTitleToPath(hackathon.title)
}));

module.exports = hackathonsWithPaths;
