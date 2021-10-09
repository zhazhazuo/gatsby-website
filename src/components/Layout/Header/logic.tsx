import React, { useState } from "react"
import { navigate } from "gatsby-link"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import cls from "classnames"
import { Props as TextLinkProps } from "../../TextLink"
import InfoItem, { Props as InfoItemProps } from "./InfoItem"

enum BarIdEnum {
  production = "production",
  plan = "plan",
  support = "support",
  example = "example",
  aboutUs = "aboutUs",
}

export const barList: TextLinkProps[] = [
  {
    id: BarIdEnum.production,
    content: "产品方案",
  },
  {
    id: BarIdEnum.plan,
    content: "解决方案",
  },
  {
    id: BarIdEnum.support,
    content: "服务支持",
  },
  {
    id: BarIdEnum.example,
    content: "客户案例",
  },
  {
    id: BarIdEnum.aboutUs,
    content: "关于甘邻",
  },
]

const productionList: InfoItemProps[] = [
  {
    icon: "ri-home-heart-fill",
    title: "甘邻APP",
    description: "社区居民线上生活服务APP",
    onClick: () => {
      navigate("/production")
    },
  },
  {
    icon: "ri-pie-chart-2-fill",
    title: "物业数字化管理",
    description: "终身免费的现代物业数字化解决方案",
    onClick: () => {},
  },
  {
    icon: "ri-store-2-fill",
    title: "甘邻商务中心",
    description: "轻松开店，招财进宝",
    onClick: () => {},
  },
  {
    icon: "ri-device-fill",
    title: "AIOT硬件",
    description: "智能门禁等产品",
    onClick: () => {},
  },
]

enum MenuShowStatusEnum {
  normal = "normal",
  visible = "visible",
  hidden = "hidden",
}

const useHeader = () => {
  const [menuShowStatus, setMenuShowStatus] = useState(
    MenuShowStatusEnum.normal
  )
  const [isShowElevation, setIsShowElevation] = useState(false)
  const [isShowDrawer, setIsShowDrawer] = useState(false)
  const [curTabId, setCurTabId] = useState("")

  const drawerContentMap: {
    [key: string]: React.ReactNode
  } = {
    [BarIdEnum.production]: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${productionList.length}, 1fr)`,
          gridColumnGap: "2%",
        }}
      >
        {productionList.map((productionItem) => (
          <InfoItem
            key={productionItem.title}
            {...productionItem}
            onClick={() => {
              productionItem.onClick()
              setIsShowDrawer(false)
            }}
          />
        ))}
      </div>
    ),
    [BarIdEnum.example]: <div></div>,
    [BarIdEnum.aboutUs]: <div></div>,
    [BarIdEnum.support]: <div></div>,
  }

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setIsShowElevation(true)
    } else {
      setIsShowElevation(false)
    }
  })

  const ClassName = cls("header__wrapper", {
    "header__wrapper--show-elevation": isShowElevation || isShowDrawer,
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

  const onMouseEnterHandle = () => {
    setIsShowDrawer(true)
  }

  const onMouseLeaveHandle = () => {
    setIsShowDrawer(false)
  }

  const onClickLogo = () => {
    navigate("/")
    setIsShowDrawer(false)
  }

  return {
    isShowDrawer,
    ClassName,
    MenuClassName,
    HamburgerClassName,
    drawerContent: drawerContentMap[curTabId],
    setCurTabId,
    onClickLogo,
    onMouseEnterHandle,
    onMouseLeaveHandle,
    onMenuIconClickHandle,
  }
}

export default useHeader
