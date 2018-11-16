import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';

import guardianDronesOne from '../assets/images/guardian-drones-1.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';
import pic05 from '../assets/images/pic05.jpg';
import pic06 from '../assets/images/pic06.jpg';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="The Luminosity Lab | Beginning the Future."
          meta={
            [
              // { name: 'description', content: 'Sample' },
              // { name: 'keywords', content: 'sample, something' },
            ]
          }
        />

        <Banner
          description={
            <React.Fragment>
              The Luminosity Lab combines some of the most gifted students
              across Arizona State University.
              <br />
              <br />
              We build radical solutions around the world's most complex
              challenges.
            </React.Fragment>
          }
        />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${guardianDronesOne})` }}>
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
