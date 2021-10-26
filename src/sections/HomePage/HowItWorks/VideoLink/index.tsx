import React, { FC, Fragment } from "react"

import "./index.scss"

interface IProps {
  onShowChange: (value: boolean) => void
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const VideoLink: FC<Props> = (props) => {
  const { onShowChange } = props
  return (
    <Fragment>
      <section
        className='video-link'
        data-aos='zoom-in'
        data-aos-delay='200'
        onClick={() => onShowChange(true)}
      >
        <i className='ri-play-circle-fill video-link__icon' />
        <span className='video-link__text'>进一步了解方案</span>
      </section>
      <div className='video-link__modal'></div>
    </Fragment>
  )
}

VideoLink.defaultProps = defaultProps

export default VideoLink
