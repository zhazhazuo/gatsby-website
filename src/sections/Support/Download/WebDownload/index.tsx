import React, { FC } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import ProductionImg from "@/assets/section/Support/production-show.png"
import QRCodeImg from "@/assets/section/Support/QR-code.png"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const WebDownload: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()
  return (
    <div
      className='web-download__wrapper'
      style={{
        height,
      }}
    >
      <section className='web-download grid'>
        <div className='web-download__show'>
          <img src={ProductionImg} alt='' />
        </div>
        <div className='web-download__content'>
          <p className='web-download__title'>下载甘邻 APP</p>
          <div className='web-download__sources'>
            <img className='web-download__qr-code' src={QRCodeImg} />
            <div className='web-download__sources__mobile'>
              <div className='web-download__mobile web-download__mobile--apple'>
                <i className='ri-apple-fill web-download__mobile__icon' />
                <p className='web-download__mobile__text'>App Store 下载</p>
              </div>
              <div className='web-download__mobile web-download__mobile--android'>
                <i className='ri-android-fill web-download__mobile__icon' />
                <p className='web-download__mobile__text'>Android 下载</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='web-download__background web-download__background-one' />
      <div className='web-download__background web-download__background-two' />
      <div className='web-download__background web-download__background-three' />
    </div>
  )
}

WebDownload.defaultProps = defaultProps

export default WebDownload
