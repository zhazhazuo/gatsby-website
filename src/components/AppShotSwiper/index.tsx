import React, { FC, useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { createPropsGetter } from "@golink/link-ui"
import "./index.scss"

SwiperCore.use([Autoplay])

SwiperCore.extendDefaults({
  speed: 600,
})

interface IProps {
  shotList: string[]
}

const defaultProps = {
  slidesPerView: 7,
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
  const [curIndex, setCurIndex] = useState((slidesPerView % 2) + 2)

  const onAutoplayHandle = (e: SwiperCore) => {
    const base = e.activeIndex - slidesPerView + 3
    setCurIndex(base < shotList.length ? base : base - shotList.length)
  }

  const onSwiperClick = (e: SwiperCore) => {
    const clickIndex = Number(e.clickedSlide.dataset.swiperSlideIndex)
    const isPrePoint1 = clickIndex === 7 && [0, 1].includes(curIndex)
    const isPrePoint2 = clickIndex === 6 && curIndex === 0

    if (clickIndex === 1 && curIndex === 3) {
      swiperRef.current.swiper.slidePrev()
      return
    } else if (clickIndex === 0 && curIndex === 2) {
      swiperRef.current.swiper.slideTo(5)
      return
    }

    if (clickIndex === 1 && ![0, 7].includes(curIndex)) {
      swiperRef.current.swiper.slideTo(5)
    } else if (
      (clickIndex > curIndex && !isPrePoint1 && !isPrePoint2) ||
      (clickIndex === 0 && curIndex === 7) ||
      (clickIndex === 0 && curIndex === 6) ||
      (clickIndex === 1 && curIndex === 7)
    ) {
      swiperRef.current.swiper.slideNext()
    } else if (clickIndex < curIndex || isPrePoint1 || isPrePoint2) {
      swiperRef.current.swiper.slidePrev()
    }
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
        className='app-shot-swiper__content'
        slidesPerView={slidesPerView}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        onClick={onSwiperClick}
        onSlideChange={onAutoplayHandle}
      >
        {shotList.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`swiper-slide__content ${
                index === curIndex ? "swiper-slide__content--active" : ""
              }`}
            >
              <div className='swiper-slide__content__img__wrapper' />
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
