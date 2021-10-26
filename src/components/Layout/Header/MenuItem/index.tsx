import React, { FC, useState } from "react"
import cls from "classnames"
import { createPropsGetter } from "@golink/link-ui"
import TextLink, { Props as TextLinkProps } from "@/components/TextLink"
import { Props as InfoItemProps } from "../InfoItem"
import "./index.scss"

interface IProps {
  textInfo: TextLinkProps
  onChangeMenuShow: (value: "normal" | "visible" | "hidden") => void
}

const defaultProps = {
  childrenList: [] as InfoItemProps[],
}

type DefaultProps = Readonly<typeof defaultProps>

export type Props = IProps & Partial<DefaultProps>

const getProps = createPropsGetter<DefaultProps>()

const MenuItem: FC<Props> = (props) => {
  const { textInfo, childrenList, onChangeMenuShow } = getProps(props)
  const [isActive, setIsActive] = useState(false)
  const ChildrenListClassName = cls("menu-item__children-list", {
    "menu-item__children-list--active": isActive,
  })

  const menuItemClickHandle = () => {
    if (!textInfo.isDrawer && !childrenList.length) {
      onChangeMenuShow("hidden")
      return
    }
    setIsActive((v) => !v)
  }

  const childClickHandle = (cb: () => void) => {
    cb()
    onChangeMenuShow("hidden")
  }

  return (
    <div className='menu-item__wrapper'>
      <div className='menu-item' onClick={menuItemClickHandle}>
        <TextLink {...textInfo} isMobile isActive={isActive} />
      </div>
      {!!childrenList.length && (
        <div className={ChildrenListClassName}>
          {childrenList.map((item, index) => (
            <div
              className='menu-item__child'
              key={index}
              onClick={() => childClickHandle(item.onClick)}
            >
              <p className='menu-item__child__title'>{item.title}</p>
              <p className='menu-item__child__description'>
                {item.description}
              </p>
              <div className='menu-item__child__line' />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

MenuItem.defaultProps = defaultProps

export default MenuItem
