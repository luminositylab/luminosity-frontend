import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto';
import 'typeface-carrois-gothic-sc';

import '../assets/scss/main.scss';
import Header from './Header';
import Menu from './Menu';
import Contact from './Contact';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading'
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleToggleMenu = () => {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        }`}
      >
        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu} />
          {React.Children.map(children, child =>
            React.cloneElement(child, { onToggleMenu: this.handleToggleMenu })
          )}
          <Contact />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    );
  }
}

export default Layout;
