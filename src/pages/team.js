import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';

import pic08 from '../assets/images/pic08.jpg';
import pic09 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';

const translateProjectTitleToPath = title =>
  title.replace(/\s+/g, '-').toLowerCase();

const createSection = ({ title, description, image }) => (
  <section>
    <Link
      to={`/projects/${translateProjectTitleToPath(title)}`}
      className="image"
    >
      <img src={image} alt="" />
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

const projects = [
  {
    title: 'AXIO',
    description:
      'An intelligent platform for personalized growth and lifelong learning.',
    image: pic08
  },
  {
    title: 'Guardian Drones',
    description:
      'Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem.',
    image: pic09
  },
  {
    title: 'KIP',
    description: 'Nullam et orci eu lorem consequat tincidunt.',
    image: pic10
  },
  {
    title: 'Ceryx',
    description:
      'An electronic health records system built on modern standards to be intelligent, secure by default, and beautifully engaging.',
    image: pic08
  }
];

const Team = props => (
  <Layout>
    <Helmet>
      <title>The Team | The Luminosity Lab</title>
      <meta name="description" content="Team" />
    </Helmet>

    <Banner
      title={'The Team'}
      description={
        'We are made up of talented individuals from around the globe.'
      }
    />

    <div id="main">
      <section id="one" className="spotlights">
        {projects.map(e => createSection(e))}
      </section>
    </div>
  </Layout>
);

export default Team;
