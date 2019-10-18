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
    name: 'Meghan Gibson',
    title: 'Program Coordinator',
    description:
      'Meghan is a North Carolina native and graduate of the University of North Carolina at Charlotte where she obtained a Bachelor of Arts studying both History and Communication Studies with a concentration in Organizational Communication. Her career has been predominately in Higher Education, previously working at a men’s national Fraternity serving as the Director of Leadership Development. Throughout her time with the organization, Meghan created and oversaw small- and large-scale event budgets, planned and executed educational programming around risk management and alcohol education, officer training, and leadership development for the 180+ undergraduate chapters nationwide, collaborated with various hotels and vendors to host programs, communicated and provided logistical support for over 175 volunteers, and negotiated contracts. As a Program Coordinator for ASU’s Luminosity Lab, her responsibilities include providing programming and support for the lab, in addition to planning and executing hackathons for corporate partners.'
  },
  {
    name: 'Robb Olivieri',
    title: 'Project Manager',
    description:
      'Robb Olivieri is a New Jersey native and a graduate of Iona College in New York, where he obtained a Bachelor’s Degree in Political Science. He has spent several years in both the Higher Education and Startup spaces. Most recently serving as Director of Operations for a Phoenix based health-tech startup. Currently, Robb is managing a portfolio of projects within the lab and building out International Development’s Student Development Corps program.'
  }
  // {
  //   name: 'Stacy Wagner',
  //   title: 'The Merciless Matriarch',
  //   description: 'Stacy Wagner'
  // }
];

