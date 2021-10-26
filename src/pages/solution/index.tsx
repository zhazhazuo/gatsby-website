import React, { FC, useEffect, useRef, useState } from "react"
import cls from "classnames"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Mousewheel } from "swiper"
import "swiper/css"
import { createPropsGetter } from "@golink/link-ui"
import { useGetWindowHeight } from "@/common/hooks"
import SolutionItem from "@/sections/Solution/SolutionItem"
import { solutionList } from "../../sections/Solution/config"
import "./index.scss"

SwiperCore.use([Mousewheel])

interface IProps {}

const defaultProps = {
  location: {
    state: {
      index: 0,
    },
  },
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const getProps = createPropsGetter<DefaultProps>()

interface ICatalogueItemProps {
  catalogueIndex: number
  text: string
  onClick: (id: number) => void
  active?: boolean
}

const CatalogueItem: FC<ICatalogueItemProps> = ({
  text,
  catalogueIndex,
  active = false,
  onClick,
}) => {
  const ClassName = cls("catalogue__item", {
    "catalogue__item--active": active,
  })

  return (
    <div className={ClassName} onClick={() => onClick(catalogueIndex)}>
      <div className='catalogue__tag' />
      <div className='catalogue__text'>{text}</div>
    </div>
  )
}

const Solution: FC<Props> = (props) => {
  const {
    location: { state },
  } = getProps(props)
  const index = state?.index || 0
  const { height } = useGetWindowHeight()
  const swiperRef = useRef(
    null as unknown as {
      swiper: SwiperCore
    }
  )
  const [curCatalogueIndex, setCurCatalogueIndex] = useState(Number(index))

  const catalogueItemClickHandle = (index: number) => {
    setCurCatalogueIndex(index)
    swiperRef.current.swiper.slideTo(index)
  }

  const swiperSlideChangeHandle = (event: SwiperCore) => {
    setCurCatalogueIndex(event.activeIndex)
  }

  useEffect(() => {
    if (state === null) return
    swiperRef.current.swiper.slideTo(state.index)
    setCurCatalogueIndex(state.index)
  }, [state])

  return (
    <div
      className='solution'
      style={{
        height,
      }}
    >
      <Swiper
        ref={swiperRef}
        className='solution__swiper'
        direction='vertical'
        mousewheel={true}
        onSlideChange={swiperSlideChangeHandle}
      >
        {solutionList.map((item, index) => (
          <SwiperSlide key={index}>
            <SolutionItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='solution__catalogue'>
        {solutionList.map((item, index) => (
          <CatalogueItem
            key={index}
            catalogueIndex={index}
            text={item.title}
            onClick={catalogueItemClickHandle}
            active={curCatalogueIndex === index}
          />
        ))}
      </div>
    </div>
  )
}

Solution.defaultProps = defaultProps

export default Solution
