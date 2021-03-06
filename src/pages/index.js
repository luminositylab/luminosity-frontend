import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/SEO';

class HomeIndex extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidMount() {
    if (window && window.VANTA && window.VANTA.NET) {
      this.effect = window.VANTA.NET({
        el: this.myRef.current,
        color: 0xffffff,
        backgroundColor: 0x000000,
        points: 9,
        maxDistance: 18
      });
    }
  }
  componentWillUnmount() {
    if (this.effect) this.effect.destroy();
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Luminosity | Inspiring the Future."
          description="Luminosity | Inspiring the Future."
          location={this.props.location}
        />
        <div style={{ height: '922px' }} ref={this.myRef}>
          <section id="banner" className={'banner' ? 'minor' : 'major fit'}>
            <div className="inner">
              <header className="major">
                {/* <h1 style={{ textAlign: 'right' }}></h1> */}
              </header>
              <p style={{ float: 'right' }}>
                {
                  <React.Fragment>
                    Luminosity is an interdisciplinary research and development
                    lab driven by a hand-selected team of high-performing
                    students from Arizona State University. <br />
                    <br />
                    We design, build, and deploy novel solutions to address some
                    of the world’s most pressing challenges.
                  </React.Fragment>
                }
              </p>
            </div>
          </section>
        </div>

        <div id="main">
          <section id="one" className="tiles">
            <article>
              <div className="image">
                {this.props.data.heroImageProjects &&
                  this.props.data.heroImageProjects.childImageSharp &&
                  this.props.data.heroImageProjects.childImageSharp.fluid && (
                    <Img
                      fluid={
                        this.props.data.heroImageProjects.childImageSharp.fluid
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
            <article>
              <div className="image">
                {this.props.data.heroImageHackathons &&
                  this.props.data.heroImageHackathons.childImageSharp &&
                  this.props.data.heroImageHackathons.childImageSharp.fluid && (
                    <Img
                      fluid={
                        this.props.data.heroImageHackathons.childImageSharp
                          .fluid
                      }
                      alt={'Projects'}
                    />
                  )}
              </div>
              <header className="major">
                <h3>Partnerships</h3>
                <p>
                  Luminosity conducts R&D in partnership with companies and organizations from around the world.
                </p>
              </header>
              <Link to="/partnerships" className="link primary" />
            </article>
            {/* <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Tempus</h3>
                <p>feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article> */}
            {/*
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
    heroImageIntro: file(relativePath: { eq: "computer-with-cables.jpg" }) {
      ...fluidImageHero
    }
    heroImageProjects: file(relativePath: { eq: "file-1.jpg" }) {
      ...fluidImageHero
    }
    heroImageHackathons: file(relativePath: { eq: "code-screen.jpg" }) {
      ...fluidImageHero
    }
  }
`;
