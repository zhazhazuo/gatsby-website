import React, { FC } from "react"
import cls from "classnames"
import "./index.scss"

interface IProps {
  text: string
  active: boolean
}

const defaultProps = {
  type: "primary" as "primary" | "secondary",
  icon: "" as React.ReactNode,
  onClick: () => {},
}

type DefaultProps = Readonly<typeof defaultProps>

export type Props = IProps & Partial<DefaultProps>

const TabItem: FC<Props> = (props) => {
  const { active, type, text, icon, onClick } = props

  const ClassName = cls("tab-item", {
    "tab-item--primary": type === "primary",
    "tab-item--secondary": type === "secondary",
  })

  const IndicatorClassName = cls("tab-item__indicator", {
    "tab-item__indicator--active": active,
  })

  return (
    <div className={ClassName} onClick={onClick}>
      <div className='tab-item__content'>
        <div className='tab-item__icon'>{icon}</div>
        <div className='tab-item__text'>{text}</div>
      </div>
      <div className={IndicatorClassName} />
    </div>
  )
}

TabItem.defaultProps = defaultProps

export default TabItem
