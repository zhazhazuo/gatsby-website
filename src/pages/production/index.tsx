import React, { FC } from "react"
import App from "@/sections/Production/App"
import ManagementSystem from "@/sections/Production/ManagementSystem"
import ShoppingSystem from "@/sections/Production/ShoppingSystem"
import Hardware from "@/sections/Production/Hardware"
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
      <ShoppingSystem />
      <Hardware />
    </div>
  )
}

Production.defaultProps = defaultProps

export default Production
