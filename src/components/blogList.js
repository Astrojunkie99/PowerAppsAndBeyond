import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styles from "../styles/bloglist.module.scss";
import BgImg from "gatsby-background-image";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
      first:allMarkdownRemark(limit: 9, sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            fields{
              slug
            }
            frontmatter {
              date(formatString: "DD MMMM YYYY")
              author
              featuredImage {
                childImageSharp {
                  fixed (height:600, width:400, fit:COVER){
                    aspectRatio
                    height
                    width
                    base64
                    originalName
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                    tracedSVG
                  }
                  fluid{
                    ...GatsbyImageSharpFluid
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
        <div className={styles.gridContainer}>
          <div className={styles.blogSection}>
            {data.first.edges.map((edge)=>{
                return (
                  <BgImg fluid={edge.node.frontmatter.featuredImage.childImageSharp.fixed} className={styles.bgcard} >
                  <Link style={{textDecoration:"none"}} activeStyle={{textDecoration:"none"}}  to={`/posts/${edge.node.fields.slug}`}>
                    <div className={styles.card}>
                        <h2 className={styles.title}>{edge.node.frontmatter.title}</h2>
                     </div>
                    </Link>
                  </BgImg>
                )
            })}
        </div>
        </div>
           
    )
}

export default BlogPage