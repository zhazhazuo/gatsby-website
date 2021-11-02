import React, { FC } from "react"
import cls from "classnames"
import "./index.scss"

interface IProps {
  isShow: boolean
}

const defaultProps = {
  onMouseEnter: () => {},
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const HeaderDrawer: FC<Props> = (props) => {
  const { children, isShow, onMouseEnter } = props
  const ClassName = cls("header-drawer", {
    "header-drawer--hidden": !isShow,
    "header-drawer--visible": isShow,
  })

  return (
    <div className={ClassName} onMouseEnter={onMouseEnter}>
      {isShow && children}
    </div>
  )
}

HeaderDrawer.defaultProps = defaultProps

export default HeaderDrawer
