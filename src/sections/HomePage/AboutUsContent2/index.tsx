import React, { FC } from "react"
import CustomButton from "@/components/CustomButton"
import { useGetWindowHeight } from "@/common/hooks"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const AboutUsContent: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()
  return (
    <div
      className='about-us-content'
      style={{
        height: height * 0.6,
      }}
    >
      <p
        className='about-us-content__title'
        data-aos='fade'
        data-aos-duration='600'
      >
        <p>甘邻科技,</p>
        <p>致力于社区数字化和在线生活服务</p>
      </p>
      <p
        className='about-us-content__description'
        data-aos='fade'
        data-aos-duration='600'
      >
        <p>
          我们为中小型物业公司提供终身免费的数字物业平台、APP，和成本极低的智能硬件。通过软件、硬件、互联网的完美融合，为物业客户增加多种经营收入，提高经营水平，提升居民服务体验。
        </p>
        <p>
          成员主要来自于小米、金山、腾讯等科技公司，核心团队由前小米、金山高管组成。
          在企业软件、数字化转型
          、电商、供应链、智能硬件、协同办公等领域，有十年以上的经验。
        </p>
      </p>
      <div
        className='about-us-content__button'
        data-aos='zoom-in'
        data-aos-duration='600'
      >
        <CustomButton size='large' type='primary'>
          了解更多
        </CustomButton>
      </div>
    </div>
  )
}

AboutUsContent.defaultProps = defaultProps

export default AboutUsContent
