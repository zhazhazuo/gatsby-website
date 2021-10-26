import React, { FC } from "react"
import { createPropsGetter } from "@golink/link-ui"
import Download from "@/sections/Support/Download"
import Price from "@/sections/Support/Price"
import Technology from "@/sections/Support/Technology"
import "./index.scss"

interface IProps {}

const defaultProps = {
  location: {
    state: {
      type: "download" as "download" | "price" | "technology",
    },
  },
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const getProps = createPropsGetter<DefaultProps>()

const routeSectionMap = {
  download: <Download />,
  price: <Price />,
  technology: <Technology />,
}

const Support: FC<Props> = (props) => {
  const {
    location: { state },
  } = getProps(props)

  const type = state?.type || "download"

  return <div className='support'>{routeSectionMap[type]}</div>
}

Support.defaultProps = defaultProps

export default Support
