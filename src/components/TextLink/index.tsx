import React, { FC } from "react"
import cls from "classnames"
import { createPropsGetter } from "@golink/link-ui"
import "./index.scss"

interface IProps {
  id: string
  content: string
}

const defaultProps = {
  isMobile: false,
  isDrawer: true,
  isOpenBlank: false,
  isActive: false,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onClick: () => {},
}

type DefaultProps = Readonly<typeof defaultProps>

export type Props = IProps & Partial<DefaultProps>

const getProps = createPropsGetter<DefaultProps>()

const TextLink: FC<Props> = (props) => {
  const {
    content,
    isOpenBlank,
    isDrawer,
    isMobile,
    isActive,
    onMouseEnter,
    onMouseLeave,
    onClick,
  } = getProps(props)

  const ClassName = cls("text-link", {
    "text-link--mobile": isMobile,
    "text-link--active": isActive,
  })

  const IconClassName = cls("text-link__icon", {
    // "ri-arrow-right-s-line": !isDrawer && !isOpenBlank,
    // "ri-arrow-right-up-line": isDrawer && isOpenBlank,
    "ri-arrow-down-s-line": isDrawer,
  })

  const clickHandle = () => {
    onClick()
  }

  const onMouseEnterHandle = () => {
    if (isMobile) return
    onMouseEnter()
  }

  const onMouseLeaveHandle = () => {
    if (isMobile) return
    onMouseLeave()
  }

  return (
    <div
      className={ClassName}
      onClick={clickHandle}
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseLeaveHandle}
    >
      <span className='text-link__text'>{content}</span>
      <i className={IconClassName}></i>
    </div>
  )
}

TextLink.defaultProps = defaultProps

export default TextLink
