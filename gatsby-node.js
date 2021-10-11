const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)

  const MDXLayout = path.resolve("src/components/MDXLayout/index.tsx")

  result.data.allMdx.edges.forEach((item) => {
    const {
      node: {
        frontmatter: { slug },
      },
    } = item

    createPage({
      path: slug,
      component: MDXLayout,
      context: {
        slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.frontmatter.slug,
    })
  }
}
