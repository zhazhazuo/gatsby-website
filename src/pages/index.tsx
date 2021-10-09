import React, { FC } from "react"
// import Hero from "@/sections/HomePage/Hero"
import Hero from "@/sections/HomePage/Hero2"
// import HowItWorks from "@/sections/HomePage/HowItWorks"
import HowItWorks from "@/sections/HomePage/HowItWorks2"
import VideLink from "@/sections/HomePage/VideoLink"
import ValueContent from "@/sections/HomePage/ValueContent2"
import ObjectContent from "@/sections/HomePage/ObjectContent"
// import AboutUsContent from "@/sections/HomePage/AboutUsContent"
import AboutUsContent from "@/sections/HomePage/AboutUsContent2"
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
      {/* <VideLink /> */}
      <ValueContent />
      <ObjectContent />
      <AboutUsContent />
    </div>
  )
}

HomePage.defaultProps = defaultProps

export default HomePage
