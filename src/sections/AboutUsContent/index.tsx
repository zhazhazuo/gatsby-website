import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const AboutUsContent: FC<Props> = (props) => {
  return (
    <div className='about-us-content__wrapper'>
      <div className='about-us-content gird'>
        <div className='about-us-content__text'>
          <div className='about-us-content__title' data-aos='fade-in'>
            关于我们
          </div>
          <div
            className='about-us-content__label'
            data-aos='fade-in'
            data-aos-delay='200'
          >
            与物业企业共建和谐、智能、数字化社区。为社区内每一位住户提供安心、放心、称心的服务。
          </div>
        </div>
        <div className='about-us-content__content'>
          <div className='about-us-content__description'>
            <div
              className='about-us-content__description__background'
              data-aos='fade-in'
              data-aos-delay='500'
            ></div>
            <span
              className='about-us-content__description__title'
              data-aos='fade-right'
            >
              甘邻科技
            </span>
            <span
              className='about-us-content__description__text'
              data-aos='fade-right'
              data-aos-delay='300'
            >
              是一家致力于社区物业数字化，和在线生活服务的创新型企业。
              我们为中小型物业公司提供终身免费的数字物业平台、居民APP，和极低成本的智能硬件。通过软件、硬件、互联网的完美融合，为物业客户增加多种经营收入，提高经营水平，提升居民服务体验。让社区生活更美好
            </span>
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
    </div>
  )
}

AboutUsContent.defaultProps = defaultProps

export default AboutUsContent
