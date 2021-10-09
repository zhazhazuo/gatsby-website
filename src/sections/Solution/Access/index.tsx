import React, { FC } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Access: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()

  return (
    <div
      className='access gird'
      style={{
        height,
      }}
    ></div>
  )
}

Access.defaultProps = defaultProps

export default Access
