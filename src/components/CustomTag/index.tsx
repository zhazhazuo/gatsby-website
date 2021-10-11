import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {
  type: "",
  color: "",
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const CustomTag: FC<Props> = (props) => {
  const { children } = props
  return <div className='custom-tag'>{children}</div>
}

CustomTag.defaultProps = defaultProps

export default CustomTag
