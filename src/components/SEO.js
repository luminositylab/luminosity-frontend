import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/website';

const SEO = ({ title, description, location }) => {
  const pageTitle = `${title} | ${config.siteTitle}`;
  const pageDescription = description || config.siteDescription;
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
  const image = config.siteUrl + realPrefix + config.siteLogo;
  const url = config.siteUrl + config.pathPrefix;

  const fullURL =
    location && `${config.siteUrl}${realPrefix}${location.pathname}`;
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: url,
      name: pageTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : ''
    }
  ];
  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      <meta property="og:title" content={pageTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      {fullURL && <meta property="og:url" content={fullURL} />}
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.siteTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta
        property="fb:app_id"
        content={config.siteFBAppID ? config.siteFBAppID : ''}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />

      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="image" content={image} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color={config.themeColor}
      />
      <meta name="apple-mobile-web-app-title" content="Luminosity Lab" />
      <meta name="application-name" content="Luminosity Lab" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="theme-color" content={config.backgroundColor} />
    </Helmet>
  );
};

export default SEO;
