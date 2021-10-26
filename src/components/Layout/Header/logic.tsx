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
    content: "关于甘邻",
    isDrawer: false,
    onClick: () => {
      navigate("/about")
    },
  },
]

export const childrenListMap: {
  [key: string]: InfoItemProps[]
} = {
  [BarIdEnum.production]: [
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
      title: "二维码门禁",
      description: "更多AIOT智能硬件即将到来",
      onClick: () => {
        navigate("/production#hardware")
      },
    },
  ],
  [BarIdEnum.plan]: [
    {
      icon: "ri-home-heart-fill",
      title: "小区通行",
      description: "安全，便捷，软硬件结合",
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
      description: "智能、方便的物业费缴费方案",
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
      description: "手机报修，在线处理",
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
      description: "一键开通社区电商服务",
      onClick: () => {
        navigate("/solution", {
          state: {
            index: 3,
          },
        })
      },
    },
  ],
  [BarIdEnum.support]: [
    {
      icon: "",
      title: "下载",
      description: "甘邻产品下载",
      onClick: () => {
        navigate("/support", {
          state: {
            type: "download",
          },
        })
      },
    },
    {
      icon: "",
      title: "产品定价",
      description: "接近免费的定价策略",
      onClick: () => {
        navigate("/support", {
          state: {
            type: "price",
          },
        })
      },
    },
    {
      icon: "",
      title: "帮助手册",
      description: "学习如何使用甘邻的产品和服务",
      onClick: () => {
        navigate("https://www.baidu.com")
      },
    },
    {
      icon: "",
      title: "服务条款",
      description: "了解甘邻具体服务条款",
      onClick: () => {
        navigate("https://www.baidu.com")
      },
    },
    {
      icon: "",
      title: "技术与服务",
      description: "了解更多支持无服务",
      onClick: () => {
        navigate("/support", {
          state: {
            type: "technology",
          },
        })
      },
    },
  ],
}

enum MenuShowStatusEnum {
  normal = "normal",
  visible = "visible",
  hidden = "hidden",
}

const useHeader = () => {
  const [menuShowStatus, setMenuShowStatus] = useState(
    MenuShowStatusEnum.normal as "normal" | "visible" | "hidden"
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
          gridTemplateColumns: `repeat(${
            childrenListMap[BarIdEnum.production].length
          }, 1fr)`,
          gridColumnGap: "2%",
        }}
      >
        {childrenListMap[BarIdEnum.production].map((productionItem) => (
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
          gridTemplateColumns: `repeat(${
            childrenListMap[BarIdEnum.plan].length
          }, 1fr)`,
          gridColumnGap: "2%",
        }}
      >
        {childrenListMap[BarIdEnum.plan].map((productionItem) => (
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
    [BarIdEnum.support]: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${
            childrenListMap[BarIdEnum.support].length
          }, 1fr)`,
          gridColumnGap: "2%",
        }}
      >
        {childrenListMap[BarIdEnum.support].map((productionItem) => (
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
    if ([BarIdEnum.example, BarIdEnum.aboutUs].includes(tabId as BarIdEnum)) {
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
    setMenuShowStatus("hidden")
  }

  return {
    isShowDrawer,
    ClassName,
    MenuClassName,
    HamburgerClassName,
    drawerContent: drawerContentMap[curTabId],
    setCurTabId,
    setMenuShowStatus,
    onClickLogo,
    onMouseEnterHandle,
    onMouseLeaveHandle,
    onMenuIconClickHandle,
  }
}

export default useHeader
