import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Menu = props => (
  <nav className="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/about/">
            About
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/projects/">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/hackathons/">
            Hackathons
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/process/">
            Our Process
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/team/">
            The Team
          </Link>
        </li>
        {/* <li>
          <Link onClick={props.onToggleMenu} to="/partners/">
            Strategic Partners
          </Link>
        </li> */}
        {/* <li>
          <Link onClick={props.onToggleMenu} to="/generic">
            Generic
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/elements">
            Elements
          </Link>
        </li> */}
      </ul>
      {/* <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit">
            Get Started
          </a>
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li>
      </ul> */}
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Menu;
