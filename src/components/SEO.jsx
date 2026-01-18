import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component
 * 
 * A reusable component to manage the document head for SEO.
 * 
 * @param {string} title - The title of the page.
 * @param {string} description - The description of the page for search engines.
 * @param {string} [type='website'] - The Open Graph type (e.g., 'website', 'article').
 * @param {string} [name='Korea Connect'] - The site name.
 */
function SEO({ title, description, type = 'website', name = 'Korea Connect' }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title} | {name}</title>
      <meta name='description' content={description} />
      
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
}

export default SEO;
