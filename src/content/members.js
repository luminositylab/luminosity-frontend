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
    width: 4,
    height: 4
  },
  {
    name: 'Alice Bao',
    width: 3,
    height: 4
  },
  {
    name: 'Ally Shott',
    width: 4,
    height: 4
  },
  {
    name: 'Andrei Marinescu',
    width: 4,
    height: 4
  },
  {
    name: 'Aritro Majumdar',
    width: 4,
    height: 4
  },
  {
    name: 'Brian Wohlers',
    width: 3,
    height: 4
  },
  {
    name: 'Bryce Copenhaver',
    width: 3,
    height: 4
  },
  {
    name: 'Cameron Anundson',
    width: 4,
    height: 4
  },
  {
    name: 'Carson Gray',
    width: 3,
    height: 4
  },
  {
    name: 'Cat Lewis',
    width: 3,
    height: 4
  },
  {
    name: 'Clara Hall',
    width: 4,
    height: 4
  },
  {
    name: 'Clinton Ewell',
    width: 3,
    height: 5
  },
  {
    name: 'Collin Schairer',
    width: 4,
    height: 4
  },
  {
    name: 'Coltin Smith',
    width: 3,
    height: 4
  },
  {
    name: 'Connor Nail',
    width: 4,
    height: 4
  },
  {
    name: 'Dimetrius Hightower',
    width: 4,
    height: 5
  },
  {
    name: 'Dylan Kerr',
    width: 4,
    height: 4
  },
  {
    name: 'Ethan Clark',
    width: 3,
    height: 4
  },
  {
    name: 'Evan Weiss',
    width: 4,
    height: 4
  },
  {
    name: 'Gowan Rowland',
    width: 3,
    height: 4
  },
  {
    name: 'Haley Harelson',
    width: 4,
    height: 6
  },
  {
    name: 'Hari Meyyappan',
    width: 4,
    height: 4
  },
  {
    name: 'Harish Bhutra',
    width: 3,
    height: 4
  },
  {
    name: 'Harsha Vanama',
    width: 4,
    height: 4
  },
  {
    name: 'J.P. Wightman',
    width: 4,
    height: 4
  },
  {
    name: 'Jeremy Liu',
    width: 4,
    height: 4
  },
  {
    name: 'John Patterson',
    width: 4,
    height: 4
  },
  {
    name: 'Joshua Chang',
    width: 4,
    height: 4
  },
  {
    name: 'Julia Greteman',
    width: 3,
    height: 4
  },
  {
    name: 'Kamille Green',
    width: 4,
    height: 4
  },
  {
    name: 'Kusum Ijari',
    width: 3,
    height: 4
  },
  {
    name: 'Kylel Scott',
    width: 3,
    height: 4
  },
  {
    name: 'Lewis Ruskin',
    width: 4,
    height: 4
  },
  {
    name: 'Lien White',
    width: 4,
    height: 6
  },
  {
    name: 'Manaswini Ayalasomayajula',
    width: 4,
    height: 4
  },
  {
    name: 'Maria Ananickal',
    width: 3,
    height: 4
  },
  {
    name: 'Mary Saxon',
    width: 3,
    height: 4
  },
  // {
  //   name: 'Michelle Stinton',
  //   width: 4,
  //   height: 4
  // },
  {
    name: 'Micki Calo',
    width: 4,
    height: 4
  },
  {
    name: 'Nathaniel Ross',
    width: 4,
    height: 4
  },
  {
    name: 'Nik Dave',
    width: 3,
    height: 5
  },
  {
    name: 'Nikki Tran',
    width: 3,
    height: 5
  },
  {
    name: 'Rakshith Subramanyam',
    width: 4,
    height: 4
  },
  {
    name: 'Shakki Bhat',
    width: 4,
    height: 6
  },
  {
    name: 'Shannon McBreen',
    width: 3,
    height: 5
  },
  {
    name: 'Shawn Mian',
    width: 3,
    height: 4
  },
  {
    name: 'Shilpa Bhat',
    width: 5,
    height: 4
  },
  {
    name: 'Shivam Sadachar',
    width: 4,
    height: 4
  },
  {
    name: 'Shraddha Bhalerao',
    width: 4,
    height: 4
  },
  {
    name: 'Skanda Suresh',
    width: 4,
    height: 4
  },
  {
    name: 'Sree Gowtham Josyula',
    width: 3,
    height: 4
  },
  {
    name: 'Sudarsan Manikandan',
    width: 3,
    height: 4
  },
  {
    name: 'Sydney Wallace',
    width: 4,
    height: 4
  },
  {
    name: 'Tina Peng',
    width: 3,
    height: 5
  },
  {
    name: 'Trevor Lucero',
    width: 5,
    height: 4
  },
  {
    name: 'Victor Oleynik',
    width: 3,
    height: 4
  },
  {
    name: 'Vincent Caldwell',
    width: 3,
    height: 4
  },
  {
    name: 'Vivek Maskara',
    width: 4,
    height: 4
  },
  {
    name: 'Wayne Unger',
    width: 3,
    height: 4
  },

];

// const members = [
//   {
//     src: require ('../assets/images/members/wayne-unger.jpg'),
//     width: 3,
//     height: 4
//   },
//   {
//     src: require ('../assets/images/members/tina-peng.jpg'),
//     width: 3,
//     height: 4
//   }
// ];

const membersWithPaths = members.map(member => ({
  ...member,
  width: member.width,
  height: member.height,
  src: require('../assets/images/members/' + translateMemberNameToPath(member.name) + '.jpg'),
}
));


const leadershipWithPaths = leadership.map(member => ({
  ...member,
  path: translateMemberNameToPath(member.name)
}));

module.exports = { members: membersWithPaths, leadership: leadershipWithPaths };
