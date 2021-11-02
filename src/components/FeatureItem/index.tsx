import React, { FC } from "react"
import "./index.scss"

interface IProps {
  icon: string
  title: string
  text: string
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

export type Props = IProps & Partial<DefaultProps>

const FeatureItem: FC<Props> = (props) => {
  const { icon, title, text } = props
  return (
    <div className='feature-item'>
      <div
        className='feature-item__img'
        style={{
          backgroundImage: `url(${icon})`,
        }}
      />
      <div className='feature-item__description'>
        <p className='feature-item__title'>{title}</p>
        <p className='feature-item__text'>{text}</p>
      </div>
    </div>
  )
}

FeatureItem.defaultProps = defaultProps

export default FeatureItem
