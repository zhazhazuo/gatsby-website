import React, { FC, useState } from "react"
import cls from "classnames"
import "./index.scss"

interface IProps {
  text: string
  active: boolean
}

const defaultProps = {
  icon: "" as React.ReactNode,
  onClick: () => {},
}

type DefaultProps = Readonly<typeof defaultProps>

export type Props = IProps & Partial<DefaultProps>

const TabItem: FC<Props> = (props) => {
  const { active, text, icon, onClick } = props

  const IndicatorClassName = cls("tab-item__indicator", {
    "tab-item__indicator--active": active,
  })

  return (
    <div className='tab-item' onClick={onClick}>
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
