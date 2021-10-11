import React, { FC, useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { createPropsGetter } from "@/common/utils"
import "./index.scss"

SwiperCore.use([Autoplay])

SwiperCore.extendDefaults({
  speed: 600,
})

interface IProps {
  shotList: string[]
}

const defaultProps = {
  slidesPerView: 5,
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const getProps = createPropsGetter<DefaultProps>()

const AppShotSwiper: FC<Props> = (props) => {
  const { slidesPerView, shotList } = getProps(props)
  const swiperRef = useRef(
    null as unknown as {
      swiper: SwiperCore
    }
  )
  const [curIndex, setCurIndex] = useState((slidesPerView % 2) + 1)

  const onAutoplayHandle = (e: SwiperCore) => {
    const base = e.activeIndex - slidesPerView + 2
    setCurIndex(base < shotList.length ? base : base - shotList.length)
  }

  const onSwiperClick = (e: SwiperCore) => {
    const base = e.clickedIndex - slidesPerView
    const value = base < shotList.length ? base : base - shotList.length
    setCurIndex(value < 0 ? value + shotList.length : value)
    if (e.clickedIndex === 16) {
      swiperRef.current.swiper.slideTo(5, 0)
      return
    } else if (e.clickedIndex === 2) {
      swiperRef.current.swiper.slideTo(9, 0)
      return
    }
    swiperRef.current.swiper.slideTo(e.clickedIndex - 2)
  }

  return (
    <div className='app-shot-swiper'>
      <div
        className='app-shot-swiper__device-wrapper'
        onMouseEnter={() => {
          swiperRef.current.swiper.autoplay.stop()
        }}
        onMouseLeave={() => {
          swiperRef.current.swiper.autoplay.start()
        }}
      ></div>
      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        className='app-shot-swiper__content'
        onAutoplay={onAutoplayHandle}
        onClick={onSwiperClick}
      >
        {shotList.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`swiper-slide__content ${
                index === curIndex ? "swiper-slide__content--active" : ""
              }`}
            >
              <div
                style={{
                  backgroundImage: `url(${item})`,
                }}
                className='swiper-slide__content__img'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

AppShotSwiper.defaultProps = defaultProps

export default AppShotSwiper
