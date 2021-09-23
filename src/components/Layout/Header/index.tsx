import React, { FC, useState } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import cls from "classnames"
import { map } from "ramda"
import TextLink, { Props as TextLinkProps } from "../../TextLink"
import HeaderMenu from "./HeaderMenu"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const barList: TextLinkProps[] = [
  {
    content: "产品方案",
  },
  {
    content: "服务支持",
  },
  {
    content: "客户案例",
  },
  {
    content: "关于甘邻",
  },
]

enum MenuShowStatusEnum {
  normal = "normal",
  visible = "visible",
  hidden = "hidden",
}

const Header: FC<Props> = (props) => {
  const [menuShowStatus, setMenuShowStatus] = useState(
    MenuShowStatusEnum.normal
  )
  const [isShowElevation, setIsShowElevation] = useState(false)

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setIsShowElevation(true)
    } else {
      setIsShowElevation(false)
    }
  })

  const ClassName = cls("header__wrapper", {
    "header__wrapper--show-elevation": isShowElevation,
    "header__wrapper--with-menu": menuShowStatus === MenuShowStatusEnum.visible,
  })
  const MenuClassName = cls("header__menu", {
    "header__menu--visible": menuShowStatus === MenuShowStatusEnum.visible,
    "header__menu--hidden": menuShowStatus === MenuShowStatusEnum.hidden,
  })
  const HamburgerClassName = cls("header__hamburger__content", {
    "header__hamburger__content--active":
      menuShowStatus === MenuShowStatusEnum.visible,
  })

  const onMenuIconClickHandle = () => {
    if (menuShowStatus === MenuShowStatusEnum.visible) {
      setMenuShowStatus(MenuShowStatusEnum.hidden)
    } else {
      setMenuShowStatus(MenuShowStatusEnum.visible)
    }
  }

  return (
    <header className={ClassName}>
      <div className='header gird'>
        <div className='header__logo'>
          <div className='header__logo__img' />
        </div>
        <div className='header__bar'>
          {map(
            (item: TextLinkProps) => (
              <TextLink key={item.content} {...item} />
            ),
            barList
          )}
        </div>
        <div className='header__controller'>
          <button className='header__controller__try-button'>
            <span>开始体验</span>
            <i className='ri-rocket-2-line header__controller__icon'></i>
          </button>
        </div>
        <div className='header__hamburger'>
          <div className={HamburgerClassName} onClick={onMenuIconClickHandle}>
            <i className='ri-menu-line'></i>
          </div>
        </div>
      </div>
      <div
        className={MenuClassName}
        style={{
          height: `calc(100vh - 70px)`,
        }}
      >
        <HeaderMenu />
      </div>
    </header>
  )
}

Header.defaultProps = defaultProps

export default Header
