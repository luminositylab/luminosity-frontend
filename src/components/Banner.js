import React from 'react';
import Img from 'gatsby-image';
// import Helmet from 'react-helmet';


class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef()
  }

  componentDidMount() {
    
    this.effect = window.VANTA.NET({
      el: this.myRef.current,
      color: 0xffffff,
      backgroundColor: 0x000000,
      points: 10,
      maxDistance: 20
    })

    // this.effect = window.VANTA.DOTS({
    //   el: this.myRef.current,
    //   color: 0xffe100,
    //   color2: 0xffe20f,
    //   backgroundColor: 0x0,
    //   size: 2.60,
    //   spacing: 29.00
    // })

  }
  componentWillUnmount() {
    if (this.effect) this.effect.destroy()
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
    {this.props.gl && (
       <div style={{height:'922px'}} ref={this.myRef}>
      </div>
    )}
      {this.props.hackathons && (
       <div style={{height:'922px'}} ref={this.myRef}>
      </div>
    )}
      {this.props.projects && (
       <div style={{height:'922px'}} ref={this.myRef}>
      </div>
    )}
    {this.props.about && (
       <div style={{height:'922px'}} ref={this.myRef}>
      </div>
    )}
    {this.props.team && (
       <div style={{height:'922px'}} ref={this.myRef}>
      </div>
    )}
    {this.props.process && (
       <div style={{height:'922px'}} ref={this.myRef}>
      </div>
    )}
    <div className="inner">
      {this.props.title && (
        <header className="major">
          <h1 style={this.props.image && { textAlign: 'right' }}>{this.props.title}</h1>
        </header>
      )}
      <p style={this.props.image && { float: 'right' }}>{this.props.description}</p>
    </div>
  </section>
);
}
}
export default Banner;
