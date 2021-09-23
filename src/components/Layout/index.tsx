import React, { FC, Fragment, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import AOS from "aos"
import LogoIcon from "@/assets/logo.png"
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
