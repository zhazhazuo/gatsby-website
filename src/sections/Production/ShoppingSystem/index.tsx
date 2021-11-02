import React, { FC } from "react"
import { navigateHandle } from "@/common/utils"
import { useGetWindowHeight } from "@/common/hooks"
import FeatureItem, {
  Props as IFeatureItemProps,
} from "@/components/FeatureItem"
import CustomButton from "@/components/CustomButton"
import AnchorPoint from "@/components/AnchorPoint"
import IconGoodsManagement from "@/assets/section/ShoppingSystem/icon-goodsManagement.png"
import IconMarketingManagement from "@/assets/section/ShoppingSystem/icon-marketingManagement.png"
import IconStockManagement from "@/assets/section/ShoppingSystem/icon-stockManagement.png"
import IconOrderManagement from "@/assets/section/ShoppingSystem/icon-orderManagement.png"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const featureList: IFeatureItemProps[] = [
  {
    icon: IconOrderManagement,
    title: "订单管理",
    text: "处理商家订单，操作退、换、拒收等",
  },
  {
    icon: IconGoodsManagement,
    title: "商品管理",
    text: "创建商品，管理上下架等",
  },
  {
    icon: IconMarketingManagement,
    title: "营销管理",
    text: "开展销售活动，优惠券等",
  },
  {
    icon: IconStockManagement,
    title: "库存管理",
    text: "入库商品，设置销售库存，管理库存记录等",
  },
]

const ShoppingSystem: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()

  return (
    <section
      className='shopping-system__wrapper'
      style={{
        height,
      }}
    >
      <AnchorPoint pointId='shopping-system' />
      <div className='shopping-system grid'>
        <div
          className='shopping-system__top'
          data-aos='fade'
          data-aos-duration='900'
        >
          <p className='shopping-system__title'>
            甘邻
            <span className='shopping-system__title--active'>商家中心</span>
          </p>
          <p className='shopping-system__label'>
            连接商户与社区居民；多种经营，无限可能
          </p>
          <div className='shopping-system__controller'>
            <CustomButton
              type='primary'
              size='default'
              onClick={navigateHandle("businessCenter")}
            >
              立即访问
            </CustomButton>
          </div>
        </div>
        <div className='shopping-system__content'>
          <div className='shopping-system__show'>
            <div className='shopping-system__show__content'>
              <div
                className='shopping-system__show__img'
                data-aos='fade-right'
                data-aos-duration='900'
              />
            </div>
          </div>
          <div
            className='shopping-system__description'
            data-aos='fade-left'
            data-aos-duration='900'
          >
            {featureList.map((item, index) => (
              <FeatureItem {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

ShoppingSystem.defaultProps = defaultProps

export default ShoppingSystem
