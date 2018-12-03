import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import projects from '../content/projects';

import mockUpVideo from '../assets/videos/mock-up.mp4';

const translateProjectTitleToPath = title =>
  title.replace(/\s+/g, '').toLowerCase();

const createSection = ({ title, description, fluidImage, video }) => (
  <section key={title}>
    <Link
      to={`/projects/${translateProjectTitleToPath(title)}`}
      className="image"
    >
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
            <Link
              to={`/projects/${translateProjectTitleToPath(title)}`}
              className="button"
            >
              Learn more
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const videoBlur = `blur(10px)`;

const Projects = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Projects | The Luminosity Lab</title>
      <meta name="description" content="Projects" />
    </Helmet>

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
              data[translateProjectTitleToPath(e.title)].childImageSharp.fluid
          })
        )}
      </section>
    </div>
  </Layout>
);

export default Projects;

export const query = graphql`
  query {
    axio: file(relativePath: { eq: "projects/axio.jpg" }) {
      ...fluidImage
    }
    guardiandrones: file(relativePath: { eq: "projects/guardiandrones.jpg" }) {
      ...fluidImage
    }
    kip: file(relativePath: { eq: "projects/kip.jpg" }) {
      ...fluidImage
    }
    byblos: file(relativePath: { eq: "projects/byblos.jpg" }) {
      ...fluidImage
    }
    overlay: file(relativePath: { eq: "projects/overlay.jpg" }) {
      ...fluidImage
    }
    ceryx: file(relativePath: { eq: "projects/ceryx.jpg" }) {
      ...fluidImage
    }
    gridbase: file(relativePath: { eq: "projects/gridbase.jpg" }) {
      ...fluidImage
    }
  }
`;
