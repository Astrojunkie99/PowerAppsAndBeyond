import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from "gatsby-image";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
  allMarkdownRemark(limit: 1, sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          author
          slug
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
        <div>
            {data.allMarkdownRemark.edges.map((edge)=>{
                return (
                  <Link style={{textDecoration:"none"}}  activeStyle={{textDecoration:"none"}} to={`/posts/${edge.node.fields.slug}`}>
                    <div className="card banner">
                        <h2 className="title">{edge.node.frontmatter.title}</h2>
                        <h3 className="center" >By: {edge.node.frontmatter.author} - {edge.node.frontmatter.date}</h3>
                        <Img style={{"display":"block", "marginLeft":"auto", "marginRight":"auto","maxWidth":"800px"}} fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} ></Img>
                        <p className="excerpt">{edge.node.excerpt}</p>
                    </div>
                  </Link>
                )
            })}
        </div>
    )
}

export default BlogPage