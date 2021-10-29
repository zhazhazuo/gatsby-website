import React, { FC } from "react"
import cls from "classnames"
import { getGlobalData } from "@/common/global"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

interface IFooterInfoProps {
  text: string
  icon: string
  href?: string
  enable?: boolean
  onClick?: () => void
}

const FooterInfo = ({
  text,
  icon,
  enable = false,
  href = "",
  onClick = () => {},
}: IFooterInfoProps) => {
  const ClassName = cls("footer-info", {
    "footer-info--enable": enable,
  })

  return (
    <a className={ClassName} onClick={onClick} href={href}>
      {/* TODO 对齐问题待解决 */}
      {/* <i className={icon} /> */}
      <p className='footer-info__text'>{text}</p>
    </a>
  )
}

const Footer: FC<Props> = (props) => {
  const { serviceMail, second } = getGlobalData("contactsInfo")

  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className='footer__top'>
          <div className='footer__top__container'>
            <p className='footer__text'>甘邻科技</p>
          </div>
          <div className='footer__top__container'>
            <FooterInfo
              enable
              text={second.phoneNumber}
              icon='ri-customer-service-2-line'
              href={`tel:${second.phoneNumber}`}
            />
            <FooterInfo
              text={serviceMail}
              icon='ri-mail-line'
              enable
              href={`mailto:${serviceMail}`}
            />
          </div>
        </div>
        <div className='footer__bottom'>
          <div className='footer__text'>
            ©2020 Ganlin.com{" "}
            <a
              href='https://beian.miit.gov.cn/#/Integrated/index'
              className='footer__domain-info'
            >
              鄂ICP备2020017105号-2
            </a>
          </div>
          <p className='footer__text'>
            * 本网站所有数据来源于客户访谈、使用情况调研等相关结果，最终解释权归
            甘邻 所有
          </p>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = defaultProps

export default Footer
