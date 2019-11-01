import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';

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

const BankOfTheWest = ({ data }) => {
  const [bio, setBio] = React.useState(null);

  return (
    <Layout>
      <SEO
        title="Action.ML Hackathon"
        description="Action.ML Hackathon hosted by Fox in collaboration with ASU's Luminosity Lab."
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
                  <h2>Action.ML Hackathon</h2>

                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=io66H2KQHlE"
                    playing
                    muted
                    style={{ margin: '0 auto 30px' }}
                  />
                  <h2>Can you hack it?</h2>
                  <p>
                    This October 26-27th, come take part in the Action.ML
                    Hackathon hosted by FOX! As an event centered around
                    challenge and innovation, you’ll play a pivotal role in
                    helping conceptualize and create solutions to propel FOX
                    forward. All ASU students are welcome to participate,
                    collaborate, and learn from each other. Registration is
                    complimentary, and there will be free food, prizes, and
                    swag.
                  </p>
                  <div
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      fontSize: '1.2em',
                      marginBottom: '.5em'
                    }}
                  >
                    <OutboundLink href="https://actionml-hackathon.eventbrite.com/">
                      Sign up on Eventbrite to compete!
                    </OutboundLink>
                  </div>

                  <br></br>
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
                    Student teams will be given 24 hours of time to hack within
                    a 30-hour event to design and develop a machine learning
                    algorithm that can process high resolution video content.
                    Student teams of 3-5 can either be assembled ahead of time
                    or will be matched at the start of the event. Teams will be
                    given a set of labeled images to train their machine
                    learning algorithms, with the intent of extracting data
                    features from the images and using these engineered features
                    to build a model that can predict and label additional
                    images with relevant tags. To win the competition, teams
                    will need to process this video as it streams in nearly
                    real-time, taking into consideration accuracy and fluid
                    prediction syncing. Furthermore, the student models will
                    need to display predicted tags alongside the video in a
                    novel way which improves the user experience. Students will
                    have a chance to network with FOX leadership. In addition to
                    the knowledge acquired by students competing in the
                    challenge, workshops will be facilitated throughout the
                    event to teach students the skills necessary to be
                    competitive.
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
                    o Nope! If you have one, great! If not, we’ve provided time
                    onsite to form teams before the hackathon begins.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>How many people can a team have?</h3>

                  <p>A team can have between 3 and 5 members.</p>
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
                  <h3>Should I bring anything?</h3>
                  <p>
                    You’ll want to bring a laptop, or something you can hack on.
                    You’re not required to stay overnight, but if you are, we
                    recommend at least bringing a toothbrush, toiletries,
                    sleeping bag, and a change of clothes. Don’t forget your
                    student ID for check-in!
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>How long is the hackathon?</h3>
                  <p>
                    The hackathon will last 30 hours from start to finish, and
                    you will have roughly 24 hours of hacking.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>What about food?</h3>
                  <p>
                    We’ll provide breakfast, lunch, and dinner on day one, and
                    breakfast and lunch on day two. Snacks will also be given
                    throughout.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Is there a cost?</h3>
                  <p>There is not a cost to register.</p>
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
                    Any ASU student. Those that intend to compete should be
                    familiar or eager to learn with one of the following fields:
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
                  <h2>Prizes</h2>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>1st Place</h3>
                  <p>
                    Demo and present the winning model at the FOX Data Summit in
                    February, tour of the FOX lot, travel and accommodations
                    included.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>2nd Place</h3>
                  <Prize
                    title="Apple Watch"
                    image={
                      data.watch &&
                      data.watch.childImageSharp &&
                      data.watch.childImageSharp.fluid
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>3rd Place</h3>
                  <Prize
                    title="Amazon Fire TV Cube"
                    image={
                      data.cube &&
                      data.cube.childImageSharp &&
                      data.cube.childImageSharp.fluid
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Remaining Teams</h3>
                  <p>Additional swag will be given out on-site!</p>
                </Grid>
                <Grid item xs={12}>
                  <br></br>
                  <h2>Where Will The Hackathon Take Place?</h2>

                  <p>
                    The hackathon will take place in the Arizona Ballroom at the
                    MU.
                  </p>
                  <div className="map" style={{ textAlign: 'center' }}>
                    <iframe
                      width="100%"
                      height="450"
                      frameborder="0"
                      style={{ border: 0 }}
                      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJCUgLoNwIK4cRWxJrA3jUXFQ&key=AIzaSyBeXrO61yjuZ8phjJ6sutCmr1citbu6-s8"
                      allowfullscreen
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <br></br>
                  <h2>Schedule-at-a-Glance (Subject to Change)</h2>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Saturday</h3>
                  <p>
                    8:00a – 8:55a Check-In & Breakfast <br />
                    9:00a – 9:45a Welcome to Action.ML! Keynote by Tim Joyce &
                    Sarath Ramaswami of FOX
                    <br />
                    9:45a – 10:00a Competition Guidelines & Event Overview
                    <br />
                    10:00a Team Formation & Hacking Begins!
                    <br />
                    12:00p – 12:45p Lunch
                    <br />
                    6:00p – 6:45p Dinner
                    <br />
                    6:30p – 7:30p Optional Workshop #1
                    <br />
                    7:30p – 8:30p Optional Workshop #2
                    <br />
                    9:00p – 10:00p Optional Workshop #3
                    <br />
                    11:00p – 12:00a Optional Workshop #4
                    <br />
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Sunday</h3>
                  <p>
                    8:30a – 9:15a Breakfast <br />
                    10:30a Project Submission Deadline
                    <br />
                    10:30a – 11:00a Q&A with FOX
                    <br />
                    11:00a – 1:00p Pitch Presentations to Judges & Participants
                    <br />
                    1:00p – 2:00p Lunch
                    <br />
                    2:00p – 2:30p Awards & Conclusion
                    <br />
                  </p>
                </Grid>
                {/* <Grid item xs={12}>
                  <h2>Judges</h2>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{ display: 'flex', cursor: 'pointer' }}
                    onClick={() =>
                      setBio({
                        title: 'Jacob Sorenson',
                        description: (
                          <div>
                            As Chief Information Officer (CIO), Jacob Sorensen
                            is responsible for the bank’s technology platform,
                            including: Infrastructure & Operations Development;
                            Solutions Delivery; Data Management; Technology
                            Strategy; Architecture; and Technology Vendor
                            Management. <br />
                            <br />
                            Based in San Francisco, Sorensen joined Bank of the
                            West in 2009. Prior to serving as CIO, he led the
                            bank's Technology Shared Services Solutions Delivery
                            organization. In this role, he oversaw all aspects
                            of the bank’s Technology Data Infrastructure; Data
                            Analytics; Real-Time Integration; Customer
                            Relationship Management; Master Data Management;
                            Marketing Technology; Enterprise Testing (Quality
                            Assurance); Regulatory & Compliance IT programs;
                            Risk and Finance technologies; Business Process
                            Management, and Automation. <br />
                            <br />
                            Before coming to bank of the West, Sorensen held
                            positions at J.P. Morgan Chase, Washington Mutual,
                            Providian Financial, and NextCard. An active
                            volunteer in Year Up since 2008, Sorensen is a Board
                            Member of Bay Area Chapter. <br />
                            <br />
                            Sorensen received his BA in Economics from the
                            University of California, Santa Barbara, graduating
                            with Highest Honors.
                          </div>
                        )
                      })
                    }
                  >
                    <Img
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%'
                      }}
                      fluid={
                        data.jacob &&
                        data.jacob.childImageSharp &&
                        data.jacob.childImageSharp.fluid
                      }
                      alt={'Jacob Sorenson'}
                    />
                    <div
                      style={{
                        marginLeft: '1em',
                        height: '100%',
                        alignSelf: 'center'
                      }}
                    >
                      Jacob Sorenson
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{ display: 'flex', cursor: 'pointer' }}
                    onClick={() =>
                      setBio({
                        title: 'Hisham Salama',
                        description: (
                          <div>
                            As Executive Vice President, Head of Digital
                            Channels at Bank of the West, Hisham Salama is
                            focused on creating customer focused experiences
                            that motivate action, leading to increased
                            satisfaction, engagement and profitability. He is
                            responsible for developing strategies and
                            initiatives that further strengthen Bank of the
                            West's digital platforms and continue to deliver
                            best-in-class products and solutions to customers.
                            In his short tenure at Bank of the West, Hisham has
                            been able to increase digital transactions, reduce
                            contact center call volume, and reduce bottom line
                            expenses through digital efficiency.
                            <br />
                            <br />
                            Hisham brings a unique analytical and business
                            perspective to overcoming complex challenges in the
                            fast-paced and evolving digital ecosystem. He is an
                            innovator who has filed multiple patents in the
                            United States and Canada, and is revered for his
                            ability to communicate, network and negotiate with
                            anyone. He is also focused on building out high
                            caliber teams and champions developing internal
                            talent.
                            <br />
                            <br />
                            In his previous role as Head of Emerging Payments &
                            Innovation at TD Bank, Hisham was responsible for
                            the launch of TD MySpend, a real-time personal
                            financial management tool, handling everything from
                            strategy and contract negotiations to design and
                            roll-out. Under Hisham’s leadership, TD MySpend
                            reached 1M downloads in its first year, which
                            represents a 29% adoption rate for digital
                            customers. TD MySpend users hold higher account
                            balances, visit branches less often and experience
                            greater satisfaction with TD Bank.
                            <br />
                            <br />
                            Hisham Salama is committed to improving and
                            simplifying each customer’s life through digital
                            interactions. He is a regular speaker at industry
                            conferences throughout North America. He currently
                            serves on the digital board for the Consumer Bankers
                            Association and The Clearing House. He earned a B.S.
                            in Business Management, concentrating in Finance,
                            from N.C. State University.
                          </div>
                        )
                      })
                    }
                  >
                    <Img
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%'
                      }}
                      fluid={
                        data.hisham &&
                        data.hisham.childImageSharp &&
                        data.hisham.childImageSharp.fluid
                      }
                      alt={'Hisham Salama'}
                    />
                    <div
                      style={{
                        marginLeft: '1em',
                        height: '100%',
                        alignSelf: 'center'
                      }}
                    >
                      Hisham Salama
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{ display: 'flex', cursor: 'pointer' }}
                    onClick={() =>
                      setBio({
                        title: 'Ashish Kapur',
                        description: (
                          <div>
                            Ashish is the Head of Shared Solutions Delivery at
                            the Bank of the West (part of BNP Paribas Group). In
                            this role, he is responsible for providing solutions
                            using Data, BI/Analytics, BPM, RPA and CRM
                            platforms. He has led several large, complex
                            programs in banking and capital markets, investment
                            management, government sponsored enterprises (Fannie
                            Mae, Freddie Mac) and asset servicing. Most
                            recently, he worked at PwC as a Director in FS
                            Advisory Services. <br />
                            <br />
                            Prior to his recent role, he worked at The Capital
                            Markets Company (Capco), Bank of New York Mellon,
                            and State Street Corporation. His educational
                            background includes a M.B.A from Jacobs School of
                            Management, SUNY Buffalo and an undergraduate degree
                            in Electrical Engineering from National Institute of
                            Technology, India.
                          </div>
                        )
                      })
                    }
                  >
                    <Img
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%'
                      }}
                      fluid={
                        data.ashish &&
                        data.ashish.childImageSharp &&
                        data.ashish.childImageSharp.fluid
                      }
                      alt={'Ashish Kapur'}
                    />
                    <div
                      style={{
                        marginLeft: '1em',
                        height: '100%',
                        alignSelf: 'center'
                      }}
                    >
                      Ashish Kapur
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{ display: 'flex', cursor: 'pointer' }}
                    onClick={() =>
                      setBio({
                        title: 'Charles Bang',
                        description: (
                          <div>
                            Charles Bang is Chief Architect at Bank of the West
                            and oversees the enterprise architecture and IT
                            innovation functions. He has been at the Bank for
                            the 6 years, starting as Business Technology Partner
                            for the Commercial and Corporate Banking business.
                            <br />
                            <br />
                            Previously Charles was in product development at
                            Bank of America, launching commercial banking and
                            payment products for the large corporate segment in
                            the US, South America and Asia Pacific regions.
                            Prior positions include various positions in
                            engineering, product management, professional
                            services, and technical support at various Bay Area
                            startups with multiple exits including an IPO.
                          </div>
                        )
                      })
                    }
                  >
                    <Img
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%'
                      }}
                      fluid={
                        data.charles &&
                        data.charles.childImageSharp &&
                        data.charles.childImageSharp.fluid
                      }
                      alt={'Charles Bang'}
                    />
                    <div
                      style={{
                        marginLeft: '1em',
                        height: '100%',
                        alignSelf: 'center'
                      }}
                    >
                      Charles Bang
                    </div>
                  </div>
                </Grid> */}
                <Grid item xs={12}>
                  <br></br>
                  <h2>Sponsors</h2>

                  <Img
                    style={{
                      width: 250,
                      margin: '0 auto'
                    }}
                    fluid={
                      data.fox &&
                      data.fox.childImageSharp &&
                      data.fox.childImageSharp.fluid
                    }
                    alt={'Fox'}
                  />

                  <Img
                    style={{
                      width: 250,
                      margin: '2em auto'
                    }}
                    fluid={
                      data.aws &&
                      data.aws.childImageSharp &&
                      data.aws.childImageSharp.fluid
                    }
                    alt={'AWS'}
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
                <OutboundLink href="https://actionml-hackathon.eventbrite.com/">
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

export default BankOfTheWest;

export const query = graphql`
  query {
    heroImageIntro: file(
      relativePath: { eq: "hackathons/actionml-hackathon.jpg" }
    ) {
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
