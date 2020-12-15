const translateMemberNameToPath = name =>
  name.replace(/\s+/g, '-').toLowerCase();

const leadership = [
  {
    name: 'Mark Naufel',
    title: 'Executive Director',
    description:
      'Mark Naufel is a 26 year old Arizona native. He has received his Bachelor’s Degree in Finance, and Master’s Degrees in both Business Analytics and Systems Engineering at Arizona State University. While an undergraduate, Mark served as Student Body President at ASU, and was later appointed by the Governor of Arizona to serve a two year term on the Arizona Board of Regents as the Student Regent. Previously, Mark drove strategy and data initiatives for companies both locally and in Silicon Valley. Currently, Mark serves as the Director of Strategic Projects at Arizona State University, and within this capacity leads an interdisciplinary lab of highly exceptional students.'
  },
  {
    name: 'Chase Adams',
    title: 'Associate Director',
    description:
      'Chase Adams is an Arizona State University graduate who earned bachelor’s degrees in mechanical engineering and computational mathematical sciences. During this time, he co-wrote Coverage and Field Estimation on Bounded Domains by Diffusive Swarms, modeling a diffusive control methodology for a swarm of robots using the heat equation to "rewind time" to get the initial location of the agents. He has previously worked for multiple software companies as a full-stack engineer and co-founded a software startup in the real estate industry. He has extensive experience in distributed, scalable, and secure software architectures. Presently he is the Assistant Director of Strategic Projects at Arizona State University, leading the software initiatives within the lab.'
  },
  {
    name: 'Tyler Smith',
    title: 'Associate Director',
    description:
      'Tyler Smith is a graduate of the ASU Fulton Schools of Engineering with a Bachelors and Masters degrees in Mechanical Engineering and certificate in Knowledge Entrepreneurship and Innovation from the WP Carey School of Business. Upon graduation, Tyler was a recipient of the Moeur Award for completing his degrees with a GPA of 4.0 or higher.  During his masters degree he focused on numerical simulation and high performance computing and wrote his own multiphase fluid dynamics solver and parallel numerical algorithms that could solve on large compute clusters. After graduation he applied his degree at an engineering consulting company and worked on wide variety of applications such as energy systems, aerospace and defense, medical devices, and consumer products. Tyler led a team of cross disciplinary engineers working on numerous projects and successfully managed the team and customer relations to grow the program into one of the company’s largest ongoing contracts. Currently, Tyler serves as the Associate Director of Strategic Projects at Arizona State University and leads teams of electrical, mechanical, and design students working on innovative projects in the Luminosity Lab.'
  },
  {
    name: 'Robb Olivieri',
    title: 'Project Manager',
    description:
      'Robb Olivieri is a New Jersey native and a graduate of Iona College in New York, where he obtained a Bachelor’s Degree in Political Science. He has spent several years in both the Higher Education and Startup spaces. Most recently serving as Director of Operations for a Phoenix based health-tech startup. Currently, Robb is managing a portfolio of projects within the lab and building out International Development’s Student Development Corps program.'
  },
  {
    name: 'Stacy Wagner',
    title: 'Manager',
    description: 'Stacy Wagner'
  }
];

const members = [
 

 
  // {
  //   name: 'Alexandra Fernandez',
  // },
  {
    name: 'Alia Gilbert',
  },
  {
    name: 'Alice Bao',
  },
  {
    name: 'Ally Shott',
  },
  {
    name: 'Andrei Marinescu',
  },
  {
    name: 'Aritro Majumdar',
    // title: 'The Data Scientist',
    // description:
    //   'Aritro Majumdar is a senior studying mathematics. He joined the lab at the beginning of the Fall 2018 semester. He is passionate about the data science, education, and entrepreneurship spaces and hopes to have a career in the cross-section. He took a year off from ASU and decided to pursue a certificate in data science at the coding school Galvanize and graduated early February 2018. Ever since then, he has been helping non-profits and companies build data-driven processes in their organizations and perform predictive analytics. Aritro also loves to connect with interesting people and collaborate on projects.  Outside of data science, Aritro helps run a co-working space in Tempe and plays percussion.'
  },
  {
    name: 'Brian Wohlers',
  },
  {
    name: 'Bryce Copenhaver',
  },
  {
    name: 'Cameron Anundson',
  },
  {
    name: 'Carson Gray',
  },
  {
    name: 'Cat Lewis',
  },
  {
    name: 'Clara Hall',
  },
  {
    name: 'Clinton Ewell',
  },
  {
    name: 'Collin Schairer',
  },
  {
    name: 'Coltin Smith',
  },
  {
    name: 'Connor Nail',
  },
  {
    name: 'Dimetrius Hightower',
  },
  {
    name: 'Dylan Kerr',
  },
  {
    name: 'Ethan Clark',
  },
  {
    name: 'Evan Weiss',
  },
  {
    name: 'Gowan Rowland',
  },
  {
    name: 'Haley Harelson',
  },
  {
    name: 'Hari Meyyappan',
  },
  {
    name: 'Harish Bhutra',
  },
  {
    name: 'Harsha Vanama',
  },
  {
    name: 'J.P. Wightman',
  },
  {
    name: 'Jeremy Liu',
  },
  {
    name: 'John Patterson',
  },
  {
    name: 'Joshua Chang',
  },
  {
    name: 'Julia Greteman',
  },
  {
    name: 'Kamille Green',
  },
  {
    name: 'Kusum Ijari',
  },
  {
    name: 'Kylel Scott',
  },
  {
    name: 'Lewis Ruskin',
  },
  {
    name: 'Lien White',
  },
  {
    name: 'Manaswini Ayalasomayajula',
  },
  {
    name: 'Maria Ananickal',
  },
  {
    name: 'Mary Saxon',
  },
  {
    name: 'Michelle Stinton',
  },
  {
    name: 'Micki Calo',
  },
  {
    name: 'Nathaniel Ross',
  },
  {
    name: 'Nik Dave',
  },
  {
    name: 'Nikki Tran',
  },
  {
    name: 'Rakshith Subramanyam',
  },
  {
    name: 'Shakki Bhat',
  },
  {
    name: 'Shannon McBreen',
  },
  {
    name: 'Shawn Mian',
  },
  {
    name: 'Shilpa Bhat',
  },
  {
    name: 'Shivam Sadachar',
  },
  {
    name: 'Shraddha Bhalerao',
  },
  {
    name: 'Skanda Suresh',
  },
  {
    name: 'Sree Gowtham Josyula',
  },
  {
    name: 'Sudarsan Manikandan',
  },
  {
    name: 'Sydney Wallace',
  },
  {
    name: 'Tina Peng',
  },
  {
    name: 'Trevor Lucero',
  },
  {
    name: 'Victor Oleynik',
  },
  {
    name: 'Vincent Caldwell',
  },
  {
    name: 'Vivek Maskara',
  },
  {
    name: 'Wayne Unger',
  },

];

const membersWithPaths = members.map(member => ({
  ...member,
  path: translateMemberNameToPath(member.name)
}));

const leadershipWithPaths = leadership.map(member => ({
  ...member,
  path: translateMemberNameToPath(member.name)
}));

module.exports = { members: membersWithPaths, leadership: leadershipWithPaths };
