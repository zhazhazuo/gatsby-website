import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const BusinessCard: FC<Props> = (props) => {
  return (
    <div className='business-card'>
      <div className='business-card__user-info'>
        <div className='business-card__avatar'></div>
        <div className='business-card__info'>
          <p className='business-card__name'>海大大</p>
          <p className='business-card__tag'>海科物业创始人、董事长</p>
        </div>
      </div>
      <div className='business-card__description'>
        海科选用了甘邻，目前已经有一段时间了，甘邻在信息创建、分享，以及协同办公方面，非常简洁、高效，的确越用越顺手。
      </div>
    </div>
  )
}

BusinessCard.defaultProps = defaultProps

export default BusinessCard
