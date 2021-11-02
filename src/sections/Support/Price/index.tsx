import React, { FC } from "react"
import cls from "classnames"
import { useGetWindowHeight } from "@/common/hooks"
import { freeProductionList, betterProductionList } from "./config"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

export interface IPriceProductItemProps {
  type: "free" | "value"
  title: string
  icon: string
}

const PriceProductItem = ({ icon, type, title }: IPriceProductItemProps) => {
  const ClassName = cls("price-product-item", {
    "price-product-item--value": type === "value",
    "price-product-item--free": type === "free",
  })

  const img = require(`@/assets/section/Support/icon-${icon}.png`).default

  return (
    <div className={ClassName}>
      <div
        className='price-product-item__icon'
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <p className='price-product-item__title'>{title}</p>
    </div>
  )
}

const Price: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()
  return (
    <section className='price__wrapper'>
      <div
        className='price grid'
        style={{
          minHeight: height,
        }}
      >
        <div className='price__top'>
          <p className='price__title'>产品定价策略</p>
          <p className='price__label'>
            免费模块已覆盖大部分物业场景，更有增值服务可供选择
          </p>
        </div>
        <div className='price__content'>
          <p className='price__content__title'>终身免费产品</p>
          <div className='price__content--free'>
            {freeProductionList.map((item, index) => (
              <PriceProductItem key={index} {...item} />
            ))}
          </div>
          <p className='price__content__title'>增值产品（按量或一次性买断）</p>
          <div className='price__content--value'>
            {betterProductionList.map((item, index) => (
              <PriceProductItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

Price.defaultProps = defaultProps

export default Price
