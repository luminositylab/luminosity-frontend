import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import SEO from '../../components/SEO';
import Banner from '../../components/Banner';
import Layout from '../../components/layout';
import heroVideo from '../../assets/videos/typing-keyboard.mp4';

const videoBlur = `blur(10px)`;

const BankOfTheWest = () => (
  <Layout>
    <SEO
      title="Hackathons"
      description="Hackathons hosted by Luminosity Lab."
      // location={location}
    />

    <Banner
      title={'SolutionsX Hackathon'}
      description={'Hosted by Bank of the West'}
      video={heroVideo}
      videoStyle={{
        '-webkit-filter': videoBlur,
        '-moz-filter': videoBlur,
        '-o-filter': videoBlur,
        '-ms-filter': videoBlur,
        filter: videoBlur
      }}
    />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>About Us</h1>

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
          <OutboundLink href="https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/">
            Visit the Google Analytics plugin page!
          </OutboundLink>
        </div>
      </section>
    </div>
  </Layout>
);

export default BankOfTheWest;
