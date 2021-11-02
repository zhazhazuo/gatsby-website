import React, { FC, useState } from "react"
import cls from "classnames"
import { useGetWindowHeight } from "@/common/hooks"
import AppShowImg from "@/assets/section/App/app-show-img.png"
import DownloadAppleImg from "@/assets/section/Support/download-apple.png"
import DownloadAndroidImg from "@/assets/section/Support/download-android.png"
import DownloadQRCodeImg from "@/assets/section/Support/download-qrcode.png"
import "./index.scss"

interface IDownloadItemProps {
  type: "apple" | "android"
}

const DownloadItem = ({ type }: IDownloadItemProps) => {
  const [isHover, setIsHover] = useState(false)

  const ClassName = cls("download-item", {
    "download-item--apple": type === "apple",
    "download-item--android": type === "android",
  })
  const ImgClassName = cls("download-item__img", {
    "download-item__img--hidden": isHover,
  })
  const QRCodeClassName = cls("download-item__qr-code", {
    "download-item__qr-code--visible": isHover,
  })

  const mouseEnterHandle = () => {
    setIsHover(true)
  }
  const mouseLeaveHandle = () => {
    setIsHover(false)
  }

  return (
    <div
      className={ClassName}
      onMouseEnter={mouseEnterHandle}
      onMouseLeave={mouseLeaveHandle}
    >
      <img
        className={ImgClassName}
        src={type === "apple" ? DownloadAppleImg : DownloadAndroidImg}
        alt=''
      />
      <img className={QRCodeClassName} src={DownloadQRCodeImg} alt='' />
      <p className='download-item__label'>
        {type === "apple" ? "App Store 下载" : "Android 下载"}
      </p>
    </div>
  )
}

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const WebDownload: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()
  return (
    <section
      className='web-download__wrapper grid'
      style={{
        height,
      }}
    >
      <div className='web-download__show'>
        <img className='web-download__img' src={AppShowImg} alt='' />
      </div>
      <div className='web-download__content'>
        <p className='web-download__title'>
          下载
          <span className='web-download__title--active'>甘邻App</span>
        </p>
        <p className='web-download__label'>让社区生活更美好</p>
        <div className='web-download__list'>
          <DownloadItem type='apple' />
          <DownloadItem type='android' />
        </div>
      </div>
    </section>
  )
}

WebDownload.defaultProps = defaultProps

export default WebDownload
