import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BioModal from '../components/BioModal';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import { leadership, members } from '../content/members';

import teamWorkVideo from '../assets/videos/team-work-blurry.mp4';

const createHeadshot = ({ member, onClick }) => (
  <div
    onClick={onClick}
    key={member.name}
    className="container"
  >
    <div className="image">
      {member.image && (
        <Img
          imgStyle={{ objectFit: 'cover' }}
          fluid={member.image}
          alt={member.name}
        />
      )}
    </div>
    <div className="content">
      <div>
        <header>
          <h2>{member.name}</h2>
        </header>
        <p>{member.title}</p>
      </div>
    </div>
  </div>
);

const Team = ({ data, location }) => {
  const [bio, setBio] = React.useState(null);

  const mappedPathsToImages = data.headshotImages.edges.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.node.name]: curr.node.childImageSharp.fluid
    }),
    {}
  );

  return (
    <Layout>
      <SEO
        title="The Team"
        description="The team which composes the Luminosity Lab."
        location={location}
      />

      <Banner
        title={'The Team'}
        description={
          'We are made up of brilliant people from around the world.'
        }
        video={teamWorkVideo}
      />

      <BioModal
        open={Boolean(bio)}
        title={bio && bio.title}
        description={bio && bio.description}
        handleClose={() => setBio(null)}
      />

      <div id="main">
        <section id="one" className="headshots">
          <div className="title">Leadership</div>
          <div className="members">
            {leadership.map(e =>
              createHeadshot({
                member: {
                  ...e,
                  image: mappedPathsToImages[e.path]
                },
                onClick: () =>
                  setBio({
                    title: e.name,
                    description: e.description
                  })
              })
            )}
          </div>
        </section>
        <section id="two" className="headshots">
          <div className="title">Students</div>
          <div className="members">
            {members.map(e =>
              createHeadshot({
                member: {
                  ...e,
                  image: mappedPathsToImages[e.path]
                },
                onClick: () =>
                  setBio({
                    title: e.name,
                    description: e.description
                  })
              })
            )}
          </div>
          <div className="subtitle">...and many more!</div>
        </section>
      </div>
    </Layout>
  );
};

export default Team;

export const query = graphql`
  query {
    headshotImages: allFile(
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
