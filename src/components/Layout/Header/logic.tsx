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
    isDrawer: false,
    onClick: () => {
      navigate("/case/hai-ke")
    },
  },
  {
    id: BarIdEnum.aboutUs,
    isDrawer: false,
    content: "关于甘邻",
  },
]

const planList: InfoItemProps[] = [
  {
    icon: "ri-home-heart-fill",
    title: "小区出行",
    description: "小区智慧通行方案",
    onClick: () => {
      navigate("/solution", {
        state: {
          index: 0,
        },
      })
    },
  },
  {
    icon: "ri-pie-chart-2-fill",
    title: "智能缴费",
    description: "智能、便捷物业缴费方案",
    onClick: () => {
      navigate("/solution", {
        state: {
          index: 1,
        },
      })
    },
  },
  {
    icon: "ri-store-2-fill",
    title: "报事报修",
    description: "在线报事报修方案",
    onClick: () => {
      navigate("/solution", {
        state: {
          index: 2,
        },
      })
    },
  },
  {
    icon: "ri-device-fill",
    title: "社区电商",
    description: "社区定制电商增值方案",
    onClick: () => {
      navigate("/solution", {
        state: {
          index: 3,
        },
      })
    },
  },
]
const productionList: InfoItemProps[] = [
  {
    icon: "ri-home-heart-fill",
    title: "甘邻APP",
    description: "社区居民线上生活服务APP",
    onClick: () => {
      navigate("/production#app")
    },
  },
  {
    icon: "ri-pie-chart-2-fill",
    title: "数字物业平台",
    description: "终身免费的现代物业数字化解决方案",
    onClick: () => {
      navigate("/production#management-system")
    },
  },
  {
    icon: "ri-store-2-fill",
    title: "甘邻商家中心",
    description: "轻松开店，招财进宝",
    onClick: () => {
      navigate("/production#shopping-system")
    },
  },
  {
    icon: "ri-device-fill",
    title: "AIOT硬件",
    description: "智能门禁等产品",
    onClick: () => {
      navigate("/production#hardware")
    },
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
    [BarIdEnum.plan]: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${productionList.length}, 1fr)`,
          gridColumnGap: "2%",
        }}
      >
        {planList.map((productionItem) => (
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

  const onMouseEnterHandle = (tabId?: string) => {
    if (tabId === BarIdEnum.example) {
      setIsShowDrawer(false)
      return
    }
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
