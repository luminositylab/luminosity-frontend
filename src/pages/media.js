import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import Banner from '../components/Banner';

import velos from '../assets/images/news/velos.jpg';
import floe from '../assets/images/news/floe.jpg';
import floe10 from '../assets/images/news/floe10.jpg';
import sterilization from '../assets/images/news/sterilization.jpg';
import lane from '../assets/images/news/lane.jpg';
import ppe from '../assets/images/news/ppe.jpg';
import practicelabs from '../assets/images/news/practicelabs.png';
import printer from '../assets/images/news/printer.png';
import dave from '../assets/images/news/dave.jpeg';
import naufel from '../assets/images/news/naufel.jpg';
import flinn from '../assets/images/news/flinn.png';
import airforce from '../assets/images/news/airforce.png';
import dash from '../assets/images/news/dash.jpg';
import pch from '../assets/images/news/pch.jpg';
import shipshape from '../assets/images/news/shipshape.jpg';


const videoBlur = `blur(10px)`;
const Process = () => (
  <Layout>
    <SEO
      title="Luminosity in the Media"
      description="Luminosity in the Media."
      // location={location}
    />

    <Banner
      title={'Luminosity in the Media'}
      vantaNet={true}
    />

    <div id="main">
    <section id="one" className="spotlights">

        <section key={'asu-students’-lunar-exploration-system-finalist-nasa-competition'}>
        <a href={`https://asunow.asu.edu/20201130-solutions-asu-students%E2%80%99-lunar-exploration-system-finalist-nasa-competition`} target="_blank" className="image">
          <img className="newsImg" src={velos} alt={'velos'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{'ASU students’ lunar exploration system is a finalist in NASA competition'}</h3>
            </header>
            <p>{'Luminosity Lab team designed a launcher and probe that could help shed light on the moon’s mysterious regions'}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://asunow.asu.edu/20201130-solutions-asu-students%E2%80%99-lunar-exploration-system-finalist-nasa-competition" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>
        

        <section key={"Find your team, go out and pursue the world's next big idea"}>
        <a href={`https://asunow.asu.edu/20190503-discoveries-asu-kedtalks-mark-naufel-luminosity`} target="_blank" className="image">
          <img className="newsImg" src={naufel} alt={'naufel'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{"Find your team, go out and pursue the world's next big idea"}</h3>
            </header>
            <p>{"Luminosity director talks about dreaming big and changing society"}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://asunow.asu.edu/20190503-discoveries-asu-kedtalks-mark-naufel-luminosity" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section key={'ASU students earn top 5 spot in international mask competition, could win $1 million prize'}>
        <a href={`https://www.azcentral.com/story/news/local/tempe-breaking/2020/12/08/asu-students-earn-top-5-spot-international-xprize-next-gen-mask-competition/6497316002/`} target="_blank" className="image">
          <img className="newsImg" src={floe} alt={'floemask'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{'ASU students earn top 5 spot in international mask competition, could win $1 million prize'}</h3>
            </header>
            <p>{"A team within Arizona State University's Luminosity Lab is a top five finalist for the XPRIZE Next-Gen Mask Challenge that could win it $1 million."}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://www.azcentral.com/story/news/local/tempe-breaking/2020/12/08/asu-students-earn-top-5-spot-international-xprize-next-gen-mask-competition/6497316002/" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section key={'Flinn Scholars pursue global solutions at ASU’s Luminosity Lab'}>
        <a href={`https://flinn.org/flinn-scholars-pursue-global-solutions-at-asus-luminosity-lab/`} target="_blank" className="image">
          <img className="newsImg" src={flinn} alt={'flinn'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{'Flinn Scholars pursue global solutions at ASU’s Luminosity Lab'}</h3>
            </header>
            <p>{"Flinn Scholars are playing lead roles in the Luminosity Lab at Arizona State University by designing, building, and deploying novel solutions to address some of the world’s most pressing challenges."}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://flinn.org/flinn-scholars-pursue-global-solutions-at-asus-luminosity-lab/" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section key={'ASU Students Make Top 10 In Worldwide Mask Design Challenge'}>
        <a href={`https://kjzz.org/content/1638326/asu-students-make-top-10-worldwide-mask-design-challenge`} target="_blank" className="image">
          <img className="newsImg" src={floe10} alt={'floemask'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{'ASU Students Make Top 10 In Worldwide Mask Design Challenge'}</h3>
            </header>
            <p>{"A team of students at Arizona State University has made it to the top 10 in a worldwide mask design competition. The goal is to build a better face mask to prevent the spread of COVID-19 by making it comfortable, functional and affordable."}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://kjzz.org/content/1638326/asu-students-make-top-10-worldwide-mask-design-challenge" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section key={'ASU, Lane College create blueprint for student-led collaboration'}>
        <a href={`https://asunow.asu.edu/20201001-asu-lane-college-create-blueprint-student-led-collaboration`} target="_blank" className="image">
          <img className="newsImg" src={lane} alt={'lane'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{'ASU, Lane College create blueprint for student-led collaboration'}</h3>
            </header>
            <p>{"Students in the ASU Luminosity Lab partner with historically Black college to transform unused land into a thriving hub for innovation"}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://asunow.asu.edu/20201001-asu-lane-college-create-blueprint-student-led-collaboration" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section key={'ASU supplies health care providers with protective gear'}>
        <a href={`https://asunow.asu.edu/20200416-arizona-impact-luminosity-lab-3d-printing-health-care-ppe`} target="_blank" className="image">
          <img className="newsImg" src={ppe} alt={'ppe'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{'ASU supplies health care providers with protective gear'}</h3>
            </header>
            <p>{"ASU's Luminosity Lab has responded to the coronavirus crisis by ramping up a massive initiative to design, produce and distribute critically needed personal protective equipment and other medical supplies. "}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://asunow.asu.edu/20200416-arizona-impact-luminosity-lab-3d-printing-health-care-ppe" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section key={'ASU Practice Labs creating talent pipeline for modern industry'}>
        <a href={`https://chamberbusinessnews.com/2020/07/27/asu-practice-labs-creating-talent-pipeline-for-modern-industry/`} target="_blank" className="image">
          <img className="newsImg" src={practicelabs} alt={'practicelabs'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{'ASU Practice Labs creating talent pipeline for modern industry'}</h3>
            </header>
            <p>{"Each Practice Lab is created to solve the specialized need of a corporate sponsor. When a company or government agency becomes a sponsor, Practice Labs coordinates with ASU’s Luminosity Lab to find the best students for the test lab."}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://chamberbusinessnews.com/2020/07/27/asu-practice-labs-creating-talent-pipeline-for-modern-industry/" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section key={'ASU student-run lab creates low-cost sterilization systems to fight COVID-19'}>
        <a href={`https://www.azcentral.com/story/news/local/arizona-health/2020/08/25/asu-student-lab-makes-sterilization-systems-fight-covid-19/5529254002/`} target="_blank" className="image">
          <img className="newsImg" src={sterilization} alt={'sterilization'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{'ASU student-run lab creates low-cost sterilization systems to fight COVID-19'}</h3>
            </header>
            <p>{"A student-led team at ASU's Luminosity Lab has created two sterilization systems to help sterilize N95s and much more. Using hydrogen peroxide for one system and ozone for the other, the students were able to design two machines at a much lower cost and smaller scale than machines used to sterilize the materials in large scale hospitals."}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://www.azcentral.com/story/news/local/arizona-health/2020/08/25/asu-student-lab-makes-sterilization-systems-fight-covid-19/5529254002/" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section key={'ASU Students Create Network Of 3D Printers To Meet Demand For Protective Equipment'}>
        <a href={`https://www.knau.org/post/asu-students-create-network-3d-printers-meet-demand-protective-equipment`} target="_blank" className="image">
          <img className="newsImg" src={printer} alt={'printer'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{'ASU Students Create Network Of 3D Printers To Meet Demand For Protective Equipment'}</h3>
            </header>
            <p>{"Students at Arizona State University have created a network of three hundred 3D printers, to meet ongoing demands for personal protective equipment or PPE. The project’s organizers say since the pandemic began they’ve filled more than fifteen thousand orders for gowns, masks, and other equipment needed by healthcare workers. KNAU’s Melissa Sevigny spoke about the project with Mark Naufel, the director of ASU’s Luminosity Lab, which brings students together from different departments to solve real-world problems."}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://www.knau.org/post/asu-students-create-network-3d-printers-meet-demand-protective-equipment" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section key={"Luke AFB enters Spark Tank 2021 with ‘Next-Gen Debrief’"}>
        <a href={`https://www.aetc.af.mil/News/Article/2429459/luke-afb-enters-spark-tank-2021-with-next-gen-debrief/`} target="_blank" className="image">
          <img className="newsImg" src={airforce} alt={'airforce'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{"Luke AFB enters Spark Tank 2021 with ‘Next-Gen Debrief’"}</h3>
            </header>
            <p>{"Luke Airmen working with an Arizona State University student have developed a 3D augmented reality system that will revolutionize the way pilots conduct mission debriefs and will represent the Air Education and Training Command at Spark Tank 2021."}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://www.aetc.af.mil/News/Article/2429459/luke-afb-enters-spark-tank-2021-with-next-gen-debrief/" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>

       

        <section key={'Gov. Doug Ducey appoints ASU student to ABOR'}>
        <a href={`https://www.statepress.com/article/2020/07/sppolitics-ducey-appoints-new-student-regent-from-asu-to-abor`} target="_blank" className="image">
          <img className="newsImg" src={dave} alt={'dave'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{'Gov. Doug Ducey appoints ASU student to ABOR'}</h3>
            </header>
            <p>{"Nikhil Dave will spend his first year learning procedure and reaching out to students at all three public universities. Dave is involved in ASU's Luminosity Lab, a research and development initiative of selected students."}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://www.statepress.com/article/2020/07/sppolitics-ducey-appoints-new-student-regent-from-asu-to-abor" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section key={'ASU, USAID ignite global supply chain education'}>
        <a href={`https://asunow.asu.edu/20190911-asu-usaid-ignite-global-supply-chain-education`} target="_blank" className="image">
          <img className="newsImg" src={shipshape} alt={'shipshape'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{'ASU, USAID ignite global supply chain education'}</h3>
            </header>
            <p>{"Students at ASU's Luminosity Lab created a series of educational games to teach three main supply chain management skills to healthcare workers in Ghana: ordering, determining demand and managing stock."}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://asunow.asu.edu/20190911-asu-usaid-ignite-global-supply-chain-education" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section key={'Phoenix Children’s Hospital and ASU students partner to create an app that replaces outdated medical history forms'}>
        <a href={`https://asunow.asu.edu/20191108-solutions-app-today-keeps-doctor%E2%80%99s-forms-away`} target="_blank" className="image">
          <img className="newsImg" src={pch} alt={'pch'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{'Phoenix Children’s Hospital and ASU students partner to create an app that replaces outdated medical history forms'}</h3>
            </header>
            <p>{"Phoenix Children’s Hospital — one of the largest pediatric health care systems in the U.S. — partnered with Arizona State University to form a Practice Lab. Practice Labs bring together interdisciplinary teams of students to help companies creatively solve pressing issues."}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://asunow.asu.edu/20191108-solutions-app-today-keeps-doctor%E2%80%99s-forms-away" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section key={'Dash and ASU elevate blockchain research, offering graduate course and scholarships'}>
        <a href={`https://asunow.asu.edu/20180118-dash-asu-elevate-blockchain-research-offer-graduate-course-scholarships`} target="_blank" className="image">
          <img className="newsImg" src={dash} alt={'dash'} />
        </a>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>{'Dash and ASU elevate blockchain research, offering graduate course and scholarships'}</h3>
            </header>
            <p>{"Arizona State University and Dash, a top digital currency for payments, have announced a partnership designed to accelerate research, development and education in ways that advance blockchain transaction speed, efficiency and security and expand its uses."}</p>
            <ul className="actions">
              <li>
                <a target="_blank" href="https://asunow.asu.edu/20180118-dash-asu-elevate-blockchain-research-offer-graduate-course-scholarships" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
        </section>


  </section>

    </div>
  </Layout>
);

export default Process;
