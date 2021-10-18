import React, { FC } from "react"
import MenuItem, { Props as MenuItemProps } from "../MenuItem"
import CustomButton from "@/components/CustomButton"
import "./index.scss"

interface IProps {
  menuList: MenuItemProps[]
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const HeaderMenu: FC<Props> = (props) => {
  const { menuList } = props
  return (
    <div className='header-menu'>
      <div className='header-menu__content'>
        {menuList.map((menuItem) => (
          <MenuItem {...menuItem} key={menuItem.textInfo.id} />
        ))}
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
