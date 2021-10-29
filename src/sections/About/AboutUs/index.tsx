import React, { FC } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import { getGlobalData } from "@/common/global"
import WuhanImg from "@/assets/section/About/place-wuhan.png"
import BeijingImg from "@/assets/section/About/place-beijing.png"
import ValueItem, { Props as ValueItemProps } from "./ValueItem"
import ConnectItem from "./ConnectItem"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const valueList: ValueItemProps[] = [
  {
    title: "使命",
    description: "让社区生活更美好！",
  },
  {
    title: "愿景",
    description: "成为有口皆碑的客户成功伙伴；成为用户喜爱的生活服务平台。",
  },
  {
    title: "价值观",
    description: "坦诚务实，追求极致，积极进取，开放谦逊。",
  },
]

const AboutUs: FC<Props> = (props) => {
  const { bdMail, first, second, address } = getGlobalData("contactsInfo")
  const { height } = useGetWindowHeight()
  return (
    <div
      className='about-us'
      style={{
        minHeight: height,
      }}
    >
      <div className='about-us__banner' />
      <div className='about-us__content'>
        <div className='about-us__info'>
          {/* <div className='about-us__info-logo' /> */}
          <p className='about-us__info-title'>
            <span className='about-us__info-title--active'>甘邻</span>
            科技
          </p>
          <p className='about-us__description'>
            是一家致力于社区物业数字化，和在线生活服务的创新型企业。
          </p>
          <p className='about-us__description'>
            我们为中小型物业公司提供终身免费的数字物业平台、居民APP，和极低价格的智能硬件。通过软件、硬件、互联网的完美融合，为物业企业增加多种经营收入，挺高经营水平，提升居民服务体验。让社区生活更美好！
          </p>
        </div>
        {valueList.map((value, index) => (
          <ValueItem {...value} key={index} />
        ))}
      </div>
      <div className='about-us__join-us'>
        <div className='about-us__join-us__content'>
          <p className='about-us__join-us__title'>加入我们</p>
          <a
            className='about-us__join-us__text'
            target='view_window'
            href='https://www.zhipin.com/gongsir/f8a9e0082d2db53b1nF-3tu4EFY~.html?ka=company-jobs'
          >
            {"了解我们的职位 >>"}
          </a>
        </div>
      </div>
      <div className='about-us__connect-us'>
        <div className='about-us__connect-us__title'>联系我们</div>
        <ConnectItem
          title='商务合作·产品演示'
          backgroundImg={WuhanImg}
          infos={[
            {
              label: "联系邮箱",
              texts: [bdMail],
            },
            {
              label: "联系人",
              texts: [
                `${first.name}(${first.phoneNumber})`,
                `${second.name}(${second.phoneNumber})`,
              ],
            },
            {
              label: "联系地址",
              texts: [address.wuhan],
            },
          ]}
        />
        <ConnectItem
          title='商务合作·产品演示'
          backgroundImg={BeijingImg}
          infos={[
            {
              label: "联系邮箱",
              texts: [bdMail],
            },
            {
              label: "联系人",
              texts: [
                `${first.name}(${first.phoneNumber})`,
                `${second.name}(${second.phoneNumber})`,
              ],
            },
            {
              label: "联系地址",
              texts: [address.beijing],
            },
          ]}
        />
      </div>
    </div>
  )
}

AboutUs.defaultProps = defaultProps

export default AboutUs
