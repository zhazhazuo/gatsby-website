/* eslint-disable node/no-path-concat */
const path = require("path")

const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
)

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ganlin",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "./src/style/index.scss";`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@/src": "src",
          "@/components": "src/components",
          "@/common": "src/common",
          "@/pages": "src/pages",
          "@/sections": "src/sections",
          "@/context": "src/context",
          "@/assets": "src/assets",
          "@/style": "src/style",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "case",
        path: `${__dirname}/src/case`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
    },
  ],
}
