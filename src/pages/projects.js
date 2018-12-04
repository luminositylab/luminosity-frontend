import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import projects from '../content/projects';

import mockUpVideo from '../assets/videos/mock-up.mp4';

const createSection = ({ title, path, description, fluidImage, video }) => (
  <section key={title}>
    <Link to={`/projects/${path}`} className="image">
      {fluidImage && <Img fluid={fluidImage} alt={title} />}
      {video && (
        <video playsInline autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </Link>
    <div className="content">
      <div className="inner">
        <header className="major">
          <h3>{title}</h3>
        </header>
        <p>{description}</p>
        <ul className="actions">
          <li>
            <Link to={`/projects/${path}`} className="button">
              Learn more
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const videoBlur = `blur(10px)`;

const Projects = ({ data, location }) => (
  <Layout>
    <SEO
      title="Projects"
      description="Projects within the Luminosity Lab."
      location={location}
    />

    <Banner
      title={'Projects'}
      description={
        'The Luminosity Lab produces innovations which aim to incite positive change around the globe.'
      }
      video={mockUpVideo}
      videoStyle={{
        '-webkit-filter': videoBlur,
        '-moz-filter': videoBlur,
        '-o-filter': videoBlur,
        '-ms-filter': videoBlur,
        filter: videoBlur
      }}
    />

    <div id="main">
      <section id="one" className="spotlights">
        {projects.map(e =>
          createSection({
            ...e,
            fluidImage:
              data[e.path] &&
              data[e.path].childImageSharp &&
              data[e.path].childImageSharp.fluid
          })
        )}
      </section>
    </div>
  </Layout>
);

export default Projects;

export const query = graphql`
  query {
    axio: file(relativePath: { regex: "/axio/" }) {
      ...fluidImage
    }
    guardiandrones: file(relativePath: { regex: "/guardiandrones/" }) {
      ...fluidImage
    }
    kip: file(relativePath: { regex: "/kip/" }) {
      ...fluidImage
    }
    byblos: file(relativePath: { regex: "/byblos/" }) {
      ...fluidImage
    }
    overlay: file(relativePath: { regex: "/overlay/" }) {
      ...fluidImage
    }
    ceryx: file(relativePath: { regex: "/ceryx/" }) {
      ...fluidImage
    }
    gridbase: file(relativePath: { regex: "/gridbase/" }) {
      ...fluidImage
    }
    luminositygarage: file(relativePath: { regex: "/luminositygarage/" }) {
      ...fluidImage
    }
    peerkat: file(relativePath: { regex: "/peerkat/" }) {
      ...fluidImage
    }
    smartmirror: file(relativePath: { regex: "/smartmirror/" }) {
      ...fluidImage
    }
    hq2: file(relativePath: { regex: "/hq2/" }) {
      ...fluidImage
    }
  }
`;
