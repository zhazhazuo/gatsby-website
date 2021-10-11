import React, { FC } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Text from "./Text"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const MDXContainer: FC<Props> = (props) => {
  const { children } = props
  return (
    <MDXProvider
      components={{
        p: Text,
      }}
    >
      <MDXRenderer>{children as React.ReactNode & string}</MDXRenderer>
    </MDXProvider>
  )
}

MDXContainer.defaultProps = defaultProps

export default MDXContainer
