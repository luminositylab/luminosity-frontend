import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BioModal from '../components/BioModal';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import { leadership, members } from '../content/members';

import teamWorkVideo from '../assets/videos/team-work-blurry.mp4';

class Team extends React.Component {
  state = {
    isBioOpen: false,
    member: {}
  };

  createHeadshot = member => (
    <div
      onClick={this.openBioPage(member)}
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

  openBioPage = member => () => {
    this.setState({ isBioOpen: true, member });
  };

  handleClose = () => {
    this.setState({ isBioOpen: false });
  };

  render() {
    const { data, location } = this.props;

        <Banner
          title={'The Team'}
          description={
            'Luminosity is comprised of an interdisciplinary team of problem-solvers.'
          }
          gl={
            "about"
          }
          // video={teamWorkVideo}
        />

        <div id="main">
          <section id="one" className="headshots">
            <BioModal {...this.state} handleClose={this.handleClose} />
            <br></br>
            <div className="title">Leadership</div>
            <br></br>
            <div className="members">
              {leadership.map(e =>
                this.createHeadshot({
                  ...e,
                  image: mappedPathsToImages[e.path]
                })
              )}
            </div>
          </section>
          <section id="two" className="headshots">
          <br></br>
            <div className="title">Students</div>
            <br></br>
            <div className="members">
              {members.map(e =>
                this.createHeadshot({
                  ...e,
                  image: mappedPathsToImages[e.path]
                })
              )}
            </div>
            <br></br>
            <div className="subtitle"> - and many more - </div>
            <br></br>
            <br></br>
            <br></br>
          </section>
        </div>
      </Layout>
    );
  }
}

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
