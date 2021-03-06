const translateProjectTitleToPath = title =>
  title.replace(/\s+/g, '-').toLowerCase();

const projects = [
  {
    title: 'AXIO',
    description:
      'An intelligent platform for personalized growth and lifelong learning.',
    info:
      'AXIO is an adaptive, lifelong learning platform driven by an A.I. personal companion whose purpose is to cultivate the overall self-development of an individual. AXIO is designed to learn from its human companion and leverages personalized information to add value throughout a user’s life relative to age-specific objectives. The platform itself contains a crowd-sourced learning tool that allows the community to add and curate all content, encouraging users to learn by teaching. Not only is AXIO is an example of our students’ capability to design, develop, and deploy enterprise-level software systems that leverage modern software frameworks and advanced machine learning algorithms, but it highlights our students ability to leverage design-thinking to create a technical system that can effectively interact with human users.'
  },
  // {
  //   title: 'Byblos',
  //   description:
  //     'Evolving the way researchers view and use null results to promote scientific collaboration.',
  //   info:
  //     'Null results are often not shared in scientific research, as they risk the reputation of the author and require large amounts of work for a relatively low reward. As a result, there is redundancy, wasted data, and a general lack of collaboration in scientific research. Project Byblos will be an application that provides a platform for scientific researchers to share their null results with limited effort and the incentive of potentially gaining authorship on related projects. This will result in a database of null results, allowing researchers to learn from the limitations of failed experiments and reducing the risk of redundancy in scientific research. Further, this application will serve as a tool to increase collaboration and communication within the general scientific community.'
  // },
  // {
  //   title: 'Ceryx',
  //   description:
  //     'An electronic health records system built on modern standards to be intelligent, secure by default, and beautifully engaging.',
  //   info:
  //     'Ceryx is the realization of the lab’s desire to redesign and develop a modern Electronic Health Records (EHR) system that is better suited to address the health needs of today. The software will better enable physicians to provide data-driven, tailored care to patients, while automating a number of tedious tasks that often burden physicians. Ceryx is being designed with security in mind, leveraging client-side encryption technology to prevent patient data from being exposed and paving the path for the future establishment of a globally standardized EHR.'
  // },
  {
    title: 'GridBase',
    description:
      'A smart DC microgrid with the goal of establishing and improving access to stable energy.',
    info:
      'Inspired by research into energy problems in Beirut, Lebanon, Gridbase aims to improve energy stability and renewable energy integration in developing communities with micro-grid technologies. This D.C. micro-grid solution will be low cost, easy to assemble on-site, and will produce power with high efficiency and reliability. The system is designed to interoperate with existing infrastructure and loads, and will distribute equitable allocations throughout the network during times of electrical scarcity.'
  },
  {
    title: 'The PPE Response Network',
    description:
      'A digital network to facilitate the manufacturing and delivery of rapidly manufactured PPE during the COVID-19 pandemic',
    info:
      'Developed within four weeks and launched at the onset of the COVID-19 pandemic, the PPE Response Network allows healthcare providers to submit their needs for personal protective equipment and medical devices. Once requests are in, a community of producers manufacture the necessary equipment. This equipment is sent to processing providers for sanitization/sterilization and delivered to healthcare providers. These three actors working together, help address the rising demands for medical supplies.'
  },
  {
    title: 'Guardian Drones',
    description:
      'An autonomous drone system that facilitates safety escort and provides rapid response services in emergency situations.',
    info:
      'Guardian Drones is an autonomous drone system designed by Luminosity researchers to increase university campus safety by augmenting existing emergency response teams with autonomous agents. Using a proprietary mobile application, students can request to be escorted through campus by an autonomous drone. The drone fleet provides illumination and establishes a live video link for ASU’s Police Department to monitor activity. To ensure the success of the system, the drones were designed with multiple functional safety features, such as deployable parachutes and encryption protected software. The drone fleet is capable of responding to a student’s request and arriving at their location on campus within a minute. The system was designed to be self-sufficient, in addition to the development of the drones, Luminosity students developed and submitted an invention disclosure for a base station that is capable of automatically docking and charging drones through a contact driven system.'
  },
  {
    title: 'KIP',
    description:
      'An affordable, open-source, hands-on robotics platform for teaching a breadth of relevant hardware and software skills to students of all ages.',
    info:
      'KIP is an open-source, 3D printable robot that allows individuals of all ages to learn a full breadth of technical skills, from software development and machine learning, to circuits and mechanics. Once built, a user can fully customize their KIP’s hardware and software, allowing for endless creativity. KIP can be used as both a learning tool, as well as a low-cost robotics platform for conducting research and experimentation.'
  },
  {
    title: 'Digital Handoff Counter',
    description:
      'A patented, digital counter that better facilitates food/drink hand-off within restaurants.',
    info:
      `Luminosity's patented digital handoff counter was developed to help customers quickly identify their food items when picking up their meals. The system identifies when an item has been placed on the counter, determines which user the item belongs to, and projects the name of the customer next to the food item within the digitized countertop.`
  },
  {
    title: 'VELOS',
    description:
      `A system to explore the moon's permanently shadowed regions`,
    info:
      `VELOS, short for Variable Exploratory Lunar Observation System, is a specially designed launcher and probe system created by a team of Arizona State University students from the Luminosity Lab. The group is one of eight university teams that NASA named as finalists last spring in its Breakthrough, Innovative, and Game-changing (BIG) Idea Challenge. The VELOS system is designed to efficiently explore the moon's permanently shadowed regions, as they are difficult to study, but could have vital impact on the future of space travel.`
  },
  {
    title: 'COVID-19 Sterilization Systems',
    description:
      `Novel, cost-effective systems for sterilizing N95 masks and other Personal Protective Equipment (PPE) `,
    info:
      `Students within Luminosity developed and patented two low cost sterilization systems to help combat the COVID-19 pandemic. The team created two sterilization systems. The first uses vaporized hydrogen peroxide and is intended to combat the N95 mask shortage. The second relies on ozone, and was designed to provide small businesses with a way to sterilize a variety of items, including clothing and reusable face masks. The lab is currently working to get these systems in the hands of educators, medical providers, and business owners. `
  },
  // {
  //   title: 'Rayo',
  //   description:
  //     'Assisting caregivers for people with special needs to provide the highest quality care possible.',
  //   info:
  //     'Individuals who have cognitive disabilities are not provided with consistent quality care which prohibits them from integrating into society and becoming contributing members of society. Rayo is a software tool that enables caretakers to provide consistent quality care to individuals with cognitive disabilities through all aspects of their day. The goal is to collect accurate data, visualize goal progress, then predict relevant solutions. This will in turn aid caretakers ability to provide quality care.'
  // },
  {
    title: 'Trident One',
    description:
      "A self-driving Camaro built to conduct autonomous vehicle research in high-speed environments.",
    info:
      'A team of Luminosity students at ASU’s Polytechnic Campus have retrofitting the Camaro intro a fully autonomous vehicle. Reminiscent of IBM’s Chess Playing A.I., Deep Blue, the team aspires to challenge one of the world’s top NASCAR racers with a fully autonomous vehicle capable of winning a head-to-head time-trail race in what is to be a classic man vs machine face-off. Upon completing this work, the lab will have access to one of few existing vehicles of this type, opening the door to a portfolio of research on autonomous vehicles operating in high speed conditions.'
  },

];

const projectsWithPaths = projects.map(project => ({
  ...project,
  path: translateProjectTitleToPath(project.title)
}));

module.exports = projectsWithPaths;


