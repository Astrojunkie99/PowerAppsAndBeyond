import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import Img from "gatsby-image";
import styles from "../../styles/tagspage.module.scss";
import kebabCase from "lodash.kebabcase";


const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <Layout location={location}>
      <div className={styles.blogCard}>
      <h1 className={styles.Title}>{tagHeader}</h1>
      </div>
          <div className={styles.blogCard}>
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title, date, author } = node.frontmatter
              return (
                <div key={slug}>
                      <Link style={{textDecoration: 'none'}} to={`/posts/${slug}`} ><h2 className="heading">{title}</h2>
                      <p className={styles.Title}>{date} | {author}</p>
                      <Img className="imgContent" fluid={node.frontmatter.featuredImage.childImageSharp.fluid}></Img>
                      </Link>
                </div>
              )
            })}
            <div className={styles.tagSection}>
              <Link to="/tags"><button type="button" className={styles.tagButton}>All tags</button></Link>
            </div>
          </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt (pruneLength:200)
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid(sizes:"", maxWidth:200){
                      ...GatsbyImageSharpFluid
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
                      presentationWidth
                      presentationHeight
                }
              }
            }
          }
        }
      }
    }
  }
`
