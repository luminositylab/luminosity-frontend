import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import MenuRounded from '@material-ui/icons/MenuRounded';
import logo from '../assets/images/logo-with-text.png';

const Header = props => (
  <header id="header" className="alt">
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
