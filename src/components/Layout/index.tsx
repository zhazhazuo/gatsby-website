import React, { FC, Fragment, useEffect } from "react"
import { Helmet } from "react-helmet"
import AOS from "aos"
import LogoIcon from "@/assets/logo.png"
import "animate.css"
import "../../../node_modules/aos/dist/aos.css"
import Header from "./Header"
import Footer from "./Footer"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Layout: FC<Props> = (props) => {
  const { children } = props

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <Fragment>
      <Helmet>
        <title>甘邻</title>
        <link rel='icon' type='image/png' href={LogoIcon} />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap');
        </style>
        {/* 强制禁止系统字体影响 */}
        <script>{`(function() {

            if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
                handleFontSize();
            } else {
                if (document.addEventListener) {
                    document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
                } else if (document.attachEvent) {
                    document.attachEvent("WeixinJSBridgeReady", handleFontSize);
                    document.attachEvent("onWeixinJSBridgeReady", handleFontSize);  }
            }
            function handleFontSize() {
                // 设置网页字体为默认大小
                WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
                // 重写设置网页字体大小的事件
                WeixinJSBridge.on('menu:setfont', function() {
                    WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
                });
            }
            })();`}</script>
      </Helmet>
      <div className='layout'>
        <div className='layout__header'>
          <Header />
        </div>
        <div className='layout__content'>{children}</div>
        <div className='layout__footer'>
          <Footer />
        </div>
      </div>
    </Fragment>
  )
}

Layout.defaultProps = defaultProps

export default Layout
