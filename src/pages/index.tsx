import React, { FC } from "react"
import Hero from "@/sections/Hero"
import HowItWorks from "@/sections/HowItWorks"
import VideLink from "@/sections/VideoLink"
import ValueContent from "@/sections/ValueContent"
import ObjectContent from "@/sections/ObjectContent"
import AboutUsContent from "@/sections/AboutUsContent"
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
