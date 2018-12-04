import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = props => (
  <footer id="footer">
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
  </footer>
);

export default Footer;
