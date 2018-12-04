const translateMemberNameToPath = name =>
  name.replace(/\s+/g, '-').toLowerCase();

const leadership = [
  {
    name: 'Mark Naufel',
    title: 'The Visionary',
    description:
      'Mark Naufel is a 26 year old Arizona native. He has received his Bachelor’s Degree in Finance, and Master’s Degrees in both Business Analytics and Systems Engineering at Arizona State University. While an undergraduate, Mark served as Student Body President at ASU, and was later appointed by the Governor of Arizona to serve a two year term on the Arizona Board of Regents as the Student Regent. Previously, Mark drove strategy and data initiatives for companies both locally and in Silicon Valley. Currently, Mark serves as the Director of Strategic Projects at Arizona State University, and within this capacity leads an interdisciplinary lab of highly exceptional students.'
  },
  {
    name: 'Chase Adams',
    title: 'The Software Chief',
    description:
      'Chase Adams is an Arizona State University graduate who earned bachelor’s degrees in mechanical engineering and computational mathematical sciences. During this time, he co-wrote Coverage and Field Estimation on Bounded Domains by Diffusive Swarms, modeling a diffusive control methodology for a swarm of robots using the heat equation to "rewind time" to get the initial location of the agents. He has previously worked for multiple software companies as a full-stack engineer and co-founded a software startup in the real estate industry. He has extensive experience in distributed, scalable, and secure software architectures. Presently he is the Assistant Director of Strategic Projects at Arizona State University, leading the software initiatives within the lab.'
  },
  {
    name: 'Tyler Smith',
    title: 'The Hardware Head',
    description:
      'Tyler Smith is a graduate of the ASU Fulton Schools of Engineering with a Bachelors and Masters degrees in Mechanical Engineering and certificate in Knowledge Entrepreneurship and Innovation from the WP Carey School of Business. Upon graduation, Tyler was a recipient of the Moeur Award for completing his degrees with a GPA of 4.0 or higher.  During his masters degree he focused on numerical simulation and high performance computing and wrote his own multiphase fluid dynamics solver and parallel numerical algorithms that could solve on large compute clusters. After graduation he applied his degree at an engineering consulting company and worked on wide variety of applications such as energy systems, aerospace and defense, medical devices, and consumer products. Tyler led a team of cross disciplinary engineers working on numerous projects and successfully managed the team and customer relations to grow the program into one of the company’s largest ongoing contracts. Currently, Tyler serves as the Associate Director of Strategic Projects at Arizona State University and leads teams of electrical, mechanical, and design students working on innovative projects in the Luminosity Lab.'
  },
  {
    name: 'Robb Olivieri',
    title: 'The International Authority',
    description:
      'Robb Olivieri is a New Jersey native and a graduate of Iona College in New York, where he obtained a Bachelor’s Degree in Political Science. He has spent several years in both the Higher Education and Startup spaces. Most recently serving as Director of Operations for a Phoenix based health-tech startup. Currently, Robb is managing a portfolio of projects within the lab and building out International Development’s Student Development Corps program.'
  },
  {
    name: 'Stacy Wagner',
    title: 'The Merciless Matriarch',
    description: 'Stacy Wagner'
  }
];

