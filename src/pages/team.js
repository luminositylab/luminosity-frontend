import React, { useCallback } from "react";
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import BioModal from '../components/BioModal';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import { leadership, members } from '../content/members';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";


class Team extends React.Component {
  
  state = {
    isBioOpen: false,
    member: {},
    currentImage: 0,
    // setCurrentImage: 0,
    viewerIsOpen: false,
    // setViewerIsOpen: false,
  };
  

  componentDidMount(){
    console.log(members)
}

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


   openLightbox = (photo, index ) => {
    this.setState({ currentImage: index.index });
    this.setState({ viewerIsOpen: true });
    console.log('STATE', this.state)
  };

   closeLightbox = () => {
    this.setState({ currentImage: 1 });
    this.setState({ viewerIsOpen: false });
  };

  
  render() {
   
    // const [currentImage, setCurrentImage] = useState(0);
    // const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
  
    const customStyles = {
      container: () => ({
        // none of react-images styles are passed to <View />
        // height: 400,
        width: 600,
      })
    }

    const { data, location } = this.props;

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
          title="Our Team"
          description="Meet the Luminosity Lab."
          location={location}
        />

        <Banner
          title={'Our Team'}
          description={
            'Luminosity is comprised of an interdisciplinary team of student problem-solvers.'
          }
          vantaNet={true}
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
            {/* <div className="members">
              {members.map(e =>
                this.createHeadshot({
                  ...e,
                  image: mappedPathsToImages[e.path]
                })
              )}
            </div> */}
            <br></br>
      

                <Gallery photos={members} onClick={this.openLightbox} />
      <ModalGateway>
        {this.state.viewerIsOpen ? (
          <Modal onClose={this.closeLightbox}>
            <Carousel
             frameProps={{ autoSize: 'true' }}
             styles={customStyles}
              currentIndex={this.state.currentImage}
              views={members.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.name,
              }))}

            />
          </Modal>
        ) : null}
      </ModalGateway>
      <br></br>
            <br></br>
      <div className="subtitle"> - and many others - </div>
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
