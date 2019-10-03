const path = require("path")
const _ = require("lodash")
const kebabCase = require("lodash.kebabcase")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tagTemplate = path.resolve("./src/components/templates/tags-page.js")
  const blogTemplate = path.resolve("./src/components/templates/blog-post.js")

  const res = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___tags], order: ASC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `)

  const posts = res.data.allMarkdownRemark.edges
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/posts/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
  let tags = []
  _.each(posts, edge => {
    if (_.get(edge, "node.frontmatter.tags")) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  let tagPostCounts = {}
  tags.forEach(tag => {
    tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
  })
  tags = _.uniq(tags)

  createPage({
    path: `/tags`,
    component: tagTemplate,
    context: {
      tags,
      tagPostCounts,
    },
  })

  const tagsTemplate = path.resolve("src/components/templates/tags.js")
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag)}/`,
      component: tagsTemplate,
      context: {
        tag,
      },
    })
  })
}
