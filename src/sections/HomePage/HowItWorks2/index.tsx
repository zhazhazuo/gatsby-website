import React, { FC } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import ShowImg from "@/assets/how-it-work-show.png"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

interface IFeatureItemProps {
  icon: string
  title: string
  text: string
}

const FeatureItem: FC<IFeatureItemProps> = ({ icon, title, text }) => {
  return (
    <div className='feature-item'>
      <div className='feature-item__img'>
        <i className={icon}></i>
      </div>
      <div className='feature-item__description'>
        <p className='feature-item__title'>{title}</p>
        <p className='feature-item__text'>{text}</p>
      </div>
    </div>
  )
}

const featureList: IFeatureItemProps[] = [
  {
    icon: "ri-macbook-line",
    title: "物业数字化管理平台",
    text: "终身免费的现代物业数字化解决方案",
  },
  {
    icon: "ri-smartphone-line",
    title: "甘邻APP",
    text: "社区居民线上服务平台",
  },
  {
    icon: "ri-camera-2-line",
    title: "AIOT智能硬件",
    text: "包含极具性价比的智能门禁等产品",
  },
]

const HowItWorks: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()

  return (
    <section
      className='how-it-works gird'
      style={{
        height: height * 0.9,
      }}
    >
      <div className='how-it-works__description' data-aos='fade-right'>
        <div className='how-it-works__description__title'>
          <p>接近零成本</p>
          <p>搭建智慧社区</p>
        </div>
        <div className='how-it-works__description__feature-list'>
          {featureList.map((item, index) => (
            <FeatureItem {...item} key={index} />
          ))}
        </div>
      </div>
      <div className='how-it-works__show' data-aos='fade-left'>
        <div className='how-it-works__show__img'>
          <div className='how-it-works__show__background-left how-it-works__show__background'></div>
          <div className='how-it-works__show__background-right how-it-works__show__background'></div>
        </div>
      </div>
    </section>
  )
}

HowItWorks.defaultProps = defaultProps

export default HowItWorks
