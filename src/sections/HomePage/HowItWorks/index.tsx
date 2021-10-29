import React, { FC } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import FeatureItem, {
  Props as IFeatureItemProps,
} from "@/components/FeatureItem"
import "./index.scss"
import VideoLink from "./VideoLink"

interface IProps {
  onShowChange: (value: boolean) => void
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const featureList: IFeatureItemProps[] = [
  {
    icon: "ri-macbook-line",
    title: "数字物业平台",
    text: "终身免费的现代物业数字化解决方案",
  },
  {
    icon: "ri-smartphone-line",
    title: "甘邻 APP",
    text: "社区居民线上服务平台",
  },
  {
    icon: "ri-camera-2-line",
    title: "AIOT 智能硬件",
    text: "包含极具性价比的智能门禁等产品",
  },
]

const HowItWorks: FC<Props> = (props) => {
  const { onShowChange } = props
  const { height } = useGetWindowHeight()

  return (
    <section className='how-it-works__wrapper'>
      <div
        className='how-it-works grid'
        style={{
          height,
        }}
      >
        <div className='how-it-works__description' data-aos='fade-right'>
          <div className='how-it-works__description__title'>
            <p>接近零成本</p>
            <p>
              搭建
              <span className='how-it-works__description__title--active'>
                智慧社区
              </span>
            </p>
          </div>
          <div className='how-it-works__description__feature-list'>
            {featureList.map((item, index) => (
              <FeatureItem {...item} key={index} />
            ))}
            <VideoLink onShowChange={onShowChange} />
          </div>
        </div>
        <div className='how-it-works__show' data-aos='fade-left'>
          <div className='how-it-works__show__img'></div>
        </div>
      </div>
    </section>
  )
}

HowItWorks.defaultProps = defaultProps

export default HowItWorks
