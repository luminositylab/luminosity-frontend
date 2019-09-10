import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';

import SEO from '../../components/SEO';
import Banner from '../../components/Banner';
import Layout from '../../components/layout';

const BankOfTheWest = ({ data }) => (
  <Layout>
    <SEO
      title="Hackathons"
      description="Hackathons hosted by Luminosity Lab."
      // location={location}
    />

    <Banner
      image={
        data.heroImageIntro &&
        data.heroImageIntro.childImageSharp &&
        data.heroImageIntro.childImageSharp.fluid
      }
    />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <div className="description">
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <h2>Join Us!</h2>

                <p>
                  This October 4-5th, come take part in a challenge offered by
                  Bank of the West! An event for innovation and designing, this
                  unique experience will allow you to call the shots in your
                  creation. Whether this is your first or fiftieth hackathon,
                  all ASU students are welcome to participate, collaborate, and
                  learn from each other. Registration is complimentary, and
                  there will be free food, prizes, and swag.
                </p>

                <div
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    fontSize: '1.2em',
                    marginBottom: '.5em'
                  }}
                >
                  <OutboundLink href="https://solutionsxhackathon_bow.eventbrite.com/">
                    Sign up on Eventbrite to compete!
                  </OutboundLink>
                </div>
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
                  chance to let your brain run free, the sky’s the limit. You’ll
                  have a specific challenge given to you at the start of the
                  event. This challenge will dictate what you create, but it
                  will be software-based.
                </p>
              </Grid>
              <Grid item xs={6}>
                <h3>Do I need to create a team before arriving?</h3>

                <p>
                  Nope! If you have one, great! If not, we’ve provided time
                  onsite to form teams before the hack begins.
                </p>
              </Grid>
              <Grid item xs={6}>
                <h3>How many people can a team have?</h3>

                <p>A team can have between 2 and 5 members.</p>
              </Grid>
              <Grid item xs={6}>
                <h3>Who can participate?</h3>
                <p>
                  Any Arizona State University student is welcome to
                  participate. Whether you’re an undergraduate, masters student,
                  or Ph.D. candidate, you’re welcome!
                </p>
              </Grid>
              <Grid item xs={6}>
                <h3>Should I bring anything?</h3>
                <p>
                  You’ll want to bring a laptop, or something you can hack on.
                  You’re not required to stay overnight, but if you are we
                  recommend at least bringing a toothbrush, toiletries, sleeping
                  bag, and a change of clothes. Don’t forget your student ID for
                  check-in!
                </p>
              </Grid>
              <Grid item xs={6}>
                <h3>How long is the hackathon?</h3>
                <p>The hackathon will last 30 hours from start to finish.</p>
              </Grid>
              <Grid item xs={6}>
                <h3>What about food?</h3>
                <p>
                  We’ll provide breakfast, lunch, and dinner on day 1, and
                  breakfast and lunch on day 2. Snacks will also be on-hand
                  throughout.
                </p>
              </Grid>

              <Grid item xs={6}>
                <h3>Is there a cost?</h3>
                <p>There is not a cost to register.</p>
              </Grid>
              <Grid item xs={6}>
                <h3>Who can register?</h3>
                <p>
                  Any ASU student in any degree program and field of study. All
                  skill levels are welcome, from beginner to advanced. You each
                  have something to bring to the table!
                </p>
              </Grid>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
                <h3>Are there any conduct guidelines?</h3>
                <p>
                  Yes! Please review the{' '}
                  <a href="https://eoss.asu.edu/dos/srr/codeofconduct">
                    ASU Student Code of Conduct
                  </a>
                  . This is an event occurring on ASU’s campus, therefore we
                  will abide by all ASU policies. This will be enforced
                  throughout the event. Do not bring any weapons, knives,
                  firearms, drugs or alcohol to this event. Please utilize this
                  opportunity to create a new idea or project, and don’t use one
                  from a previous event. We expect all participants to be
                  courteous and respectful of each other and their ideas.
                </p>
              </Grid>
              <Grid item xs={12}>
                <h2>Where Will The Hackathon Take Place?</h2>

                <p>
                  The hackathon will take place on the first floor of ECG on
                  ASU's Tempe Campus. See the map below for the exact location!
                </p>
                <div className="map" style={{ textAlign: 'center' }}>
                  <iframe
                    width="100%"
                    height="450"
                    frameborder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDYmAUNwIK4cRR7d4s2RKef8&key=AIzaSyBeXrO61yjuZ8phjJ6sutCmr1citbu6-s8"
                    allowfullscreen
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <h2>Schedule-at-a-Glance</h2>
              </Grid>
              <Grid item xs={6}>
                <h3>Friday</h3>
                <p>
                  8:00 AM: Check-In/Registration & Breakfast <br />
                  9:00 AM: Welcome <br />
                  10:00 AM: Team Formation <br />
                  10:30 AM: Hacking Begins <br />
                  12:00 AM: Lunch <br />
                  1:00 PM: Optional Workshop <br />
                  4:00 PM: Optional Workshop <br />
                  6:00 PM: Dinner <br />
                  8:00 PM: Optional Workshop <br />
                  10:00 PM: Optional Workshop <br />
                </p>
              </Grid>
              <Grid item xs={6}>
                <h3>Saturday</h3>
                <p>
                  8:30 AM: Breakfast <br />
                  10:00 AM: Project Submission Deadline <br />
                  10:30 AM: Judging Begins <br />
                  12:00 PM: Lunch <br />
                  1:00 PM: Awards & Conclusion (and sleep!) <br />
                </p>
              </Grid>
              <Grid item xs={12}>
                <h2>Judges</h2>
              </Grid>
              <Grid item xs={6}>
                <h3>Saturday</h3>
                <p>
                  8:30 AM: Breakfast <br />
                  10:00 AM: Project Submission Deadline <br />
                  10:30 AM: Judging Begins <br />
                  12:00 PM: Lunch <br />
                  1:00 PM: Awards & Conclusion (and sleep!) <br />
                </p>
              </Grid>
              <Grid item xs={12}>
                <h2>Sponsored by Bank of the West</h2>

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
            </Grid>

            <div
              style={{
                textAlign: 'center',
                width: '100%',
                fontSize: '2em',
                marginTop: '.5em'
              }}
            >
              <OutboundLink href="https://solutionsxhackathon_bow.eventbrite.com/">
                Sign up now!
              </OutboundLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default BankOfTheWest;

export const query = graphql`
  query {
    heroImageIntro: file(
      relativePath: { eq: "hackathons/solutionsx-hackathon-hero.jpg" }
    ) {
      ...fluidImageHero
    }
    bow: file(relativePath: { eq: "hackathons/bow-logo.jpg" }) {
      ...fluidImageHero
    }
  }
`;