const members = [
  {
    name: 'John Patterson',
    title: 'The Electric Guru',
    description:
      'John Patterson is a third-year electrical engineering student who specializes in analog circuits and power electronics. John’s electronics experience includes audio amplifier design, battery management system (BMS) design and implementation, DC-DC converter design, linear and switched-mode power supply design/analysis, photoelectronics/optoisolator design, and resonant coil circuit construction. He also has significant experience in fine soldering, mechanical fabrication, and PCB design. He plans to pursue a master’s degree in electrical engineering, and he plans to work in a power or circuit design-related field. Besides electrical engineering topics, John’s academic achievements include the Flinn and National Merit scholarships. Outside of ASU, John works for a startup company called Hoolest Performance Technologies as a product engineer and analog circuit designer. HPT designs and constructs vagus nerve electrostimulator technologies for athletic and medical applications. At HPT, John has designed a custom open-loop boost converter with inverter output in order to deliver the necessarily high voltage for successful nerve stimulation using the available power supply from a single-cell lithium battery. He has also designed multiple custom printed circuit boards implementing this circuit and has gained experience in design-for-manufacturing and mass production through this venture.'
  },
  {
    name: 'Gowan Rowland',
    title: 'The Mechanical Man',
    description:
      'Gowan Rowland is an undergraduate student pursuing a degree in Mechanical Engineering. He grew up in a technical environment, spending a majority of his childhood in the garage where he worked on classic cars with his father. Due to the early experience in the garage, he learned to rebuild his first V8 engine when he was 12. Work experience includes: graphic design, mechanical engineering for defense contracting, and software engineering for business applications. During high school, Gowan dedicated his time to FIRST Robotics with team 4146, winning several awards and competitions. He still continues to mentor his high school robotics team and annually volunteers in several FIRST events that are focused on educating young generations of STEM students. Gowan has been designing mechanical systems in Solidworks for over 4 years and operates a multitude of industrial and automotive machinery for Acme Motorwerks. He is very passionate about being immersed in every aspect of engineering. This allows him to strive for involvement in a plethora of divisions like: business, branding, economics of a product or service, and the technical development of mechanical, software, and electrical design. From a team standpoint, Gowan aims to engage in all aspects of a project and apply outright dedication into every endeavor.'
  },
  {
    name: 'Sami Mian',
    title: 'The Advisor',
    description:
      'Sami Mian is an Arizona State University graduate who earned Bachelor’s degrees in Computer Engineering and Mathematics in 2016, and a Master’s degree in Computer Engineering in 2018. A founding member of the Luminosity Lab, Sami spent two years leading a team of hardware and embedded software engineers on various projects, most notably the Guardian Drones project. During his Master’s degree, Sami’s research was centered around control and constraint optimization for multiple Unmanned Aerial Vehicle Systems, with special focuses on power requirements and flight regulations. He also co-founded Hoolest Performance Technologies, a biomedical devices startup that produces athletics-focused products for anxiety relief. Sami is currently a PhD student at the University of Pittsburgh, where his research is focused on control system design and optimization for multi-agent autonomous swarms. He serves as a hardware advisor for the Luminosity Lab, and is an Academic Associate in the Entrepreneurship + Innovation Program at ASU.'
  },
  {
    name: 'Abhik Chowdhury',
    title: 'The Humanitarian',
    description:
      "Abhik Chowdhury is a recent ASU grad who studied computer science. His life's purpose is to create a world where everyone has the resources and opportunity to make a positive impact on the world. To do this he is leveraging the skills he has gained in using Machine learning, Blockchain and the Internet of things to process, validate and collect data. As a student he was a founder of the Blockchain Innovation society, vice president of the Sun devil robotics club and held many other leadership positions in various tech related organizations. He has been with the Luminosity Lab since its inception and it has given him a platform to hone a large set of functional skills from circuit design to sewing which has led to the creation of project Overlay. He volunteers his services for a few local nonprofits providing technical guidance and implementing projects such as a mesh sensor network to monitor supply drops for humanitarian aid workers in the Sonoran desert. He has done internships an a number of large companies including American Express. He also has a third degree black belt in Tae Kwon Do, was a wrestler, and enjoys various types of partner dancing."
  },
  {
    name: 'Rebecca Hammer',
    title: 'The Spark',
    description:
      'Rebecca Hammer is a fourth-year Electrical Engineering student specializing in signal processing, HDL and analog and digital circuit design. Her initial exposure to STEM was through her father, an EOD officer and former educator. As a result, she has a significant interest in STEM education. In her spare time, she is a multi-instrumentalist and painter with an interest in anthropology, mathematics, and old computers.'
  },
  {
    name: 'J.D. Shaeffer',
    title: 'The Voyager',
    description:
      "J.D. Shaeffer is a native Arizonan, currently pursuing a Computer Science bachelor's degree at Arizona State University, where he has been on the Dean's list every semester. He worked as the Student Ambassador for the Google Cloud Platform (GCP), where he arranged events and taught the complexities of GCP on campus along with other Google engineers. He has also previously developed and consulted on websites for corporations in Utah. He lived in Paraguay during a 2-year service mission to the communities around Asunción and he has hiked the entire length (2,190 miles) of the Appalachian Trail. He and his team won first place at the 14th annual Women in Computer Science coding competition. He is a member of the Tempe Institute of Religion Council and continues to serve his community. He is presently the President of Shaeffer Enterprises LLC, a company focusing on unique web applications that is in the development stage."
  },
  {
    name: 'Ethan Naluz',
    title: 'The Learner',
    description:
      'Ethan Naluz, a San Francisco native and junior, is completing his B.S. in Data Analytics. Post-graduation, he plans to pursue his Masters in Computer Science at ASU. Ethan also simultaneously studies Computer Science via the Open Source Society University. In 2017, Ethan co-founded a startup with a friend and although Ethan parted from this company at the beginning of 2018 to pursue other commitments, it’s still in operation. Ethan wrote quite a bit about that experience. In Spring of 2018, Ethan served as an intern for Assure Vote, a local gov-tech startup where he learned basic front-end web development in 1 month and built out their web application dashboard. Ethan has also worked for FetchRev in Summer 2018 doing full stack web development. Ethan is currently serving as a Project Manager for the Luminosity Lab, leading the design, development, and deployment of a gamified, educational mobile application that will be used in Ghana, and eventually, ASU. Aside from solely technology initiatives, Ethan is also an officer for the Entrepreneurship and Innovation Ambassadors, a student organization focused on increasing the interaction between ASU students and Arizonian entrepreneurs. For two years, Ethan served on the board for the hunger alleviation nonprofit organization, the Souper Bowl of Caring. After leaving SBOC’s board, Ethan joined the board of MyGovUSA, a non-profit organization that helps bring unbiased information about politicians to young voters. Overall, Ethan is constantly looking for places that he can be the least knowledgeable person in the room. He’s decided that his career will be an endless search for problems to solve, solutions to build, and opportunities to innovate. Testing boundaries and finding his own way to get things done has always been Ethan’s most notable quirk, and he doesn’t plan to stop anytime soon.'
  },
  {
    name: 'Tina Peng',
    title: 'The Gamer',
    description:
      'Tina Peng is currently a junior pursuing bachelor’s degrees in Computer Science and Mathematics, a certificate in Video Gaming, as well as a master’s degree in Computer Science, hoping to graduate by Spring of 2020. Recently, she worked on an indie video game with an independent team of ASU students, tutored at the ASU tutoring centers, and taught Chinese traditional dance at a local Chinese school. Her goal, at large, is to discover, experience, and innovate the relationship between various forms of artistic expression and technology or science with a particular interest in developments such as virtual reality, animation, visual graphics, etc. (that is, the fusion of visual art and sensory-enhancement technologies).'
  },
  {
    name: 'Diana Chen',
    title: 'The Leader',
    description:
      'Diana Chen is currently in her final year studying to earn her Bachelor’s in Computer Science with a certificate in Cross-Sector Leadership. In addition to her coursework, Diana has been able to pursue a variety of professional internships with companies and organizations ranging from Google, the Arizona Department of Education, Starbucks, MyGovUSA, Million Dollar Teacher Project, Dell, Workiva, the Oppia Foundation, and more. She is also involved in a variety of on-campus organizations like the Public Service Academy and Grand Challenge Scholars Program, and her campus leadership positions this year include being the Tempe Student Director for Changemaker Central and the Director of Innovation for the Entrepreneurship + Innovation Ambassadors. In everything she does, she aims to bring her passion for service and giving back, and she’s particularly interested in utilizing her skill sets to promote universal access to quality education. Her ultimate goal is to be a lifelong learner who can give back her knowledge in a way that can make the world a more welcoming and equitable place.'
  },
  {
    name: 'Shivam Sadachar',
    title: 'The Spaceman',
    description:
      'Shivam Sadachar is a Flinn Scholar and sophomore pursuing a Computer Science degree and Astronomy Minor at Arizona State University. When he was 12 years old, Shivam coded his first web application and fell in love with programming ever since. During high school, he worked for multiple tech startups, gaining valuable experience in UI/UX, full stack web development, and entrepreneurship. One of his most fulfilling experience was leading the frontend development for Medumo, a Boston digital health startup and Y Combinator alum, where his application was used by over 100,000 patients across the nation. Currently, Shivam is refining his backend skills by attempting to build large-scale web applications at Tech Fabric, a local software development company with clients in the gov-tech, retail, automotive, and financial spaces. On his weekends, Shivam spends his time volunteering at senior living facilities teaching technology classes through his nonprofit, Tectogether. Shivam wants to actively bridge the “digital divide” between today’s youth--who are always online--and senior citizens--who remain largely disconnected, daunted by today’s technology. After partnering with two of the largest senior living providers in Arizona and winning ASU’s Changemaker Challenge grant, Tectogether continues to expand into the greater Phoenix area. In his free time, Shivam loves to stargaze and contemplate about outer space. In the future, he hopes mesh his passions for software and space to create technologies that are out of this world.  '
  },
  {
    name: 'Lewis Ruskin',
    title: 'The Connoisseur',
    description:
      "Lewis Ruskin is finishing his Master’s degree at Arizona State University, majoring in Industrial Engineering with a focus in Data Science. Lewis previously received his B.S. at ASU in the same field. During his undergraduate years, Lewis did research in ASU’s Data Mining and Machine Learning Lab (DMML), where he determined population movements across campus and built a model for predicting fantasy baseball prices. He also worked on projects such as migrating US Foods to Amazon Web Services,  and designing multi-rotor aircraft for indoor mapping and scanning. Lewis has held leadership positions in Fulton Ambassadors and the Institute of Industrial Engineers (IISE), and is currently the treasurer of the software developers club (SoDA), the largest engineering club on campus. Lewis has professional experience in both Data Science and software development, with Amazon, Intel, and several other tech companies. He has worked on a multitude of data science, coding, and machine learning challenges. He has extensive experience with fault detection, with scheduling, and with social media data mining. When not working on data science projects, Lewis is often found helping on his family's cattle ranch, or on the ski slopes."
  },
  {
    name: 'Yassine Mazboudi',
    title: 'The Underwriter',
    description:
      'Yassine Mazboudi is a senior studying economics and actuarial science with intentions of pursuing a career as an actuary. He has recently joined the lab and looks to apply himself in any data related projects including AI/machine learning applications, SQL database creating, data-driven decision making, or data visualization. Yassine’s math/statistical background provides him with an ability to understand how these machine learning algorithms function which helps in the implementation of these methods. His main interest is to help further the insurance industry by leveraging the massive amount of data insurers are provided through IoT and other venues that have not been able to be effectively used to help asses insurers’ liabilities or fully understand insurers’ exposures. Yassine looks to start his career following graduation in May working at PricewaterhouseCoopers as an actuarial analyst in the Chicago office. His hobbies include reading, running, ping pong,and European futbol.'
  },
  {
    name: 'Maxwell Flanagan',
    title: 'The Calculator',
    description:
      'Maxwell Flanagan is a sophomore studying Computer Science, Mathematics (Statistics), and Economics. He joined Luminosity last year and has also been researching in REACT(Robotics, Embedded Autonomy, and Communication Theory Lab) on Consensus Algorithms and how developing controllers to adversarial action within multi-agent networks. Additionally he also worked in the EEG Lab on campus his first semester at ASU. After he completes his undergraduate degree, Maxwell wants to get his PHD studying Artificial Intelligence or Cognitive Science. My professional experience includes working on mobile and virtual reality development in C++ and Unity at an internship for Innovations For Learning, and Education nonprofit. Working on development on Google Cloud at Google. Worked as a software developer for NASA’s LunaH Map satellite developing data aggregation software for the satellite to gather telemetry data when in space in python. At Goldman Sachs this summer, I used Python, D3, and React to develop applications for stock visualization and analysis.'
  },
  {
    name: 'Joshua Chang',
    title: 'The Human Paintbrush',
    description:
      'Josh Chang is a 26 year old Colorado native. He has received his Bachelor’s Degrees in Industrial Design and Design Management at Arizona State University, and a CSWP in Mechanical Design. While an undergraduate, Josh was the founding designer of Luminosity, as a key Front End player in the establishment of the Laboratory’s reputation. During this time, he also worked as a Mechanical Designer at a local machine shop and worked with groups around ASU to expand his interdisciplinary experience, such as Innovation Space, IDSA, and SAE. Josh had worked in the past as a Design Freelancer and consultant for several startups and an Industrial Design firm in Phoenix, while joining the occasional art show to keep things fun. Josh is presently, going to be working as a mentor for the 2018-2019 design team while establishing his design career as a recent graduate.'
  },
  {
    name: 'Gracie Strasser',
    title: 'The Founder',
    description:
      'Gracie Strasser is a senior honors undergraduate studying Industrial Design and Sustainability. Apart of many different organizations on campus, Gracie stays active and engaged within her community. She has served as President of the Industrial Designers Society of America Student Chapter, and is also an active member of the ASU Cycling Club. Previously working as a research aide within the School of Sustainability, Gracie brings a different approach to research to the lab, specifically regarding human-centered design. She will be awarded her third publication by the end of this year; her most recent pertaining to research she conducted in Denmark and the UK, a cross-cultural analysis of elderly cohousing techniques and how to better implement them in the United States. Gracie completed two design internships this past summer, one for State Bicycle Co., and one doing app gamification for a medical startup in Scottsdale. She continues to do freelance interior and industrial design work for companies in the valley during school. Gracie is currently working on her honors thesis, where she plans to study issues inside the Arizona educational system and develop solutions based on video gaming techniques.'
  },
  // {
  //   name: 'Dylan Kerr',
  //   title: 'The ',
  //   description:
  //     'Dylan Kerr is a 21 year-old from Mesa, AZ studying Industrial Design. He graduates in May of 2019 and is currently considering a masters degree through AME at ASU beginning Fall of 2019. He joined the Luminosity Lab in late 2017. His first project after helping with the drone project for some time was leading a learn-it-all robotics kit project called KiP. KiP is still in progress and getting close to being in the hands of eager learners. Aside from the Luminosity Lab, Dylan has been involved in many other things on campus including the Medallion Scholarship Program, Student Alumni Association, Triathlon Club, and was the Herberger Senator/ University Affairs Chair in USG at the beginning of 2017. He takes on many projects at once throughout the semester and is a great idea generator. Something that he is currently very interested in is Augmented and Virtual Reality, Asset Creation, Game creation in Unity, 3D/2D Animation, Quick functional hardware prototypes, and coding in C++. He is also a proud member of the Luminos”fit”y group and if anyone would like to join for a run or swim let me know. Also if anyone ever would like a new perspective on an idea or any drawings or animations made please come to me and I will gladly help out!'
  // },
  {
    name: 'CeCe Ramey',
    title: 'The Maestro',
    description:
      "CeCe Ramey is a graphic designer and Barrett Honors student with a constantly curious mind. She is currently in her senior year in the ASU Herberger Institute for Art and Design School's Visual Communication Design bachelor’s program. Her focus is on branding, typography, experimentation, and social design. She has also been awarded a Design Excellence Award from the Design School for drawing. She has been co-published as an undergrad on a visual impairment research paper. She has worked at the ASU Enterprise Hub as a design student worker on the 2017-2018 and 2018-2019 Sun Devil Athletics campaign producing advertisements, posters, printed material, social graphics, and tee shirt designs. She has experience in exhibit design for ASU GSV 2018 and is currently working on large scale environmental graphics for the Historic Heard Building in Downtown Phoenix. She is also working on her honors thesis, where she will research and collect data regarding Artisanal Gold mining and its effects on the environment and local populations. She will present a functioning clock, design a book, and make an exhibit for public enjoyment and education. CeCe is experienced in working in interdisciplinary teams. She thrives when working with minds that are completely different from her own and enjoys the challenge of learning rapidly to keep up. Her passion for design comes from her belief that design is a catalyst for people to begin new conversations and turn that communication into change. She strives to find the connections between design, technology, brands, and people. Her work can take on any form to solve a problem."
  },
  {
    name: 'Catharine Lewis',
    title: 'The Creator',
    description:
      'Catharine Lewis is a junior at ASU (also a member of Barrett, the Honors College) pursuing her undergrad in Industrial Design and a certificate in Entrepreneurship. Before attending ASU, her background in fine arts established a skill set with a focus on drawing and visual communication. She joined the lab in February 2018. For the ASU + GSV Summit, she developed and drew the MYRA Comic, a visual story communicating the MYRA project’s origin and vision. She also contracts for a landscaping company in Washington, DC, developing renders of landscape design concepts to pitch to prospective clients. Catharine is committed to constant learning and self-improvement, spending much of her free time buried in a book or internet tutorial. She is always ready to contribute to a new and exciting idea or discover a new interest from a teammate.'
  },
  {
    name: 'Erlend Meling',
    title: 'The Norwegian Hustler',
    description:
      'Erlend Meling is a junior honors undergraduate studying industrial design. Erlend was born and raised in Norway and spent some time in Canada before moving to Arizona to attend ASU in 2016. Since joining Luminosity in late 2017, Erlend has been a part of many different projects ranging from futuristic fashion shows to wearables and IOT devices. Erlend aides in concept visualization and development through sketches, physical models and CAD models. Outside of Luminosity, Erlend loves being in the outdoors both in Arizona and back home in Norway, he also loves playing baseball and is on the Norwegian national team. In the summer of 2017, Erlend worked with the city of Phoenix to redesign the bus stops to increase shade and reduce cost. The new bus stops will be hitting the streets of Phoenix in late 2018/early 2019. In the summer of 2017, Erlend completed an internship with a design firm (EGGS design) in Norway. He learnt a lot about service design and working closely with clients; skills that are very applicable to Luminosity. Erlend is mostly interested in the tech industry and how AI will be integrated into physical products, among many things!'
  },
  {
    name: 'Kusum Ijari',
    title: 'The Artisan',
    description:
      'Kusum Ijari is a graduate student at ASU pursuing a masters degree in Human Systems Engineering. She has received her Bachelor’s Degree in Computer Science. She has two years of experience as a software developer at ThoughtWorks. Through this stint she has also gained some experience in User Experience Design which she is widening with her Human Systems Engineering degree. At the Luminosity lab she is working on the user experiences for various projects in the education and gamification domains and hopes to gain experience in many others. Kusum has also interned at SolarSPELL where she worked on the management of educational content.'
  },
  {
    name: 'Nikhil Dave',
    title: 'The Stargazer',
    description:
      'Nik is an Arizona native and a freshman undergraduate student at ASU’s Barrett, The Honors College, pursuing a major in Biological Sciences. Nik has been involved in neuroscience research at the Biodesign Institute since the age of 14, having co-authored his first scientific publication at 16 years old. While maintaining academic excellence in high school, he was heavily involved within his community, piloting his school’s capstone program and serving as Student Body President. Some of Nik’s achievements include being awarded the Flinn Scholarship, the ASU National Merit Scholarship, and Arizona’s 18 Under 18 Award. Using his experience in biomedical research, coupled with his charismatic leadership style and creative nature, Nik aims to expand Luminosity’s interdisciplinary efforts toward innovations in translational research and medicine. Furthermore, Nik is driven to employ his thoughtful and passionate personality to inspire others and prove that there is no age requirement when it comes to passion and ambition.'
  },
  {
    name: 'Luke Mains',
    title: 'The Operative',
    description:
      'Luke Mains is a rising senior in Computer Systems Engineering at ASU, pursuing a minor in Mathematics and a Cryptology certificate. He has been with the lab for the last year and a half, working on any project he can get his hands on. He did research on the Food and Nutrition Service and the Supplemental Nutrition Assistance Program for a paper the lab wrote early on. He then helped collect GPS coordinate data of ASU buildings for the drone project. Most recently he led the development of the Axio Chatbot, learning and implementing the Superscript.js API. His main interests lie in cybersecurity, applied cryptography, and robotics. He just finished a summer internship with the Department of Defense, where he received a Security Clearance, learned Python, and worked on a large data analysis project. He plans on continuing his education, earning a Masters in Cybersecurity from ASU and eventually applying to work at the National Security Agency. His hobbies outside of school include playing percussion with the local Arizona Wind Symphony, learning how to hack and playing video games.'
  },
  {
    name: 'Michael Saxon',
    title: 'The Academic',
    description:
      'Michael Saxon graduated with a BSE in Electrical Engineering with a minor in Mathematics from ASU and Barrett, the Honors College in Summer 2018. As an undergraduate he worked at various times in the Engineering Tutoring Center, Luminosity Lab, and at General Dynamics Mission Systems, was a workshop coordinator and President of the Sun Devil Robotics Club, and participated in a variety of research activities, publishing to multiple conferences and completing collaborative research projects at the National University of Singapore, and at Hiroshima University on behalf of the Center for Cognitive Ubiquitous Computing. Following interesting opportunities has allowed him to pursue research in a variety of areas, ranging from fault detection and strain measurement for semiconductor manufacturing to automated dataset preparation for deep neural networks. Now Michael is enrolled in the Computer Engineering MS program with a concentration in Multimedia Signal Processing and plans to enroll in the Linguistics Graduate Certificate Program as well. In the Luminosity Lab he helps lead ideation and research activities intended to ensure that the AXIO project truly has a lasting impact as a Graduate Research Assistant. Upon completion of his MS, Michael plans to apply for PhD programs in Computer Science and seek a career in building meaningfully interactive systems based on rigorous cognitive and social science. In his free time Michael likes to study foreign languages, write music, and run Dungeons and Dragons games.'
  },
  {
    name: 'Shilpa Bhat',
    title: 'The Builder',
    description:
      'Shilpa is a Software Engineering graduate student. She has a bachelor’s degree in Computer Science from Visvesvaraya Technological University. Shilpa has a work experience of more than 3 years as a research associate and web developer at multiple MNCs. Her interests lie in the domain of software development and she loves to develop robust, interactive and smart applications. In her leisure, she spends her time reading books and cooking. Shilpa is a quick learner, passionate programmer, technology enthusiast and is keen on using the latest technologies. She aims on developing and managing modern software projects that help in solving real life problems.'
  },
  {
    name: 'Samarth Bhandari',
    title: 'The Computerized Conversationalist',
    description:
      'Samarth is a student pursuing his Masters in Computer Science at Arizona State University. He completed his Bachelor of Technology in Computer Science and Engineering in India. He is a researcher and a developer who is always looking to solve an interesting problem in Data Mining, Machine Learning and Natural Language Processing. He is currently designing and developing intelligent conversational models for the Luminosity Lab by combining Knowledge Graphs, Sentiment Analysis, RNN and LSTM techniques. An expert in NLP, Conversational AI and Machine Learning he loves to read latest research and apply it in the real world. Samarth is never shy to learn something new to expand his personal experience through coursework, research or projects!'
  },
  {
    name: 'Aravind Shanmugam',
    title: 'The AI Wonder',
    description:
      'Aravind Shanmugam is a South Indian, currently pursuing Masters in Computer Science at Arizona State University. He did his Bachelor’s College of Engineering Guindy, Anna University. He is a recent addition to the lab and works mainly in Machine Learning and Deep Learning. During his Internship in an AI startup he was able to learn the foundations of Deep Learning and Artificial Intelligence and has applied it in real world applications ever since. He tries to leverage the amount of data present and state-of-the-art methods to innovate meaningful and helpful applications. Presently a member in Project Axio, his works are primarily based on NLP, Data Science and Generative Models.'
  },
  {
    name: 'Goutham Manjunatha',
    title: 'The Coder',
    description:
      "Goutham is a Masters in Computer Science Student in CIDSE. He has a bachelor's degree in Information Science and Engineering from PES University, India. He is an avid learner and have 2 years of work experience in building Enterprise scale software products. He loves building real time applications which scale to human needs. He joined Lab in April. He bootstrapped Blockchain Innovation Society learning platform. He contributes as Full Stack developer for AXIO project. Prior to this he worked as Software Developer for Celestial Systems Pvt Ltd, where he built software stack for a linux based Network Attached Storage device. He is a certified AWS Solutions Architect. Apart from byte-ing code chunks, he loves hiking and travelling places."
  },
  {
    name: 'Evan Weiss',
    title: 'The Prodigy',
    description:
      'Evan Weiss is a 18 year Arizona native. He is currently a Sophomore pursuing a Bachelor’s Degree in Computer Science with a Minor in Mathematics at Arizona State University. After attending BASIS Scottsdale high school, Evan graduated as a junior and came to ASU at age 17 with enough credits to place him at a junior standing. He currently plans on graduating in May 2020, with the goal of pursing a PhD in Artificial Intelligence. Evan has been involved in many tech startups, ranging from computational bio-design at Systems Imagination to cybersecurity. Evan joined Luminosity last year, helping work on Axio mockups and front-end design, while also jumping around on several other projects. He plans on getting involved in the lab this year as a leader on new projects and a contributor in ideation, design, and development.'
  },
  {
    name: 'Salil Malik',
    title: 'The Technologist',
    description:
      'Salil is currently pursuing his Masters in Software Engineering. He has two years of experience as a Software Developer at Principal Financial Group. He loves learning new technologies and is a Full Stack developer. He has also developed and published various Mobile Applications for Android, iOS and Windows Phone. His interests include Cybersecurity and Blockchain. Salil is currently working as a backend developer for the AXIO project. His hobbies include playing video games, reading books and travelling.'
  },
  {
    name: 'Angelique Pat',
    title: 'The Supplier',
    description:
      'Angelique Pat is currently a third-year undergraduate student pursuing a Bachelors of Science double major in Supply Chain Management and Business Data Analytics. A few of her academic achievements include being an APS Bill and Mary Kay Post Scholar as well as being part of a selected group of students in the McCord Mentee Program during her freshman year in the McCord Scholars Program at W.P. Carey. In the past she was a Finance and Accounting Intern for a non-profit called the Million Dollar Teacher Project helping implement a financial record system as well as providing financial advice to the Executive Director. Currently, she is interning for a local start-up called Birdytell as an Inventory and Fulfillment Intern. During her time in this position, she has been able to re-design the facility layout to optimize packaging efficiency and help implement and integrate inventory management systems. Furthermore, she is currently the Director of Administration for the Entrepreneurship and Innovation Ambassadors and is involved in the Supply Chain Management Association. Besides her professional interests, she enjoys learning Spanish and food systems to further understand food distribution issues. In the future, she hopes to bring impact and value to consumers through her passion for the well-being of others by ensuring sustainable and ethical services.'
  },
  {
    name: 'Abrahm Coury',
    title: 'The Lebanese Legend',
    description:
      'Abrahm is an Arizona native pursuing a bachelor’s degree in Computer Science from Barrett, the Honors College. He graduated from Ironwood High School in 2016, and after completing his senior year at ASU, Abrahm plans to get his Master’s in Computer Science through the 4+1 program at ASU. During his time at ASU, Abrahm has been involved with Fulton Ambassadors, the Software Developers Association, Sun Devil Support Network, PC’s for Refugees, and Best Buddies. He has also been a part of a number of projects through the Engineering Projects in Community Service program at ASU, and is continuing work on his most recent project to test the impact of IoT devices on the environment as his Honors Thesis through the Parallel Systems and Computing Lab. Abrahm also has past experience working as a Private Cloud Facilities Aide for ASU UTO, and doing research and working with data in ASU’s Behavioral Process Lab. Currently, Abrahm Coury is doing research in Neurosurgical Imaging at Mayo Clinic, Flexible Hybrid Electronic through ASU’s eLab, and is on the NASA Lucy Mission Student Collaboration Project. He hopes to continue exploring new technological advancements and how they can be implemented in various fields to positively impact people’s lives.'
  }
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
