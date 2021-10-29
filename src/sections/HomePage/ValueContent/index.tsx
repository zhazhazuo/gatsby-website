import React, { FC } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

interface IValueItem {
  id: string
  img: {
    background: string
    icon: string
  }
  title: string
  description?: string
}

const valuesList: IValueItem[] = [
  {
    id: "satisfaction",
    title: "满意度提升 40%",
    description:
      "甘邻APP拥有极致用户体验和丰富社区服务功能，社区业主满意度平均提升 40%",
    img: {
      background: "#50af4c",
      icon: "ri-heart-3-fill",
    },
  },
  {
    id: "efficiency",
    title: "员工工作效率增长 30%",
    description:
      "借助数字化的管理能力，极大的降低了人力成本，在安防、客服等岗位提升 30% 的工作效率",
    img: {
      background: "#295fff",
      icon: "ri-rocket-2-fill",
    },
  },
  {
    id: "income",
    title: "增收 ¥10000+",
    description:
      "物业公司可以立即开展多种经营，自助运营社区电商、周边商业服务、驿站服务和广告经营等，单个项目每月平均增收 10000 元",
    img: {
      background: "#fdcf08",
      icon: "ri-money-cny-box-fill",
    },
  },
  {
    id: "relationship",
    title: "社区关系正向循环",
    description:
      "物业公司提效和收入增加后，有更多资源来提供更优质服务，从而实现业主和物业间的正向循环，业主满意度不断提升",
    img: {
      background: "#FF7B00",
      icon: "ri-home-heart-fill",
    },
  },
]

const ValueContent: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()

  return (
    <section
      className='value-content__wrapper'
      style={{
        height,
      }}
    >
      <div className='value-content grid'>
        <div className='value-content__title'>
          <p className='value-content__title-text'>
            <span className='value-content__title-text--active'>我们</span>
            能带来什么
          </p>
          <p className='value-content__label'>借助甘邻智慧社区方案</p>
        </div>

        <div className='value-content__list'>
          {valuesList.map((valueItem, index) => (
            <div
              key={valueItem.id}
              className='value-content__item'
              data-aos='fade-up'
              data-aos-once='true'
              data-aos-delay={`${index * 50 + 500}`}
            >
              <div className='value-content__item__left'>
                <div className='value-content__item__icon'>
                  <i className={valueItem.img.icon}></i>
                </div>
              </div>
              <div className='value-content__item__text'>
                <p className='value-content__item__title'>{valueItem.title}</p>
                <p className='value-content__item__description'>
                  {valueItem.description}
                </p>
              </div>
              <div className='value-content__item__bottom-line' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

ValueContent.defaultProps = defaultProps

export default ValueContent
