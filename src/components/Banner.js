import React from 'react';
import Img from 'gatsby-image';

const Banner = ({ title, video, videoStyle, image, description }) => (
  <section id="banner" className={title ? 'minor' : 'major'}>
    {video && (
      <video
        className="video"
        src={video}
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', height: '100%', ...videoStyle }}
      />
    )}
    {image && (
      <Img
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        className="video"
        fluid={image}
        alt={title}
      />
    )}
    <div className="inner">
      {title && (
        <header className="major">
          <h1>{title}</h1>
        </header>
      )}
      <p>{description}</p>
    </div>
  </section>
);

export default Banner;
