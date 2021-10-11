import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Text: FC<Props> = (props) => {
  const { children } = props
  return <div className='text'>{children}</div>
}

Text.defaultProps = defaultProps

export default Text
