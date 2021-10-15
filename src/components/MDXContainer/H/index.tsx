import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const H: FC<Props> = (props) => {
  const { children } = props
  return <div className='h'>{children}</div>
}

H.defaultProps = defaultProps

export default H
