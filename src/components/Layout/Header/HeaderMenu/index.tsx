import CustomButton from "@/components/CustomButton"
import TextLink from "@/components/TextLink"
import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const HeaderMenu: FC<Props> = (props) => {
  return (
    <div className='header-menu'>
      <div className='header-menu__content'>
        <div className='header-menu__item'>
          <TextLink id='123' content='产品方案' isMobile />
        </div>
        <div className='header-menu__item'>
          <TextLink id='12' content='解决方案' isMobile />
        </div>
        <div className='header-menu__item'>
          <TextLink id='12' content='服务支持' isMobile />
        </div>
        <div className='header-menu__item'>
          <TextLink id='13' content='客户案例' isMobile isDrawer={false} />
        </div>
        <div className='header-menu__item'>
          <TextLink id='23' content='关于甘邻' isMobile />
        </div>
      </div>
      <div className='header-menu__bottom'>
        {/* <CustomButton size='large' type='secondary'>
          立即体验
        </CustomButton> */}
      </div>
    </div>
  )
}

HeaderMenu.defaultProps = defaultProps

export default HeaderMenu
