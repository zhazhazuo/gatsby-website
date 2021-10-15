import React, { FC, useEffect, useRef, useState } from "react"
import cls from "classnames"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore from "swiper"
import "swiper/css"
import { useGetWindowHeight } from "@/common/hooks"
import SolutionItem from "@/sections/Solution/SolutionItem"
import { solutionList } from "./config"
import "./index.scss"

SwiperCore.use([])

interface IProps {
  location: {
    state: {
      index: number
    }
  }
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

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
  } = props
  const { index } =
    state === null
      ? {
          index: 0,
        }
      : state
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
      <Swiper ref={swiperRef} className='solution__swiper' direction='vertical'>
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
