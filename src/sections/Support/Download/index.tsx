import React, { FC, Fragment } from "react"
import { useIsMobile } from "@/common/hooks"
import WebDownload from "./WebDownload"
import MobileDownload from "./MobileDownload"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Download: FC<Props> = (props) => {
  const isMobile = useIsMobile()
  return <Fragment>{isMobile ? <MobileDownload /> : <WebDownload />}</Fragment>
}

Download.defaultProps = defaultProps

export default Download
