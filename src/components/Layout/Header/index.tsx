import React, { FC } from "react"
import { map, compose } from "ramda"
import { navigateHandle } from "@/common/utils"
import TextLink, { Props as TextLinkProps } from "../../TextLink"
import HeaderMenu from "./HeaderMenu"
import HeaderDrawer from "./HeaderDrawer"
import useHeader, { barList, childrenListMap } from "./logic"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Header: FC<Props> = (props) => {
  const {
    isShowDrawer,
    ClassName,
    MenuClassName,
    HamburgerClassName,
    drawerContent,
    setCurTabId,
    setMenuShowStatus,
    onClickLogo,
    onMouseEnterHandle,
    onMouseLeaveHandle,
    onMenuIconClickHandle,
  } = useHeader()

  return (
    <header className={ClassName} onMouseLeave={onMouseLeaveHandle}>
      <div className='header grid'>
        <div className='header__logo'>
          <div className='header__logo__img' onClick={onClickLogo} />
        </div>
        <div
          className='header__bar'
          style={{
            gridTemplateColumns: `repeat(${barList.length}, 1fr)`,
          }}
        >
          {map(
            (item: TextLinkProps) => (
              <TextLink
                key={item.content}
                {...item}
                onMouseEnter={compose(onMouseEnterHandle, () => {
                  setCurTabId(item.id)
                  return item.id
                })}
              />
            ),
            barList
          )}
        </div>
        <div className='header__controller'>
          <button
            className='header__controller__try-button'
            onClick={navigateHandle("productionCenter")}
          >
            <span>开始体验</span>

            <i className='header__controller__icon'></i>
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
        <HeaderMenu
          menuList={barList.map((item) => ({
            textInfo: item,
            childrenList: childrenListMap[item.id],
            onChangeMenuShow: setMenuShowStatus,
          }))}
        />
      </div>
      <HeaderDrawer
        isShow={isShowDrawer}
        onMouseEnter={() => onMouseEnterHandle()}
      >
        {drawerContent}
      </HeaderDrawer>
    </header>
  )
}

Header.defaultProps = defaultProps

export default Header
