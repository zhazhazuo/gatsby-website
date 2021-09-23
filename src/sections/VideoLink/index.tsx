import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const VideoLink: FC<Props> = (props) => {
  return (
    <section className='video-link' data-aos='zoom-in' data-aos-delay='200'>
      <i className='ri-play-circle-fill video-link__icon' />
      <span className='video-link__text'>快速了解甘邻智慧社区方案.</span>
    </section>
  )
}

VideoLink.defaultProps = defaultProps

export default VideoLink
