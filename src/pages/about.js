import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Banner from '../components/Banner';


const About = ({ data }) => (
  <Layout>
    <SEO
      title="Hackathons"
      description="Hackathons hosted by Luminosity Lab."
      // location={location}
    />

    <Banner
      title={'About Us'}
      // description={'Hosted by Bank of the West'}
      gl={
        "mark"
      }
    />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h3>Introduction</h3>

          <p>
            The Luminosity Lab is a team of high achieving students from diverse
            backgrounds that were hand-picked by ASU academics and peers to
            solve complex problems with creative solutions. Each individual on
            the team is selected for their own personal merits and unique
            talents, but at its core, our team is comprised of outstanding
            problem solvers. The Luminosity Lab is a rare environment that
            utilizes the network and partnerships of the largest public
            university, expertise from academics and industry professionals, and
            the energy and creativity of talented students to solve the vast
            problems that exist in society.
          </p>

          <h3>Our Vision</h3>
          <p>
            To establish a new model of discovery and innovation for the 21st
            century driven by a lean, interdisciplinary group of exceptional
            scholars who fuse youthful spirit with intellectual prowess and
            business acumen, and who strategically leverage their position
            within an academic institution to take risks and produce radical
            innovations capable of impacting society.
          </p>

          <h3>Our Mission</h3>
          <p>
            To utilize strategic design, systems thinking, and rapid product
            realization to develop and deploy ideas, tools, and technologies
            that provide unconventional and effective solutions to complex
            challenges.
          </p>

          {/* <h3>Core Competencies</h3> */}
        </div>
      </section>
    </div>
  </Layout>
);

export default About;


export const query = graphql`
  query {
    heroImageIntro: file(relativePath: { eq: "computer-with-cables.jpg" }) {
      ...fluidImageHero
    }
  }
`;
