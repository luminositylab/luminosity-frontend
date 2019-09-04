import React from 'react';
import heroVideo from '../assets/videos/waves-splashing.mp4';

const Banner = props => (
  <section id="banner" className={props.title ? 'minor' : 'major'}>
    <video
      className="video"
      src={props.video || heroVideo}
      preload="auto"
      autoPlay
      muted
      loop
      playsInline
      style={{ width: '100%', height: '100%', ...props.videoStyle }}
    />
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
