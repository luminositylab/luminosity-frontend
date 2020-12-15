import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Banner from '../components/Banner';


const About = ({ data }) => (
  <Layout>
    <SEO
      title="Partnerships"
      description="Luminosity's Corporate and Organizational Partners."
      // location={location}
    />

    <Banner
      title={'Partnerships'}
      vantaNet={true}
    />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h3>Corprate & Organizational Partnerships</h3>

          <p>
            The Luminosity Lab conducts sponsored research and development for companies and organizations throughout the world. We leverage teams of interdisciplinary students to rapidly design, develop, and deploy innovative solutions for our partners. This work often entails emergining technologies, software development, analytics, research, and rapid-prototyping. By leveraging top-student talent, we are able to achieve outstanding results for our partners at a cost-effective price point. To partner with our lab, please contact us at luminosity@asu.edu.  
          </p>

          <h3>Our Existing & Historical Partnerships</h3>
          <ul>
            <li>Starbucks Corporation</li>
            <li>Workiva</li>
            <li>Phoenix Children's Hospital</li>
            <li>Tempronics</li>
            <li>Fox Corporation</li>
            <li>Bank of the West</li>
            <li>Greater Phoenix Economic Council</li>
            <li>Emes Project LLC</li>
            <li>Verde Solutions</li>
            <li>PepsiCo</li>
            <li>NASA</li>
            <li>ASU SolarSpell</li>
            <li>Luke Air Force Base</li>
            <li>Lane College</li>
            <li>USAID</li>
            <li>VacMobile</li>
            <li>Flinn Foundation</li>
            <li>The McCain Institute</li>
            <li>NSIN Defense Innovation Accelerator</li>
            <li>Society of St. Vincent DePaul</li>
            <li>Chemonics International, Inc.</li>
            <li>Flagstaff Medical Center</li>
            <li>Xylem Inc.</li>
            <li>Hewlett Packard Enterprise</li>
            <li>Girl Scouts of the United States of America</li>
            <li>Bulthaup AZ</li>
            <li>Resonea</li>
            <li>Maricopa Association of Governments</li>
            <li>Dash</li>
            <li>ASU Digital Prep</li>
            <li>Honeywell</li>
            <li>The Arizona Science Center</li>
            <li>Pat Tillman Center</li>
            <li>Adidas</li>
            



          </ul>


        </div>
      </section>
    </div>
  </Layout>
);

export default About;


export const query = graphql`
  query {
    heroImageIntro: file(relativePath: { eq: "computer-with-cables.jpg" }) {
      ...fluidImageHero
    }
  }
`;
