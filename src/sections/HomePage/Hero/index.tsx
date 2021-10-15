import React, { FC } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import CustomButton from "@/components/CustomButton"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Hero: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()

  return (
    <section
      className='hero'
      style={{
        height: height,
      }}
    >
      <div
        className='hero__background__pop-left'
        data-aos='fade-up'
        data-aos-duration='5000'
      ></div>
      <div
        className='hero__background__pop-right'
        data-aos='fade-up'
        data-aos-duration='2000'
      ></div>
      <div className='hero__background' />
      <div className='hero__content grid'>
        <div
          className='hero__description'
          data-aos='fade-right'
          data-aos-delay='500'
        >
          <div className='hero__description__tag'>
            生活APP · 物业数字化 · AIOT
          </div>
          <div className='hero__description__slogan'>
            <span>让社区生活更美好</span>
          </div>
          <div className='hero__description__label'>
            为中小型物业企业和社区居民，提供极致的产品和服务
          </div>
          <CustomButton size='large' type='primary' elevationLevel={4}>
            立即尝试
          </CustomButton>
        </div>
        <div className='hero__img' data-aos='fade-left' data-aos-delay='800'>
          <div className='hero__img__content' />
        </div>
      </div>
    </section>
  )
}

Hero.defaultProps = defaultProps

export default Hero
