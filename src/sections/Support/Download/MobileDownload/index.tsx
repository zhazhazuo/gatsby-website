import { useGetWindowHeight } from "@/common/hooks"
import React, { FC } from "react"
import ButtonImg from "@/assets/section/Support/app-download-btn.png"
import BackgroundImg from "@/assets/section/Support/app-download.png"
import { downloadHandle } from "@/common/utils"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const MobileDownload: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()

  const downloadClickHandle = downloadHandle

  return (
    <section
      className='mobile-download'
      style={{
        minHeight: height,
      }}
    >
      <img src={BackgroundImg} alt='' className='mobile-download__background' />

      <div className='mobile-download__content'>
        <img
          className='mobile-download__button'
          src={ButtonImg}
          onClick={downloadClickHandle}
        />
        <p className='mobile-download__text'>同时支持安卓/苹果/鸿蒙手机</p>
      </div>
    </section>
  )
}

MobileDownload.defaultProps = defaultProps

export default MobileDownload
