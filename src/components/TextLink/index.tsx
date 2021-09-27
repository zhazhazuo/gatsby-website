import React, { FC, useState } from "react"
import cls from "classnames"
import { createPropsGetter } from "@/common/utils"
import "./index.scss"

interface IProps {
  content: string
}

const defaultProps = {
  drawerContent: "" as React.ReactNode,
  isDrawer: true,
  isOpenBlank: false,
}

type DefaultProps = Readonly<typeof defaultProps>

export type Props = IProps & Partial<DefaultProps>

const getProps = createPropsGetter<DefaultProps>()

const TextLink: FC<Props> = (props) => {
  const { content, isOpenBlank, isDrawer, drawerContent } = getProps(props)
  const [isShowDrawer, setIsShowDrawer] = useState(false)

  const IconClassName = cls("text-link__icon", {
    "ri-arrow-right-line": !isDrawer && !isOpenBlank,
    "ri-arrow-right-up-line": isDrawer && isOpenBlank,
    "ri-arrow-down-s-line": isDrawer,
  })
  const DrawerClassName = cls("text-link__drawer", {
    "text-link__drawer--visible": isShowDrawer,
  })

  const onMouseOverHandle = () => {
    setIsShowDrawer(true)
  }

  const onMouseOutHandle = () => {
    setIsShowDrawer(false)
  }

  return (
    <div
      className='text-link'
      onMouseOver={onMouseOverHandle}
      onMouseOut={onMouseOutHandle}
    >
      <span className='text-link__text'>{content}</span>
      <i className={IconClassName}></i>
      <div className={DrawerClassName}>
        <div className='text-link__drawer__content'>{drawerContent}</div>
      </div>
    </div>
  )
}

TextLink.defaultProps = defaultProps

export default TextLink
