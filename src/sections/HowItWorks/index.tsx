import { map } from "ramda"
import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const planList = [
  "0成本 搭建社区智能基建",
  "0成本 接入智能物业管理平台",
  "0成本 住户使用甘邻App ",
]

const HowItWorks: FC<Props> = (props) => {
  return (
    <section className='how-it-works'>
      <div className='how-it-works__description' data-aos='fade-right'>
        <div className='how-it-works__title'>甘邻智慧社区</div>
        <ul className='how-it-works__points'>
          {map(
            (item) => (
              <li className='how-it-works__point' key={item}>
                <i className='ri-checkbox-line' />
                <span>{item}</span>
              </li>
            ),
            planList
          )}
        </ul>
      </div>
      <div className='how-it-works__road-map'>
        <div className='how-it-works__item' data-aos='fade-up'>
          <div className='how-it-works__saas how-it-works__img'></div>
          <p className='how-it-works__text'>甘邻物业管理平台(网页+小程序)</p>
        </div>
        <div
          className='how-it-works__icon'
          data-aos='fade-up'
          data-aos-delay='400'
        >
          <i className='ri-add-line'></i>
        </div>
        <div
          className='how-it-works__item'
          data-aos='fade-up'
          data-aos-delay='600'
        >
          <div className='how-it-works__app how-it-works__img'></div>
          <p className='how-it-works__text'>甘邻住户APP</p>
        </div>
        <div
          className='how-it-works__icon'
          data-aos='fade-up'
          data-aos-delay='800'
        >
          <i
            className='ri-pause-line'
            style={{
              transform: "rotate(90deg)",
            }}
          ></i>
        </div>
        <div
          className='how-it-works__item'
          data-aos='fade-up'
          data-aos-delay='1000'
        >
          <div className='how-it-works__beautiful how-it-works__img'></div>
          <p className='how-it-works__text'>甘邻智慧社区</p>
        </div>
      </div>
    </section>
  )
}

HowItWorks.defaultProps = defaultProps

export default HowItWorks
