import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Case: FC<Props> = (props) => {
  return <div className='case'></div>
}

Case.defaultProps = defaultProps

export default Case
