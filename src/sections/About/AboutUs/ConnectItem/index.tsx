import React, { FC } from "react"
import "./index.scss"

interface IInfo {
  label: string
  texts: string[]
}

interface IProps {
  title: string
  infos: IInfo[]
  backgroundImg: string
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const ConnectItem: FC<Props> = (props) => {
  const { title, infos, backgroundImg } = props

  return (
    <div className='connect-item'>
      <div
        className='connect-item__show'
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      />
      <div className='connect-item__content'>
        <p className='connect-item__title'>{title}</p>
        {infos.map((info, index) => (
          <div className='connect-item__info' key={index}>
            <p className='connect-item__info__label'>{info.label}：</p>
            <div className='connect-item__info__content'>
              {info.texts.map((text, textIndex) => (
                <p className='connect-item__info__text' key={textIndex}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

ConnectItem.defaultProps = defaultProps

export default ConnectItem