const members = [
  {
    name: 'John Patterson',
    // title: 'The Electric Guru',
    description:
      'John Patterson is a third-year electrical engineering student who specializes in analog circuits and power electronics. John’s electronics experience includes audio amplifier design, battery management system (BMS) design and implementation, DC-DC converter design, linear and switched-mode power supply design/analysis, photoelectronics/optoisolator design, and resonant coil circuit construction. He also has significant experience in fine soldering, mechanical fabrication, and PCB design. He plans to pursue a master’s degree in electrical engineering, and he plans to work in a power or circuit design-related field. Besides electrical engineering topics, John’s academic achievements include the Flinn and National Merit scholarships. Outside of ASU, John works for a startup company called Hoolest Performance Technologies as a product engineer and analog circuit designer. HPT designs and constructs vagus nerve electrostimulator technologies for athletic and medical applications. At HPT, John has designed a custom open-loop boost converter with inverter output in order to deliver the necessarily high voltage for successful nerve stimulation using the available power supply from a single-cell lithium battery. He has also designed multiple custom printed circuit boards implementing this circuit and has gained experience in design-for-manufacturing and mass production through this venture.'
  },
  {
    name: 'Tina Peng',
    // title: 'The Electric Guru',
    // description:
    //   'John Patterson is a third-year electrical engineering student who specializes in analog circuits and power electronics. John’s electronics experience includes audio amplifier design, battery management system (BMS) design and implementation, DC-DC converter design, linear and switched-mode power supply design/analysis, photoelectronics/optoisolator design, and resonant coil circuit construction. He also has significant experience in fine soldering, mechanical fabrication, and PCB design. He plans to pursue a master’s degree in electrical engineering, and he plans to work in a power or circuit design-related field. Besides electrical engineering topics, John’s academic achievements include the Flinn and National Merit scholarships. Outside of ASU, John works for a startup company called Hoolest Performance Technologies as a product engineer and analog circuit designer. HPT designs and constructs vagus nerve electrostimulator technologies for athletic and medical applications. At HPT, John has designed a custom open-loop boost converter with inverter output in order to deliver the necessarily high voltage for successful nerve stimulation using the available power supply from a single-cell lithium battery. He has also designed multiple custom printed circuit boards implementing this circuit and has gained experience in design-for-manufacturing and mass production through this venture.'
  },
  {
    name: 'Aritro Majumdar',
    // title: 'The Data Scientist',
    description:
      'Aritro Majumdar is a senior studying mathematics. He joined the lab at the beginning of the Fall 2018 semester. He is passionate about the data science, education, and entrepreneurship spaces and hopes to have a career in the cross-section. He took a year off from ASU and decided to pursue a certificate in data science at the coding school Galvanize and graduated early February 2018. Ever since then, he has been helping non-profits and companies build data-driven processes in their organizations and perform predictive analytics. Aritro also loves to connect with interesting people and collaborate on projects.  Outside of data science, Aritro helps run a co-working space in Tempe and plays percussion.'
  },
  {
    name: 'Julia Greteman',
    // title: 'The Voyager',
    // description:
    //   "J.D. Shaeffer is a native Arizonan, currently pursuing a Computer Science bachelor's degree at Arizona State University, where he has been on the Dean's list every semester. He worked as the Student Ambassador for the Google Cloud Platform (GCP), where he arranged events and taught the complexities of GCP on campus along with other Google engineers. He has also previously developed and consulted on websites for corporations in Utah. He lived in Paraguay during a 2-year service mission to the communities around Asunción and he has hiked the entire length (2,190 miles) of the Appalachian Trail. He and his team won first place at the 14th annual Women in Computer Science coding competition. He is a member of the Tempe Institute of Religion Council and continues to serve his community. He is presently the President of Shaeffer Enterprises LLC, a company focusing on unique web applications that is in the development stage."
  },
  {
    name: 'Gowan Rowland',
    // title: 'The Electric Guru',
    // description:
    //   'John Patterson is a third-year electrical engineering student who specializes in analog circuits and power electronics. John’s electronics experience includes audio amplifier design, battery management system (BMS) design and implementation, DC-DC converter design, linear and switched-mode power supply design/analysis, photoelectronics/optoisolator design, and resonant coil circuit construction. He also has significant experience in fine soldering, mechanical fabrication, and PCB design. He plans to pursue a master’s degree in electrical engineering, and he plans to work in a power or circuit design-related field. Besides electrical engineering topics, John’s academic achievements include the Flinn and National Merit scholarships. Outside of ASU, John works for a startup company called Hoolest Performance Technologies as a product engineer and analog circuit designer. HPT designs and constructs vagus nerve electrostimulator technologies for athletic and medical applications. At HPT, John has designed a custom open-loop boost converter with inverter output in order to deliver the necessarily high voltage for successful nerve stimulation using the available power supply from a single-cell lithium battery. He has also designed multiple custom printed circuit boards implementing this circuit and has gained experience in design-for-manufacturing and mass production through this venture.'
  },
  {
    name: 'Shilpa Bhat',
    // title: 'The Electric Guru',
    // description:
    //   'John Patterson is a third-year electrical engineering student who specializes in analog circuits and power electronics. John’s electronics experience includes audio amplifier design, battery management system (BMS) design and implementation, DC-DC converter design, linear and switched-mode power supply design/analysis, photoelectronics/optoisolator design, and resonant coil circuit construction. He also has significant experience in fine soldering, mechanical fabrication, and PCB design. He plans to pursue a master’s degree in electrical engineering, and he plans to work in a power or circuit design-related field. Besides electrical engineering topics, John’s academic achievements include the Flinn and National Merit scholarships. Outside of ASU, John works for a startup company called Hoolest Performance Technologies as a product engineer and analog circuit designer. HPT designs and constructs vagus nerve electrostimulator technologies for athletic and medical applications. At HPT, John has designed a custom open-loop boost converter with inverter output in order to deliver the necessarily high voltage for successful nerve stimulation using the available power supply from a single-cell lithium battery. He has also designed multiple custom printed circuit boards implementing this circuit and has gained experience in design-for-manufacturing and mass production through this venture.'
  },
  {
    name: 'Joshua Chang',
    // title: 'The Human Paintbrush',
    description:
      'Josh Chang is a 26 year old Colorado native. He has received his Bachelor’s Degrees in Industrial Design and Design Management at Arizona State University, and a CSWP in Mechanical Design. While an undergraduate, Josh was the founding designer of Luminosity, as a key Front End player in the establishment of the Laboratory’s reputation. During this time, he also worked as a Mechanical Designer at a local machine shop and worked with groups around ASU to expand his interdisciplinary experience, such as Innovation Space, IDSA, and SAE. Josh had worked in the past as a Design Freelancer and consultant for several startups and an Industrial Design firm in Phoenix, while joining the occasional art show to keep things fun. Josh is presently, going to be working as a mentor for the 2018-2019 design team while establishing his design career as a recent graduate.'
  },
  {
    name: 'Catharine Lewis',
    // title: 'The Creator',
    description:
      'Catharine Lewis is a junior at ASU (also a member of Barrett, the Honors College) pursuing her undergrad in Industrial Design and a certificate in Entrepreneurship. Before attending ASU, her background in fine arts established a skill set with a focus on drawing and visual communication. She joined the lab in February 2018. For the ASU + GSV Summit, she developed and drew the MYRA Comic, a visual story communicating the MYRA project’s origin and vision. She also contracts for a landscaping company in Washington, DC, developing renders of landscape design concepts to pitch to prospective clients. Catharine is committed to constant learning and self-improvement, spending much of her free time buried in a book or internet tutorial. She is always ready to contribute to a new and exciting idea or discover a new interest from a teammate.'
  },
  {
    name: 'Nikhil Dave',
    // title: 'The Stargazer',
    description:
      'Nik is an Arizona native and a freshman undergraduate student at ASU’s Barrett, The Honors College, pursuing a major in Biological Sciences. Nik has been involved in neuroscience research at the Biodesign Institute since the age of 14, having co-authored his first scientific publication at 16 years old. While maintaining academic excellence in high school, he was heavily involved within his community, piloting his school’s capstone program and serving as Student Body President. Some of Nik’s achievements include being awarded the Flinn Scholarship, the ASU National Merit Scholarship, and Arizona’s 18 Under 18 Award. Using his experience in biomedical research, coupled with his charismatic leadership style and creative nature, Nik aims to expand Luminosity’s interdisciplinary efforts toward innovations in translational research and medicine. Furthermore, Nik is driven to employ his thoughtful and passionate personality to inspire others and prove that there is no age requirement when it comes to passion and ambition.'
  },
  {
    name: 'Evan Weiss',
    // title: 'The Prodigy',
    description:
      'Evan Weiss is a 18 year Arizona native. He is currently a Sophomore pursuing a Bachelor’s Degree in Computer Science with a Minor in Mathematics at Arizona State University. After attending BASIS Scottsdale high school, Evan graduated as a junior and came to ASU at age 17 with enough credits to place him at a junior standing. He currently plans on graduating in May 2020, with the goal of pursing a PhD in Artificial Intelligence. Evan has been involved in many tech startups, ranging from computational bio-design at Systems Imagination to cybersecurity. Evan joined Luminosity last year, helping work on Axio mockups and front-end design, while also jumping around on several other projects. He plans on getting involved in the lab this year as a leader on new projects and a contributor in ideation, design, and development.'
  },
  {
    name: 'Kusum Ijari',
    // title: 'The Electric Guru',
    // description:
    //   'John Patterson is a third-year electrical engineering student who specializes in analog circuits and power electronics. John’s electronics experience includes audio amplifier design, battery management system (BMS) design and implementation, DC-DC converter design, linear and switched-mode power supply design/analysis, photoelectronics/optoisolator design, and resonant coil circuit construction. He also has significant experience in fine soldering, mechanical fabrication, and PCB design. He plans to pursue a master’s degree in electrical engineering, and he plans to work in a power or circuit design-related field. Besides electrical engineering topics, John’s academic achievements include the Flinn and National Merit scholarships. Outside of ASU, John works for a startup company called Hoolest Performance Technologies as a product engineer and analog circuit designer. HPT designs and constructs vagus nerve electrostimulator technologies for athletic and medical applications. At HPT, John has designed a custom open-loop boost converter with inverter output in order to deliver the necessarily high voltage for successful nerve stimulation using the available power supply from a single-cell lithium battery. He has also designed multiple custom printed circuit boards implementing this circuit and has gained experience in design-for-manufacturing and mass production through this venture.'
  },
  {
    name: 'Shivam Sadachar',
    // title: 'The Spaceman',
    description:
      'Shivam Sadachar is a Flinn Scholar and sophomore pursuing a Computer Science degree and Astronomy Minor at Arizona State University. When he was 12 years old, Shivam coded his first web application and fell in love with programming ever since. During high school, he worked for multiple tech startups, gaining valuable experience in UI/UX, full stack web development, and entrepreneurship. One of his most fulfilling experience was leading the frontend development for Medumo, a Boston digital health startup and Y Combinator alum, where his application was used by over 100,000 patients across the nation. Currently, Shivam is refining his backend skills by attempting to build large-scale web applications at Tech Fabric, a local software development company with clients in the gov-tech, retail, automotive, and financial spaces. On his weekends, Shivam spends his time volunteering at senior living facilities teaching technology classes through his nonprofit, Tectogether. Shivam wants to actively bridge the “digital divide” between today’s youth--who are always online--and senior citizens--who remain largely disconnected, daunted by today’s technology. After partnering with two of the largest senior living providers in Arizona and winning ASU’s Changemaker Challenge grant, Tectogether continues to expand into the greater Phoenix area. In his free time, Shivam loves to stargaze and contemplate about outer space. In the future, he hopes mesh his passions for software and space to create technologies that are out of this world.  '
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
