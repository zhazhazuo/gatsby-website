import React, { FC } from "react"
import cls from "classnames"
import { createPropsGetter } from "@/common/utils"
import "./index.scss"

interface IProps {
  title: string
  description: string
  img: string
}

const defaultProps = {
  isReverse: false,
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const getProps = createPropsGetter<DefaultProps>()

const ObjectItem: FC<Props> = (props) => {
  const { title, description, img, isReverse } = getProps(props)

  const ClassName = cls("object-item", {
    "object-item--reverse": isReverse,
  })

  return (
    <div className={ClassName}>
      <div className='object-item__img-wrapper'>
        <div
          className='object-item__img'
          style={{
            backgroundImage: `url(${img})`,
          }}
          data-aos={isReverse ? "fade-left" : "fade-right"}
        ></div>
        {/* <div className='object-item__img__background'></div> */}
      </div>

      <div className='object-item__description'>
        <div
          className='object-item__title'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          {title}
        </div>
        <div
          className='object-item__text'
          data-aos='fade-up'
          data-aos-delay='600'
        >
          {description}
        </div>
      </div>
    </div>
  )
}

ObjectItem.defaultProps = defaultProps

export default ObjectItem
