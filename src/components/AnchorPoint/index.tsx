import React, { FC } from "react"
import "./index.scss"

interface IProps {
  pointId: string
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const AnchorPoint: FC<Props> = (props) => {
  const { pointId } = props
  return <a className='anchor-point' id={pointId} />
}

AnchorPoint.defaultProps = defaultProps

export default AnchorPoint
