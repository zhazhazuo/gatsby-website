import React from "react"
import { GlobalProvider } from "@/context"
import Layout from "@/components/Layout"
import "@/style/global.scss"

const wrapPageElement = ({ element, props }) => {
  return (
    <Layout hiddenFooter={props.path.includes("solution")}>{element}</Layout>
  )
}

const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
)

export { wrapPageElement, wrapRootElement }
