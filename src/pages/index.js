import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import SEO from '../components/SEO';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Luminosity | Beginning the Future."
          description="Luminosity | Beginning the Future."
          location={this.props.location}
        />

        <Banner
          description={
            <React.Fragment>
              The Luminosity Lab serves as an interdisciplinary hub for some of the most talented and high-performing students at Arizona State University.
              <br />
              <br />
              We build radical solutions around the world's most complex
              challenges.
            </React.Fragment>
          }
        />

        <div id="main">
          <section id="one" className="tiles">
            <article>
              <div className="image">
                {this.props.data.guardianDrones1 &&
                  this.props.data.guardianDrones1.childImageSharp &&
                  this.props.data.guardianDrones1.childImageSharp.fluid && (
                    <Img
                      fluid={
                        this.props.data.guardianDrones1.childImageSharp.fluid
                      }
                      alt={'Projects'}
                    />
                  )}
              </div>
              <header className="major">
                <h3>Projects</h3>
                <p>
                  Luminosity is continuously implementing solutions which impact
                  global society and improve the condition of all humanity.
                </p>
              </header>
              <Link to="/projects" className="link primary" />
            </article>
            {/* <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Tempus</h3>
                <p>feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
             <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Magna</h3>
                <p>Lorem etiam nullam</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Ipsum</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Consequat</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Etiam</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article> */}
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Our Team</h2>
              </header>
              <p>
                We are comprised of an interdisciplinary set of people with
                diverse talents, including specialists in human-machine
                interaction, hardware prototyping, industrial and graphic
                design, artificial intelligence, and systems engineering.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/team" className="button next">
                    Meet Us
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const fluidImageHero = graphql`
  fragment fluidImageHero on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const query = graphql`
  query {
    guardianDrones1: file(relativePath: { eq: "guardian-drones-1.jpg" }) {
      ...fluidImageHero
    }
  }
`;
