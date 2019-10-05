import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';
import ReactPlayer from 'react-player';

import SEO from '../../components/SEO';
import Banner from '../../components/Banner';
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
        title="SolutionsX Hackathon"
        description="SolutionsX Hackathon hosted by Bank of the West in collaboration with ASU's Luminosity Lab."
        // location={location}
      />

      <Banner
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
                  <h2>SolutionsX Hackathon</h2>

                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=mfOpHqgFF9U"
                    playing
                    muted
                    style={{ margin: '0 auto 30px' }}
                  />

                  <h2>Join Us!</h2>

                  <p>
                    This October 4-5th, come take part in a challenge offered by
                    Bank of the West! An event for innovation and designing,
                    this unique experience will allow you to call the shots in
                    your creation. Whether this is your first or fiftieth
                    hackathon, all ASU students are welcome to participate,
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
                    <OutboundLink href="https://solutionsxhackathon_bow.eventbrite.com/">
                      Sign up on Eventbrite to compete!
                    </OutboundLink>
                  </div>

                  <h2>Challenge Statement</h2>

                  <p>
                    You must be an enrolled Arizona State University student to
                    participate. Student teams will be given 24 hours of hack
                    time to design and develop a bank of the future in an effort
                    to help Bank of the West change banking for good. Student
                    teams of 2-5 can either be assembled ahead of time or will
                    be matched at the start of the event. Teams will be required
                    to use business acumen and technical skills within design
                    and coding to develop and propose a solution directly to
                    executives from Bank of the West. By drawing on personal
                    experience, creativity, and the need to push the envelope,
                    participants will be able to expand the initial desired
                    capabilities of a banking platform and create a bank they’d
                    want to join.
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

                  <p>A team can have between 2 and 5 members.</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Who can participate?</h3>
                  <p>
                    Any Arizona State University student is welcome to
                    participate. Whether you’re an undergraduate, masters
                    student, or Ph.D. candidate, you’re welcome!
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
                    The hackathon will last 30 hours from start to finish, with
                    24 hours of allotted hacking.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>What about food?</h3>
                  <p>
                    We’ll provide breakfast, lunch, and dinner on day 1, and
                    breakfast and lunch on day 2. Snacks will also be on-hand
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
                    Any ASU student in any degree program and field of study.
                    All skill levels are welcome, from beginner to advanced. You
                    each have something to bring to the table! You'll should
                    have a familiarity or a willingness to learn at least
                    front-end or back-end web development, computer science,
                    UI/UX design, or business analytics & modeling.
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

                  <Prize
                    title="128GB iPad (Latest)"
                    image={
                      data.ipad &&
                      data.ipad.childImageSharp &&
                      data.ipad.childImageSharp.fluid
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>2nd Place</h3>
                  <Prize
                    title="Oculus Go"
                    image={
                      data.oculus &&
                      data.oculus.childImageSharp &&
                      data.oculus.childImageSharp.fluid
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>3rd Place</h3>
                  <Prize
                    title="Drone"
                    image={
                      data.drone &&
                      data.drone.childImageSharp &&
                      data.drone.childImageSharp.fluid
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Remaining Teams</h3>
                  <p>Additional swag will be given out on-site!</p>
                </Grid>
                <Grid item xs={12}>
                  <h2>Where Will The Hackathon Take Place?</h2>

                  <p>
                    The hackathon will take place on the first floor of ECG on
                    ASU's Tempe Campus. See the map below for the exact
                    location!
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
                  <h2>Schedule-at-a-Glance (Subject to Change)</h2>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Friday</h3>
                  <p>
                    8:00a - 8:55a Registration & Breakfast <br />
                    9:00a - 9:10a Kickoff with John Fleharty, Vice President,
                    DevOps Engineering at Bank of the West <br />
                    9:10a - 9:25a Keynote Digital with Hisham Salama, Executive
                    Vice President, Head of Digital Channels at Bank of the West{' '}
                    <br />
                    9:25a - 9:40a Product Design & Guidelines with Janet Covey,
                    Vice President Senior Product Design Manager at Bank of the
                    West <br />
                    9:40a - 10:00a Team Formation & Start of Hackathon <br />
                    12:00p - 1:00p Bank of the West Recruiting with Elijah
                    Padua, Recruiting Manager, Vice President at Bank of the
                    West & Lunch <br />
                    3:00p - 4:00p Optional Workshop 1 (Mark Naufel "Producing
                    Mockups with Figma") <br />
                    4:00p - 5:00p Optional Workshop 2 (Mark Naufel “Front-End
                    Development with Bootstrap”) <br />
                    6:00p - 7:00p Dinner <br />
                    9:00p - 10:00p Optional Workshop 3 (Chase Adams “Intro to
                    React Web Apps”) <br />
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h3>Saturday</h3>
                  <p>
                    12:00a - 1:00a Optional Workshop 4 (Chase Adams “Backend
                    Development with Node.js”) <br />
                    8:30a - 9:30a Breakfast <br />
                    10:30a Project Submissions <br />
                    10:30a - 10:40a Innovation at Bank of the West with John
                    Fleharty, Vice President, DevOps Engineering at Bank of the
                    West <br />
                    10:40a - 11:10a Bank of the West Panel <br />
                    11:10a - 12:30p Judging <br />
                    12:30p - 1:30p IT Keynote with Jacob Sorenson, Chief
                    Information Officer, Executive Vice President Information
                    Technology Group at Bank of the West & Lunch <br />
                    1:30p - 2:30p Conclusion & Awards <br />
                  </p>
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{ display: 'flex', cursor: 'pointer' }}
                    onClick={() =>
                      setBio({
                        title: 'Ian Poinsenet',
                        description: (
                          <div>
                            Ian Poinsenet is Innovation and Transformation
                            Leader at BNP Paribas International Retail Banking.
                            Based in Paris (France), his role is to accompany
                            the branches of the Group in Turkey, Poland,
                            Ukraine, Africa and the US, building their
                            innovation programs from ideation to acceleration
                            and facilitating their transformation initiatives.
                            <br />
                            <br />
                            He has a 25-year experience in Innovation and Change
                            Management in various industries such as Telco,
                            Consultancy, Insurnace and Banking. His main focuses
                            are creativity, sustainability, intrapreneurship,
                            corporate and employee engagement.
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
                        data.ian &&
                        data.ian.childImageSharp &&
                        data.ian.childImageSharp.fluid
                      }
                      alt={'Ian Poinsenet'}
                    />
                    <div
                      style={{
                        marginLeft: '1em',
                        height: '100%',
                        alignSelf: 'center'
                      }}
                    >
                      Ian Poinsenet
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{ display: 'flex', cursor: 'pointer' }}
                    onClick={() =>
                      setBio({
                        title: 'Janet Covey',
                        description: (
                          <div>
                            As the VP Senior Product Design Manager at Bank of
                            the West, Covey’s work focuses on ways to simplify,
                            clarify and streamline the digital customer
                            experience. She recognizes that individual
                            experiences don’t look alike, and that the best
                            design is able to bridge these differences. <br />
                            <br />
                            The rise of digital content over the past few
                            decades has made her more committed than ever to
                            focusing on diversity when creating customer
                            experiences. This currently includes working on the
                            redesign of the bank’s mobile app to meet the needs
                            of modern consumers. An avid traveler, Janet seeks
                            to create meaningful experiences—not just collect
                            souvenirs. Her design leadership is inspired by that
                            same philosophy.
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
                        data.janet &&
                        data.janet.childImageSharp &&
                        data.janet.childImageSharp.fluid
                      }
                      alt={'Janet Covey'}
                    />
                    <div
                      style={{
                        marginLeft: '1em',
                        height: '100%',
                        alignSelf: 'center'
                      }}
                    >
                      Janet Covey
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <h2>Sponsors</h2>

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
};

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
    ian: file(relativePath: { eq: "hackathons/judges/ian.jpg" }) {
      ...fluidImageHero
    }
    janet: file(relativePath: { eq: "hackathons/judges/janet.png" }) {
      ...fluidImageHero
    }
    ipad: file(relativePath: { eq: "hackathons/ipad.jpg" }) {
      ...fluidImageHero
    }
    drone: file(relativePath: { eq: "hackathons/drone.jpg" }) {
      ...fluidImageHero
    }
    oculus: file(relativePath: { eq: "hackathons/oculus.jpg" }) {
      ...fluidImageHero
    }
  }
`;
