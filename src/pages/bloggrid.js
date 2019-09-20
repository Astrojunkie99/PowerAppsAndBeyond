import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout";
import Img from "gatsby-image";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
  allMarkdownRemark(limit: 10) {
    edges {
      node {
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          author
          featuredImage {
            childImageSharp {
              fluid(fit: CONTAIN) {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationHeight
                presentationWidth
              }
            }
          }
          description
          tags
          title
        }
        excerpt
        html
      }
    }
  }
}
    `);
    return (
        <Layout>
            <h1>Blog Page</h1>
            {data.allMarkdownRemark.edges.map((edge)=>{
                return (
                    <div className="card banner">
                        <h3>{edge.node.frontmatter.title}</h3>
                        <Img fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}></Img>
                    </div>
                )
            })}
        </Layout>
    )
}

export default BlogPage
