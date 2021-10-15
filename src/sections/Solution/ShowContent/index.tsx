import React, { FC } from "react"
import "./index.scss"

interface IProps {
  background: string
  img: string
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const ShowContent: FC<Props> = (props) => {
  const { background, img } = props
  return (
    <div className='show-content'>
      <img className='show-content__background' src={background} />
      <img className='show-content__img' src={img} />
    </div>
  )
}

ShowContent.defaultProps = defaultProps

export default ShowContent
