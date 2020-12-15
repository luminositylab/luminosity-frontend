import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import projects from '../content/projects';

import mockUpVideo from '../assets/videos/mock-up.mp4';

const createSection = ({ title, path, description, info, image, video }) => (
  <section key={title}>
    <Link to={`/projects/${path}`} className="image">
      {image && <Img fluid={image} alt={title} />}
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

const Projects = ({ data, location }) => {
  const mappedPathsToImages = data.projectImages.edges.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.node.name]: curr.node.childImageSharp.fluid
    }),
    {}
  );

  return (
    <Layout>
      <SEO
        title="Projects"
        description="Projects within the Luminosity Lab."
        location={location}
      />

      <Banner
        title={'Example Projects'}
        description={
          'The Luminosity Lab produces innovations which aim to incite positive change in the world.'
        }
        vantaNet={true}
      />

      <div id="main">
        <section id="one" className="spotlights">
          {projects.map(e =>
            createSection({
              ...e,
              image: mappedPathsToImages[e.path]
            })
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Projects;

export const query = graphql`
  query {
    projectImages: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*/" } }
    ) {
      edges {
        node {
          name
          ...fluidImage
        }
      }
    }
  }
`;
