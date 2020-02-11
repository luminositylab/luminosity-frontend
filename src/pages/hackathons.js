import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import hackathons from '../content/hackathons';

const createSection = ({ title, path, description, info, image, video }) => (
  <section key={title}>
    <Link to={`/hackathons/${path}`} className="image">
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
            <Link to={`/hackathons/${path}`} className="button">
              Learn more
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const videoBlur = `blur(10px)`;

const Hackathons = ({ data, location }) => {
  const mappedPathsToImages = data.hackathonImages.edges.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.node.name]: curr.node.childImageSharp.fluid
    }),
    {}
  );

  return (
    <Layout>
      <SEO
        title="Hackathons"
        description="Hackathons hosted by Luminosity Lab."
        // location={location}
      />

      <Banner
        title={'Hackathons'}
        description={
          'Luminosity Lab hosts a variety of hackathons to engage the local community and develop interest in growing fields.'
        }
        vantaNet={true}
      />

      <div id="main">
        <section id="one" className="spotlights">
          {hackathons.map(e =>
            createSection({
              ...e,
              image: mappedPathsToImages[e.path]
            })
          )}
        </section>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </Layout>
  );
};

export default Hackathons;

export const query = graphql`
  query {
    hackathonImages: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/hackathons/.*/" } }
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
