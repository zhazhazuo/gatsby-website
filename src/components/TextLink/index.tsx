import React, { FC } from "react"
import cls from "classnames"
import { createPropsGetter } from "@/common/utils"
import "./index.scss"

interface IProps {
  id: string
  content: string
}

const defaultProps = {
  isMobile: false,
  isDrawer: true,
  isOpenBlank: false,
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
    onMouseEnter,
    onMouseLeave,
    onClick,
  } = getProps(props)

  const ClassName = cls("text-link", {
    "text-link--mobile": isMobile,
  })

  const IconClassName = cls("text-link__icon", {
    "ri-arrow-right-line": !isDrawer && !isOpenBlank,
    "ri-arrow-right-up-line": isDrawer && isOpenBlank,
    "ri-arrow-down-s-line": isDrawer,
  })

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
      onClick={onClick}
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
