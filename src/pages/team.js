import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import members from '../content/members';

import teamWorkVideo from '../assets/videos/team-work-blurry.mp4';

const createHeadshot = ({ name, description, image }) => (
  <div key={name} className="container">
    <div className="image">{image && <Img fluid={image} alt={name} />}</div>
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

const Team = ({ data, location }) => (
  <Layout>
    <SEO
      title="The Team"
      description="The team which composes the Luminosity Lab."
      location={location}
    />

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
