import React from "react"
import { GlobalProvider } from "@/context"
import Layout from "@/components/Layout"
import "remixicon/fonts/remixicon.css"
import "@/style/global.scss"

const wrapPageElement = ({ element, props }) => {
  return <Layout>{element}</Layout>
}

const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
)

export { wrapPageElement, wrapRootElement }
