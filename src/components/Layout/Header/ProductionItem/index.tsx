import React, { FC } from "react"
import { createPropsGetter } from "@/common/utils"
import "./index.scss"

interface IProps {
  title: string
}

const defaultProps = {
  icon: "",
  description: "",
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const getProps = createPropsGetter<DefaultProps>()

const ProductionItem: FC<Props> = (props) => {
  const { title, icon, description } = getProps(props)

  return (
    <div className='production-item'>
      <i
        className='production-item__icon'
        style={{
          backgroundImage: `url(${icon})`,
        }}
      />
      <div className='production-item__content'>
        <p className='production-item__content__title'>{title}</p>
        <p className='production-item__content__description'>{description}</p>
      </div>
    </div>
  )
}

ProductionItem.defaultProps = defaultProps

export default ProductionItem
