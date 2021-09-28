import React, { FC } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const AboutUsContent: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()

  return (
    <section
      className='about-us-content__wrapper'
      style={{
        height: height,
      }}
    >
      <div className='about-us-content gird'>
        <div className='about-us-content__text'>
          <div className='about-us-content__title' data-aos='fade-in'>
            关于甘邻
          </div>
          <div
            className='about-us-content__label'
            data-aos='fade-in'
            data-aos-delay='200'
          >
            是一家致力于社区物业数字化，和在线生活服务的创新型企业。
          </div>
        </div>
        <div className='about-us-content__content'>
          <div className='about-us-content__description'>
            <div
              className='about-us-content__description__background'
              data-aos='fade-right'
              data-aos-delay='500'
            ></div>
            <div
              className='about-us-content__description__title__wrapper'
              data-aos='fade-right'
            >
              <p className='about-us-content__description__text'>
                我们为中小型物业公司提供终身免费的数字物业平台、居民APP，和极低成本的智能硬件。通过软件、硬件、互联网的完美融合。为物业客户增加多种经营收入，提高经营水平，提升居民服务体验。让社区生活更美好。
              </p>

              <p className='about-us-content__description__text'>
                团队成员主要来自于小米、金山、腾讯等国内知名科技公司，核心团队由前小米、金山高管组成。
                在企业软件设计、数字化转型
                、电商、供应链、智能硬件、协同办公等领域，有十年以上的经验。
              </p>
            </div>
          </div>
          <div className='about-us-content__img'>
            <div className='about-us-content__img__background'></div>
            <div
              className='about-us-content__img__content'
              data-aos='fade-left'
              data-aos-delay='300'
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutUsContent.defaultProps = defaultProps

export default AboutUsContent
