import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import members from '../content/members';

import teamWorkVideo from '../assets/videos/team-work-blurry.mp4';

// const translateProjectTitleToPath = title =>
//   title.replace(/\s+/g, '-').toLowerCase();

const createHeadshot = ({ name, description, image }) => (
  <div key={name} className="container">
    <div className="image">
      {image && <Img fluid={image} alt={name} />}
    </div>
    <div className="content">
      <div>
        <header>
          <h2>{name}</h2>
        </header>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const Team = ({ data }) => (
  <Layout>
    <Helmet>
      <title>The Team | The Luminosity Lab</title>
      <meta name="description" content="Team" />
    </Helmet>

    <Banner
      title={'The Team'}
      description={
        'We are made up of brilliant individuals from around the globe.'
      }
      video={teamWorkVideo}
    />

    <div id="main">
      <section id="one" className="headshots">
        {members.map(e =>
          createHeadshot({
            ...e,
            image: data[e.image].childImageSharp.fluid
          })
        )}
      </section>
    </div>
  </Layout>
);

export default Team;

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "headshots/headshot.jpg" }) {
      ...fluidImage
    }
    headshot1: file(relativePath: { eq: "headshots/headshot1.jpg" }) {
      ...fluidImage
    }
    headshot2: file(relativePath: { eq: "headshots/headshot2.jpg" }) {
      ...fluidImage
    }
  }
`;
