import React, { FC } from "react"
import AnchorPoint from "@/components/AnchorPoint"
import { useGetWindowHeight } from "@/common/hooks"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Hardware: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()
  return (
    <section
      className='hardware grid'
      style={{
        height: height * 0.8,
      }}
    >
      <AnchorPoint pointId='hardware' />
      <p className='hardware__title'>二维码门禁机</p>
      <div className='hardware__img' />
    </section>
  )
}

Hardware.defaultProps = defaultProps

export default Hardware
