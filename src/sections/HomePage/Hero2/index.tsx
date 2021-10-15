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
    <div className='hero__wrapper'>
      <div
        className='hero grid'
        style={{
          height,
        }}
      >
        <div className='hero__text' data-aos='zoom-in' data-aos-duration='600'>
          <div className='hero__title'>让社区生活更美好</div>
          <div className='hero__description'>
            为中小型物业企业和社区居民，提供极致的产品和服务
          </div>
          <div className='hero__button'>
            <CustomButton size='large' type='primary' elevationLevel={4}>
              立即尝试
            </CustomButton>
          </div>
        </div>

        <div className='hero__show'>
          <div className='hero__show__content'>
            <div
              className='hero__show__production'
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='600'
            >
              <div className='hero__show__website' />
            </div>
            <div
              className='hero__show__background-left'
              data-aos='fade-right'
              data-aos-duration='600'
              data-aos-delay='600'
            />
            <div
              className='hero__show__background-right'
              data-aos='fade-left'
              data-aos-duration='600'
              data-aos-delay='600'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = defaultProps

export default Hero
