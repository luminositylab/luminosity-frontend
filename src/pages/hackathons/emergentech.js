import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';
import ReactPlayer from 'react-player';

import SEO from '../../components/SEO';
import ImgBanner from '../../components/ImgBanner';
import BioModal from '../../components/BioModal';
import Layout from '../../components/layout';

const Prize = ({ image, title }) => (
  <div style={{ display: 'flex' }}>
    <Img
      style={{
        width: 150,
        height: 150,
        borderRadius: '50%'
      }}
      fluid={image}
      alt={title}
    />
    <div
      style={{
        marginLeft: '1em',
        height: '100%',
        alignSelf: 'center'
      }}
    >
      {title}
    </div>
  </div>
);

const Emergentech = ({ data }) => {
  const [bio, setBio] = React.useState(null);

  return (
    <Layout>
      <SEO
        title="Emergentech Hackathon"
        description="Emergentech Hackathon hosted by ASU's Luminosity Lab."
        // location={location}
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
                  <h2>Join Us</h2>

                  <p>
                    This February 21-23rd, come partake in the first hackathon
                    of the year, held at Sun Devil Stadium, EmergenTech.
                    EmergenTech is an event centered around multiple challenges
                    where participant creativity is able to shine as they will
                    not be restricted by what they can create. All ASU students
                    are welcome to participate, collaborate, and learn from each
                    other in this amazing opportunity to test and explore their
                    skills. Registration is complimentary for all who wish to
                    partake, and free food, prizes, and swag will be available
                    at the event.
                  </p>

                  <div
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      fontSize: '1.2em',
                      marginBottom: '.5em'
                    }}
                  >
                    <OutboundLink href="https://www.eventbrite.com/e/emergentech-2020-tickets-91049554669">
                      Sign up on Eventbrite to compete!
                    </OutboundLink>
                  </div>

                  <h2>Challenge Statement</h2>

                  <p>
                    To compete, students should be familiar with or eager to
                    learn one of the following fields:
                  </p>

                  <ul>
                    <li>Machine Learning</li>
                    <li>Computer Science</li>
                    <li>Cloud Computing</li>
                    <li>Business Analytics & Modeling</li>
                  </ul>

                  <p>
                    Student teams will be given 36 hours to display their
                    knowledge through designing and developing a prototype from
                    the topics of virtual reality, machine learning, blockchain,
                    and internet of things, which will in turn be applied to the
                    industries of education, government, healthcare, or
                    international development. Student teams, consisting of 2-5
                    members, can either be assembled ahead of time or will be
                    matched at the start of the event. To be considered
                    competitive, teams will need to formulate a pitch and
                    prototype that will be judged on technical merits, design,
                    and concept feasibility. Furthermore, the student models
                    will need to display predicted tags alongside the video in a
                    novel way which improves the user experience.
                  </p>
                  <p>
                    Students will have the opportunity to network with industry
                    representatives and, in addition to the knowledge acquired
                    by students competing in the challenges, workshops will be
                    facilitated throughout the event to teach students the
                    skills necessary to be competitive.
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <h2>FAQ</h2>
                </Grid>
                <Grid item xs={12}>
                  <h3>What is a hackathon?</h3>

                  <p>
                    We know what you may think, “I’m hacking a system,” but it’s
                    slightly different than that. A hackathon is an event that
                    fosters collaboration, community, and networking. This is a
                    chance to let your brain run free, the sky’s the limit.
                    You’ll have a specific challenge given to you at the start
                    of the event. This challenge will dictate what you create,
                    but it will be software-based.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Do I need to create a team before arriving?</h3>

                  <p>
                    Nope! If you have one, great! If not, we’ve provided time
                    onsite to form teams before the hack begins.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>How many people can a team have?</h3>

                  <p>
                    A team can have between 2 and 5 members. All team members
                    must be present for the event. Unfortunately, we’re unable
                    to allow remote participants to compete.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Who can participate?</h3>
                  <p>
                    Any university student is welcome to participate. Whether
                    you’re an undergraduate, or graduate-level student, you’re
                    welcome.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Should I bring anything?</h3>
                  <p>
                    You’ll want to bring a laptop, or something you can hack on.
                    You’re not required to stay overnight, but if you are we
                    recommend at least bringing a toothbrush, toiletries,
                    sleeping bag, and a change of clothes. Don’t forget your
                    student ID for check-in!
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>How long is the hackathon?</h3>
                  <p>
                    The event will begin with check-in at 5pm on Friday and
                    conclude by 5pm on Sunday.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>What about food?</h3>
                  <p>
                    We’ll provide dinner on day 1, breakfast, lunch, and dinner
                    on day 2, and breakfast and lunch on day 3. Snacks will also
                    be on-hand throughout.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Is there a cost?</h3>
                  <p>There is no cost to register.</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Do I have to stay the whole time?</h3>
                  <p>
                    While we recommend you stay the full time of the hackathon,
                    it’s not a requirement. We understand classes are a priority
                    and life happens, so if you need to leave and come back
                    that’s perfectly alright.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Who can register?</h3>
                  <p>
                    Any university student. Those that intend to compete should
                    be familiar or eager to learn with one of the following
                    fields:
                  </p>

                  <ul>
                    <li>Machine Learning</li>
                    <li>Computer Science</li>
                    <li>Cloud Computing</li>
                    <li>Business Analytics & Modeling</li>
                  </ul>

                  <p>
                    All skill levels are welcome, from beginner to advanced. You
                    each have something to bring to the table!
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Tell me about Slack.</h3>
                  <p>
                    We’ll be utilizing Slack as the main form of communication
                    during the event. As a participant, you’ll be added to the
                    hackathon’s Slack channel for updates and reminders. Please
                    keep an eye on it. If you’ve never used Slack, here’s an{' '}
                    <a href="https://get.slack.help/hc/en-us/sections/360000110083-Intro-to-Slack">
                      intro
                    </a>{' '}
                    for you.
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <h3>Are there any conduct guidelines?</h3>
                  <p>
                    Yes! Please review the{' '}
                    <a href="https://eoss.asu.edu/dos/srr/codeofconduct">
                      ASU Student Code of Conduct
                    </a>
                    . This is an event occurring on ASU’s campus, therefore we
                    will abide by all ASU policies. This will be enforced
                    throughout the event. Do not bring any weapons, knives,
                    firearms, drugs or alcohol to this event. Please utilize
                    this opportunity to create a new idea or project, and don’t
                    use one from a previous event. We expect all participants to
                    be courteous and respectful of each other and their ideas.
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <h2>Where Will The Hackathon Take Place?</h2>

                  <p>The hackathon will be in Sun Devil Stadium!</p>
                  <div className="map" style={{ textAlign: 'center' }}>
                    <iframe
                      width="100%"
                      height="450"
                      frameborder="0"
                      style={{ border: 0 }}
                      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ0RwU--MIK4cRIiUjb2Qdiw0&key=AIzaSyBeXrO61yjuZ8phjJ6sutCmr1citbu6-s8"
                      allowfullscreen
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <h2>Schedule-at-a-Glance (Subject to Change)</h2>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Friday, February 21, 2020</h3>
                  <p>
                    5:00p - 5:55p Registration & Light Snacks/Refreshments
                    <br />
                    6:00p - 6:30p Welcome & Kick-Off
                    <br />
                    6:30p - 7:00p Keynote
                    <br />
                    7:00p - 7:15p Product Design & Guidelines <br />
                    7:15p - 7:25p Event Overview
                    <br />
                    7:25p - 7:30p Team Formation & Start of Hackathon
                    <br />
                    7:30p - 8:30p Dinner
                    <br />
                    9:30p - 10:30p Optional Workshop 1
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Saturday, February 22, 2020</h3>
                  <p>
                    8:00a - 9:00a Breakfast <br />
                    11:00a - 12:00p Optional Workshop 2 <br />
                    12:00p - 1:00p Lunch <br />
                    4:00p – 5:00p Info Tabling <br />
                    5:00p - 6:00p Optional Workshop 3 <br />
                    6:00p - 7:00p Dinner <br />
                    8:00p - 9:00p Optional Workshop 4
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Sunday, February 23, 2020</h3>
                  <p>
                    8:00a - 9:00a Breakfast
                    <br />
                    9:30a Project Submissions
                    <br />
                    9:30a - 10:15a Q&A with the Judges
                    <br />
                    10:15a - 12:00p Judging
                    <br />
                    12:00p - 1:00p Lunch
                    <br />
                    1:00p - 3:30p Judging
                    <br />
                    3:30p - 4:00p Judges Deliberation
                    <br />
                    4:00p - 5:00p Conclusion & Awards
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <h2>Sponsored By</h2>
                </Grid>
                <Grid item xs={6}>
                  <Img
                    style={{
                      width: '50%',
                      margin: '0 auto'
                    }}
                    fluid={
                      data.chemonics &&
                      data.chemonics.childImageSharp &&
                      data.chemonics.childImageSharp.fluid
                    }
                    alt={'Chemonics'}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Img
                    style={{
                      width: '50%',
                      margin: '0 auto'
                    }}
                    fluid={
                      data.bow &&
                      data.bow.childImageSharp &&
                      data.bow.childImageSharp.fluid
                    }
                    alt={'Bank of the West'}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Img
                    style={{
                      width: 200,
                      margin: '0 auto'
                    }}
                    fluid={
                      data.aws &&
                      data.aws.childImageSharp &&
                      data.aws.childImageSharp.fluid
                    }
                    alt={'AWS'}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Img
                    style={{
                      width: 150,
                      margin: '0 auto'
                    }}
                    fluid={
                      data.starbucks &&
                      data.starbucks.childImageSharp &&
                      data.starbucks.childImageSharp.fluid
                    }
                    alt={'Starbucks'}
                  />
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
                <OutboundLink href="https://www.eventbrite.com/e/emergentech-2020-tickets-91049554669">
                  Sign up now!
                </OutboundLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Emergentech;

export const query = graphql`
  query {
    heroImageIntro: file(
      relativePath: { eq: "hackathons/emergentech-hero.png" }
    ) {
      ...fluidImageHero
    }
    chemonics: file(relativePath: { eq: "hackathons/chemonics.png" }) {
      ...fluidImageHero
    }
    aws: file(relativePath: { eq: "hackathons/aws.png" }) {
      ...fluidImageHero
    }
    starbucks: file(relativePath: { eq: "hackathons/starbucks.png" }) {
      ...fluidImageHero
    }
    bow: file(relativePath: { eq: "hackathons/bow-logo.jpg" }) {
      ...fluidImageHero
    }
  }
`;
