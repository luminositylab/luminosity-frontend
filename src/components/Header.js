import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import MenuRounded from '@material-ui/icons/MenuRounded';
import logo from '../assets/images/logo-with-text.png';

const Header = props => (
  <header id="header" className="alt">
    <Helmet defer={false}>
      <script src="https://raw.githubusercontent.com/mrdoob/three.js/dev/build/three.min.js"></script>
      <script src="https://raw.githubusercontent.com/tengbao/vanta/master/dist/vanta.net.min.js"></script>
    </Helmet>
    <Link to="/" className="logo">
      <img src={logo} height={40} alt="The Luminosity Lab logo" />
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        <MenuRounded alt="Menu" style={{ fontSize: 32 }} />
      </a>
    </nav>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Header;
