import React from 'react';
import { HomeRounded, PhoneRounded, MailRounded } from '@material-ui/icons';

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form method="post" action="#">
          <div className="field first">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <a href="mailto:luminosity@asu.edu">
            <div className="contact-method">
              <a>
                <span className="icon alt">
                  <MailRounded />
                </span>
                luminosity@asu.edu
              </a>
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
