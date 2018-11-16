import React from 'react';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist - our apologies!</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;
