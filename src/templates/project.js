import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Img from 'gatsby-image';
import Layout from '../components/layout';

// import pic11 from '../assets/images/projects/byblos.jpg';

export default ({ data, pageContext: { project }, location }) => (
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
            {data[project.path] &&
              data[project.path].childImageSharp &&
              data[project.path].childImageSharp.fluid && (
                <Img
                  fluid={data[project.path].childImageSharp.fluid}
                  alt={project.title}
                />
              )}
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
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
