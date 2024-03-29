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
              fluid {
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
                        <h2 className="title">{edge.node.frontmatter.title}</h2>
                        <h3 className="center" >By: {edge.node.frontmatter.author} - {edge.node.frontmatter.date}</h3>
                        <Img style={{"display":"block", "marginLeft":"auto", "marginRight":"auto","maxWidth":"800px"}} fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} ></Img>
                        <p className="excerpt">{edge.node.frontmatter.description}</p>
                        <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
                    </div>
                )
            })}
        </Layout>
    )
}

export default BlogPage
