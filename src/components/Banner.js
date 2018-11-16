import React from 'react';

const Banner = props => (
  <section id="banner" className={props.title ? 'minor' : 'major'}>
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
