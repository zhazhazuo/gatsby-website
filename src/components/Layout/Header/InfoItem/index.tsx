import React, { FC } from "react"
import "./index.scss"

interface IProps {
  title: string
  description: string
  onClick: () => void
}

const defaultProps = {
  icon: "",
}

type DefaultProps = Readonly<typeof defaultProps>

export type Props = IProps & Partial<DefaultProps>

const InfoItem: FC<Props> = (props) => {
  const { title, description, icon, onClick } = props
  return (
    <div className='info-item' onClick={onClick}>
      {/* <div className='info-item__img'>
        <i className={icon}></i>
      </div> */}
      <div className='info-item__title'>{title}</div>
      <div className='info-item__description'>{description}</div>
      <div className='info-item__learn-more'>了解更多</div>
    </div>
  )
}

InfoItem.defaultProps = defaultProps

export default InfoItem
