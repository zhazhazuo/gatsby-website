import React, { FC } from "react"
import cls from "classnames"
import { createPropsGetter } from "@/common/utils"
import "./index.scss"

interface IProps {
  content: string
}

const defaultProps = {
  isDrawer: true,
  isOpenBlank: false,
}

type DefaultProps = Readonly<typeof defaultProps>

export type Props = IProps & Partial<DefaultProps>

const getProps = createPropsGetter<DefaultProps>()

const TextLink: FC<Props> = (props) => {
  const { content, isOpenBlank, isDrawer } = getProps(props)

  const IconClassName = cls("text-link__icon", {
    "ri-arrow-right-line": !isDrawer && !isOpenBlank,
    "ri-arrow-right-up-line": isDrawer && isOpenBlank,
    "ri-arrow-down-s-line": isDrawer,
  })

  return (
    <div className='text-link'>
      <span className='text-link__text'>{content}</span>
      <i className={IconClassName}></i>
    </div>
  )
}

TextLink.defaultProps = defaultProps

export default TextLink
