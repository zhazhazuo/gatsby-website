import React, { FC } from "react"
import App from "@/sections/Production/App"
import ManagementSystem from "@/sections/Production/ManagementSystem"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Production: FC<Props> = (props) => {
  return (
    <div className='production'>
      <App />
      <ManagementSystem />
    </div>
  )
}

Production.defaultProps = defaultProps

export default Production
