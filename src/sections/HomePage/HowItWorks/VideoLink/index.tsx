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
        <span className='video-link__text'>进一步了解方案</span>
        <div className='video-link__icon'>
          <i className='video-link__icon__content' />
        </div>
      </section>
    </Fragment>
  )
}

VideoLink.defaultProps = defaultProps

export default VideoLink
