import React, { FC } from "react"
import { isEmpty } from "ramda"
import ModalVideo from "react-modal-video"
import "./index.scss"

interface IProps {
  isShowVideo: boolean
  onShowChange: (value: boolean) => void
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const VideoPlayer: FC<Props> = (props) => {
  const { isShowVideo, onShowChange } = props
  return (
    <div className='video-player'>
      {isEmpty(ModalVideo) ? (
        ""
      ) : (
        <ModalVideo
          channel='custom'
          url='https://player.bilibili.com/player.html?aid=933626703&bvid=BV1BT4y1o79S&cid=428920830&page=1'
          isOpen={isShowVideo}
          onClose={() => onShowChange(false)}
        />
      )}
    </div>
  )
}

VideoPlayer.defaultProps = defaultProps

export default VideoPlayer
