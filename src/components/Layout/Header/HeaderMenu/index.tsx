import CustomButton from "@/components/CustomButton"
import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const HeaderMenu: FC<Props> = (props) => {
  return (
    <div className='header-menu'>
      <div className='header-menu__content'></div>
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
