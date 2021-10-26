import React, { FC } from "react"
import "./index.scss"

interface IProps {
  title: string
  description: string
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

export type Props = IProps & Partial<DefaultProps>

const ValueItem: FC<Props> = (props) => {
  const { title, description } = props
  return (
    <div className='value-item'>
      <p className='value-item-title'>{title}</p>
      <p className='value-item__description'>{description}</p>
    </div>
  )
}

ValueItem.defaultProps = defaultProps

export default ValueItem
