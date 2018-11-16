import React from 'react';

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form method="post" action="#">
          {/* <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div> */}
          <div className="field first">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          {/* <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" />
          </div> */}
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
            <span className="icon alt fa-envelope" />
            <a>luminosity@asu.edu</a>
          </div></a>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <a href="tel:8552785080">(855) 278 5080</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <a href="https://goo.gl/maps/GWM6ghoZZt62">
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
