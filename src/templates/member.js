import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Img from 'gatsby-image';
import Layout from '../components/layout';

export default ({ data, pageContext: { member }, location }) => {
  const memberImageNode = data.memberImages.edges.find(
    e => e.node.name === member.path
  );

  const image =
    memberImageNode &&
    memberImageNode.node &&
    memberImageNode.node.childImageSharp &&
    memberImageNode.node.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title={`${member.title} | The Luminosity Lab`}
        description={`Project ${member.title}: ${member.description}`}
        location={location}
      />

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{member.title}</h1>
              <h3>{member.description}</h3>
            </header>
            <span className="image main">
              {<Img fluid={image} alt={member.title} />}
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Etiam
              tristique libero eu nibh porttitor fermentum. Nullam venenatis
              erat id vehicula viverra. Nunc ultrices eros ut ultricies
              condimentum. Mauris risus lacus, blandit sit amet venenatis non,
              bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at,
              euismod in lectus. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. In non lorem sit
              amet elit placerat maximus. Pellentesque aliquam maximus risus,
              vel sed vehicula.
            </p>
            <p>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
              Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
              Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien
              risus, commodo eget turpis at, elementum convallis elit.
              Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    memberImages: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/members/.*/" } }
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
