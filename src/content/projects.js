const translateProjectTitleToPath = title =>
  title.replace(/\s+/g, '').toLowerCase();

const projects = [
  {
    title: 'Guardian Drones',
    description:
      'An autonomous drone system that provides rapid response services in emergency situations.'
  },
  {
    title: 'KIP',
    description:
      'An affordable, open-source, hands-on robotics platform for teaching a breadth of relevant hardware and software skills to students of all ages.'
  },
  {
    title: 'Luminosity Garage',
    description:
      "A self-driving Camaro built to compete against the world's top race car drivers."
  },
  {
    title: 'AXIO',
    description:
      'An intelligent platform for personalized growth and lifelong learning.'
  },
  {
    title: 'Ceryx',
    description:
      'An electronic health records system built on modern standards to be intelligent, secure by default, and beautifully engaging.'
  },
  {
    title: 'GridBase',
    description:
      'A smart DC microgrid with the goal of establishing and improving access to stable energy.'
  },
  {
    title: 'Overlay',
    description:
      'An artificial system that can fully comprehend the human experience.'
  },
  {
    title: 'Byblos',
    description: 'An online ecosystem which redefines research collaboration.'
  },
  {
    title: 'Peerkat',
    description: 'A personalized, one-click note-taking buddy.'
  },
  {
    title: 'HQ2',
    description: 'A re-designed city around an ultramodern business headquarters.'
  }
];

const projectsWithPaths = projects.map(project => ({
  ...project,
  path: translateProjectTitleToPath(project.title)
}));

module.exports = projectsWithPaths;
