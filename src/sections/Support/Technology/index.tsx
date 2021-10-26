import React, { FC } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import { getGlobalData } from "@/common/global"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Technology: FC<Props> = (props) => {
  const { serviceMail } = getGlobalData("contactsInfo")
  const { height } = useGetWindowHeight()
  return (
    <section
      className='technology grid'
      style={{
        minHeight: height,
      }}
    >
      <div className='technology__show' />
      <div className='technology__content'>
        <div className='technology__info-item'>
          <p className='technology__title'>7*24 小时技术支持</p>
          <p className='technology__description'>
            我们有专业的技术服务团队，为客户和用户提供 7*24 小时免费电话支持服务
          </p>
          <p className='technology__contact-information'>
            <i className='ri-phone-line technology__icon'></i>
            189 4292 9577
          </p>
        </div>
        <div className='technology__info-item'>
          <p className='technology__title'>现场施工支持</p>
          <p className='technology__description'>
            针对门禁等设备安装与检修，我们为您提供完善的技术支持与施工资源
          </p>
          <p className='technology__contact-information'>
            <i className='ri-phone-line technology__icon'></i>189 4292 9577
          </p>
          <p className='technology__contact-information'>
            <i className='ri-mail-line technology__icon'></i>
            {serviceMail}
          </p>
        </div>
      </div>
    </section>
  )
}

Technology.defaultProps = defaultProps

export default Technology
