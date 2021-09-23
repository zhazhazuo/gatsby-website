import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Footer: FC<Props> = (props) => {
  return <div className='footer'></div>
}

Footer.defaultProps = defaultProps

export default Footer
