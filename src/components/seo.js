import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SITE_META_DATA_QUERY = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;

const Seo = ({title, description, meta = []}) => {
  const { site } = useStaticQuery(SITE_META_DATA_QUERY);
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      title={title}
      htmlAttributes={{
        lang: 'en',
      }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default Seo;
