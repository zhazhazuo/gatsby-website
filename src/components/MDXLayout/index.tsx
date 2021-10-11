import React, { FC } from "react"
import { graphql } from "gatsby"
import { useGetWindowHeight } from "@/common/hooks"
import CustomTag from "../CustomTag"
import BusinessCard from "../BusinessCard"
import MDXContainer from "../MDXContainer"
import "./index.scss"

interface IGraphData {
  mdx: {
    body: React.ReactNode & string
    frontmatter: {
      title: string
      tag: string[]
    }
  }
}

interface IProps {
  data: IGraphData
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const MDXLayout: FC<Props> = (props) => {
  const { data } = props
  const {
    mdx: {
      body,
      frontmatter: { title, tag },
    },
  } = data
  const { height } = useGetWindowHeight()
  return (
    <div
      className='MDX-layout'
      style={{
        minHeight: height,
      }}
    >
      <div className='MDX-layout__side'>
        <div className='MDX-layout__card'>
          <BusinessCard />
        </div>
      </div>
      <div className='MDX-layout__content'>
        <p className='MDX-layout__title'>{title}</p>
        {!!tag.length && (
          <div className='MDX-layout__tag'>
            {tag.map((item, index) => (
              <CustomTag key={index}>{item}</CustomTag>
            ))}
          </div>
        )}

        <p className='MDX-layout__label'></p>
        <div className='MDX-layout__body'>
          <MDXContainer>{body}</MDXContainer>
        </div>
      </div>
    </div>
  )
}

MDXLayout.defaultProps = defaultProps

export default MDXLayout

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tag
      }
      body
      fields {
        slug
      }
    }
  }
`
