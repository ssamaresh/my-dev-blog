import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPostPage = ({ data }) => {
  const post = data.mdx;
  const image = getImage(post.frontmatter.image);
  return (
    <Layout>
      <article>
        <GatsbyImage image={image} alt={post.frontmatter.imageAlt} />
        <h1>{data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        imageAlt
      }
      body
    }
  }
`;

export default BlogPostPage;
