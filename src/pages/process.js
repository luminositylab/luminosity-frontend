import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import mockUpVideo from '../assets/videos/over-shoulder.mp4';
import ideation from '../assets/images/ideation.png';
import design from '../assets/images/design.png';
import agile from '../assets/images/agile.png';

const videoBlur = `blur(10px)`;
const Process = () => (
  <Layout>
    <SEO
      title="Our Process"
      description="Process within the Luminosity Lab."
      // location={location}
    />

    <Banner
      title={'Our Process'}
      vantaNet={true}
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <h3>Ideation</h3>
          <div className="image center">
            <img src={ideation} />
          </div>
          <br></br>
          <br></br>
          <p>
            Ideation is the most critical driving component of our operation.
            Luminosity’s brainstorming sessions involve creativity, abstraction,
            and the application of various innovation-frameworks. Our
            collaborative team environment fosters generative discussions,
            encourages user empathy, as well as enables us to explore, identify
            and understand problems. We craft meaningful, actionable problem
            statements which focus on the needs of our respective stakeholders
            or users. In order to gain the insights which drive our design
            process, we leverage diverse perspectives to discover unseen
            patterns, pain points, and specific challenges that we can transform
            into opportunities.
          </p>
          <h3>Design, Planning, and Analysis</h3>
          <p>
            Once a problem statement has been defined, Luminosity engages in a
            rigorous cycle of design, planning, and analysis prior to launching
            the development phase of the project. A diverse suite of tools is
            used for modeling and design conceptualization. Our team specializes
            in generating illustrative sketches, 3D printed models, storyboards,
            and CAD designs. An ‘As-Is’ & ‘To-Be’ modeling approach is used to
            visualize an idea in its current state and its ideal future state.
            These visual models are reviewed with respective stakeholders and
            iterated upon to elicit and verify desired outcomes. We
            systematically deconstruct ideas to determine project requirements
            and design constraints. From these requirements, project timelines
            and action items are established and an iterative process of
            development begun.
          </p>
          <div className="image center">
            <img src={design} />
          </div>
          <br></br>
          <br></br>
          <h3>Implementation</h3>
          <p>
            All projects are managed with a proven Agile approach. We utilize
            the Scrum methodology to conduct two-week sprints of development, in
            which a subset of the product backlog is addressed and the end
            result is an iterative deliverable. Daily stand-up meetings are held
            to track progress and to break down existing roadblocks. Each sprint
            concludes with a retrospective meeting that allows for the team to
            review what worked well and what could be improved. Time between
            sprints is used to perform verification and validation with
            stakeholders to test progress against the established and desired
            set of design criteria. Analysis and feedback from the end of each
            sprint is used to adapt the design and functionality of the product
            as needed, as well as to inform the upcoming sprint.
          </p>

          <h3>Validation, Verification, Deployment, and Maintenance</h3>
          <p>
            We employ a robust process of validation and verification throughout
            the project life cycle. Quality assurance methods guarantee that our
            solutions are best-in-class and free of defects. We continuously
            test our products to ensure compliance with the defined
            user/customer requirements. Once deployed, systems are continuously
            monitored by our students to identify bugs and resolve issues.
            Iterative cycles of development continue to improve the product
            until the end of its life cycle when the product or service is
            decommissioned.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Process;
