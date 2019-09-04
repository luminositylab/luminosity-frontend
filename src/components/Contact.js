import React from 'react';
import { HomeRounded, PhoneRounded, MailRounded } from '@material-ui/icons';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="https://twitter.com/luminositylab" className="icon alt">
                <FaTwitter />
                <span className="label">Twitter</span>
              </a>
            </li>
            {/*<li>
          <a href="#" className="icon alt fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li> */}
            <li>
              <a href="https://github.com/luminositylab" className="icon alt">
                <FaGithub />
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/the-luminosity-lab"
                className="icon alt"
              >
                <FaLinkedin />
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; {new Date().getFullYear()} The Luminosity Lab</li>
          </ul>
        </div>
      </section>
      <section className="split">
        <section>
          <a href="mailto:luminosity@asu.edu">
            <div className="contact-method">
              <span className="icon alt">
                <MailRounded />
              </span>
              luminosity@asu.edu
            </div>
          </a>
        </section>
        <section>
          <div className="contact-method">
            <a href="tel:8552785080">
              <span className="icon alt">
                <PhoneRounded />
              </span>
              (855) 278 5080
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <a href="https://goo.gl/maps/GWM6ghoZZt62">
              <span className="icon alt">
                <HomeRounded />
              </span>
              300 E University Dr
              <br />
              Tempe, AZ 85281
              <br />
              United States of America
            </a>
          </div>
        </section>
      </section>
    </div>
  </section>
);

export default Contact;
