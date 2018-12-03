import React from 'react';
import heroVideo from '../assets/videos/waves-splashing.mp4';

const Banner = props => (
  <section id="banner" className={props.title ? 'minor' : 'major'}>
    <video
      className="video"
      style={props.videoStyle}
      playsInline
      autoPlay
      muted
      loop
    >
      <source src={props.video || heroVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="inner">
      {props.title && (
        <header className="major">
          <h1>{props.title}</h1>
        </header>
      )}
      <p>{props.description}</p>
    </div>
  </section>
);

export default Banner;
