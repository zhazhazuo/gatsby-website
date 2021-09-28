import React, { FC } from "react"
import Hero from "@/sections/HomePage/Hero"
import HowItWorks from "@/sections/HomePage/HowItWorks"
import VideLink from "@/sections/HomePage/VideoLink"
import ValueContent from "@/sections/HomePage/ValueContent"
import ObjectContent from "@/sections/HomePage/ObjectContent"
import AboutUsContent from "@/sections/HomePage/AboutUsContent"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const HomePage: FC<Props> = (props) => {
  return (
    <div className='home-page'>
      <Hero />
      <HowItWorks />
      <VideLink />
      <ValueContent />
      <ObjectContent />
      <AboutUsContent />
    </div>
  )
}

HomePage.defaultProps = defaultProps

export default HomePage
