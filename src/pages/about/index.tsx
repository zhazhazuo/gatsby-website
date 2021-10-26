import React, { FC } from "react"
import AboutUs from "@/sections/About/AboutUs"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const About: FC<Props> = (props) => {
  return (
    <div className='about'>
      <AboutUs />
    </div>
  )
}

About.defaultProps = defaultProps

export default About
