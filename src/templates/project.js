import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Img from 'gatsby-image';
import Layout from '../components/layout';

export default ({ data, pageContext: { project }, location }) => {
  const projectImageNode = data.projectImages.edges.find(
    e => e.node.name === project.path
  );

  const image =
    projectImageNode &&
    projectImageNode.node &&
    projectImageNode.node.childImageSharp &&
    projectImageNode.node.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title={`${project.title} | The Luminosity Lab`}
        description={`Project ${project.title}: ${project.description}`}
        location={location}
      />

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{project.title}</h1>
              <h3>{project.description}</h3>
            </header>
            <span className="image main">
              {<Img fluid={image} alt={project.title} />}
            </span>
            <p>
            {project.info}
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

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
