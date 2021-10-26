import React, { FC, useState } from "react"
import Hero from "@/sections/HomePage/Hero"
import HowItWorks from "@/sections/HomePage/HowItWorks"
import ValueContent from "@/sections/HomePage/ValueContent"
import ObjectContent from "@/sections/HomePage/ObjectContent"
import AboutUsContent from "@/sections/HomePage/AboutUsContent"
import VideoPlayer from "@/components/VideoPlayer"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const HomePage: FC<Props> = (props) => {
  const [isShowVideo, setIsShowVideo] = useState(false)

  return (
    <div className='home-page'>
      <Hero />
      <HowItWorks onShowChange={setIsShowVideo} />
      <ValueContent />
      <ObjectContent />
      <AboutUsContent />
      <VideoPlayer isShowVideo={isShowVideo} onShowChange={setIsShowVideo} />
    </div>
  )
}

HomePage.defaultProps = defaultProps

export default HomePage
