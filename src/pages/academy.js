import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';

import SEO from '../components/SEO';
import ImgBanner from '../components/ImgBanner';
import BioModal from '../components/BioModal';
import Layout from '../components/layout';

const Academy = ({ data }) => {
  const [bio, setBio] = React.useState(null);

  return (
    <Layout>
      <SEO
        title="Luminosity Academy"
        description="Luminosity Academy is a program run by the ASU Luminosity Lab to learn real-world technical skills."
      />

      <ImgBanner
        image={
          data.heroImageIntro &&
          data.heroImageIntro.childImageSharp &&
          data.heroImageIntro.childImageSharp.fluid
        }
      />

      <BioModal
        open={Boolean(bio)}
        title={bio && bio.title}
        description={bio && bio.description}
        handleClose={() => setBio(null)}
      />

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <div className="description">
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <h2>Luminosity Academy</h2>

                  <p>
                    The Luminosity Academy is a program run by the Luminosity
                    Lab at ASU for students to learn applied skills in topics
                    including web development, leadership, graphic design, and
                    more. The class is driven by self-motivated students who
                    want to learn new skills and challenge themselves. It is
                    Agile-inspired and organized for rapid, iterative learning.
                  </p>
                  <p>
                    Students who are interviewed and accepted into the Academy
                    will form teams with their classmates, come up with the
                    problem(s) they want to solve, and work with each other over
                    the semester to build out solutions. The teams pitch their
                    projects at the end of the semester, and the winning team is
                    hired into the Luminosity Lab to continue building their
                    idea.
                  </p>
                  <div
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      fontSize: '1.2em',
                      marginBottom: '.5em'
                    }}
                  >
                    <OutboundLink href="https://www.surveymonkey.com/r/luminosity-academy-spring-2019">
                      Apply now!
                    </OutboundLink>
                  </div>

                  <br></br>
                  <h2>Challenge Statement</h2>

                  <p>
                    To be accepted, students should be eager to learn about one
                    or more of the following areas:
                  </p>

                  <ul>
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Machine Learning</li>
                    <li>Leadership in Tech</li>
                  </ul>

                  <p>
                    No prior knowledge is required, but it is highly recommended
                    to make yourself familiar with the concepts before the
                    sessions begin. The class is extremely fast-paced, so it
                    will assist you in building out your projects rapidly.
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <h2>FAQ</h2>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>How should I prepare for the interview?</h3>

                  <p>
                    We are looking for candidates who have a deep interest in
                    the technology and how it impacts humanity. You do not need
                    to have prior experience with these technologies, but we are
                    looking for tangible reasons for joining the course. We have
                    a statistical method which chooses students based on their
                    prior experience, so we have a mix of talents for teams.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>What criteria do you use in interviews?</h3>

                  <p>We screen candidates based on the following criteria:</p>

                  <ul>
                    <li>Tangible Interest in the Course</li>
                    <li>Student/Group Fit</li>
                    <li>Willingness to Engage</li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Do I need to form a team before applying?</h3>

                  <p>
                    No - we do not allow teams to apply together. The teams will
                    be dynamically formed within the first few weeks of class.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Are there grades for the course?</h3>
                  <p>
                    There are no grades and there is zero effect on your GPA. We
                    are all here to learn, not punish the people who come in
                    with less knowledge.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>
                    How many people can a team have once the projects begin?
                  </h3>

                  <p>A team can have between 3 and 6 members.</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Who can participate?</h3>
                  <p>
                    Any Arizona State University student is welcome to
                    participate. Whether you’re an undergraduate, or
                    graduate-level student, you’re free to come.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Do I need anything for the course?</h3>
                  <p>
                    You’ll need a laptop with any OS - Mac is preferred, but
                    absolutely not required.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>How long does the course go?</h3>
                  <p>
                    The course is semester based, and will operate within the
                    same time-frame as a "Session C" course.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Is there a cost?</h3>
                  <p>The program will cost $200 to register for Spring 2020.</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Can I drop the course?</h3>
                  <p>
                    It is possible to drop the course, however, there are no
                    refunds after payment is made.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Who can register?</h3>
                  <p>
                    Any ASU student from any college/degree program. You should
                    get excited about:
                  </p>

                  <ul>
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Machine Learning</li>
                    <li>Leadership in Tech</li>
                  </ul>

                  <p>
                    All skill levels are welcome, from beginner to advanced. You
                    each have something to bring to the table!
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Are there any conduct guidelines?</h3>
                  <p>
                    Yes! Please review the{' '}
                    <a href="https://eoss.asu.edu/dos/srr/codeofconduct">
                      ASU Student Code of Conduct
                    </a>
                    . This is an event occurring on ASU’s campus, therefore we
                    will abide by all ASU policies. This will be enforced
                    throughout the course. Do not bring any weapons, knives,
                    firearms, drugs or alcohol to any sessions. Please utilize
                    this opportunity to create a new idea or project. We expect
                    all participants to be courteous and respectful of each
                    other and their ideas.
                  </p>
                </Grid>

                <Grid item xs={12}>
                  <br></br>
                  <h2>Location</h2>

                  <p>The course location still is yet to be determined.</p>
                  <div className="map" style={{ textAlign: 'center' }}>
                    <iframe
                      width="100%"
                      height="450"
                      frameborder="0"
                      style={{ border: 0 }}
                      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOyrQ4MMJK4cRXGpsy9Ulvr0&key=AIzaSyBeXrO61yjuZ8phjJ6sutCmr1citbu6-s8"
                      allowfullscreen
                    />
                  </div>
                </Grid>
              </Grid>

              <div
                style={{
                  textAlign: 'center',
                  width: '100%',
                  fontSize: '2em',
                  marginTop: '.5em'
                }}
              >
                <OutboundLink href="https://www.surveymonkey.com/r/luminosity-academy-spring-2019">
                  Apply for Academy today!
                </OutboundLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Academy;

export const query = graphql`
  query {
    heroImageIntro: file(relativePath: { eq: "academy-hero.png" }) {
      ...fluidImageHero
    }
    fox: file(relativePath: { eq: "hackathons/fox-logo.png" }) {
      ...fluidImageHero
    }
    jacob: file(relativePath: { eq: "hackathons/judges/jacob.png" }) {
      ...fluidImageHero
    }
    hisham: file(relativePath: { eq: "hackathons/judges/hisham.png" }) {
      ...fluidImageHero
    }
    ashish: file(relativePath: { eq: "hackathons/judges/ashish.png" }) {
      ...fluidImageHero
    }
    charles: file(relativePath: { eq: "hackathons/judges/charles.png" }) {
      ...fluidImageHero
    }
    watch: file(relativePath: { eq: "hackathons/apple-watch.jpg" }) {
      ...fluidImageHero
    }
    cube: file(relativePath: { eq: "hackathons/fire-cube.jpg" }) {
      ...fluidImageHero
    }
    aws: file(relativePath: { eq: "hackathons/aws.png" }) {
      ...fluidImageHero
    }
  }
`;
