import React from "react"
import Layout from "../layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styles from "../../styles/blogPost.module.scss"
import kebabCase from "lodash.kebabcase"
import SEO from "../seo"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        author
        date(formatString: "DD MMMM YYYY")
        description
        draft
        slug
        tags
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              aspectRatio
              base64
              sizes
              presentationHeight
              originalName
              originalImg
              presentationWidth
              src
              srcSet
              srcSetWebp
              srcWebp
              tracedSVG
            }
          }
        }
      }
      html
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <SEO
        title={props.data.markdownRemark.frontmatter.title}
        description={props.data.markdownRemark.frontmatter.description}
      />
      <Img
        fluid={
          props.data.markdownRemark.frontmatter.featuredImage.childImageSharp
            .fluid
        }
      ></Img>
      <div className={styles.blogCard}>
        <h1 className={styles.Title}>
          {props.data.markdownRemark.frontmatter.title}
        </h1>
        <h3 className={styles.Title}>
          {props.data.markdownRemark.frontmatter.author} |{" "}
          <span className={styles.date}>
            {props.data.markdownRemark.frontmatter.date}
          </span>
        </h3>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
        <div>
          {props.data.markdownRemark.frontmatter.tags.map(tag => {
            return (
              <Link to={`/tags/${kebabCase(tag)}/`}>
                <button key={tag} className="primaryButton">
                  {tag}
                </button>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
