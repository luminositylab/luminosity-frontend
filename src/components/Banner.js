import React from 'react';
import Img from 'gatsby-image';

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    if (window && window.VANTA && window.VANTA.NET) {
      this.effect = window.VANTA.NET({
        el: this.vantaRef.current,
        color: 0xffffff,
        backgroundColor: 0x000000,
        points: 10,
        maxDistance: 20
      });
    }
  }
  componentWillUnmount() {
    if (this.effect) this.effect.destroy();
  }

  render() {
    return (
      <section id="banner" className={this.props.title ? 'minor' : 'major fit'}>
        {this.props.video && (
          <video
            className="video"
            src={this.props.video}
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', ...this.props.videoStyle }}
          />
        )}
        {this.props.image && (
          <Img
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            className="video"
            fluid={this.props.image}
            alt={this.props.title}
          />
        )}
        {this.props.vantaNet && (
          <div
            style={{ position: 'absolute', height: '922px', width: '100%' }}
            ref={this.vantaRef}
          ></div>
        )}
        <div className="inner">
          {this.props.title && (
            <header className="major">
              <h1 style={this.props.image && { textAlign: 'right' }}>
                {this.props.title}
              </h1>
            </header>
          )}
          <p style={this.props.image && { float: 'right' }}>
            {this.props.description}
          </p>
        </div>
      </section>
    );
  }
}
export default Banner;
