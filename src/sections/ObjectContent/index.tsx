import React, { FC } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import BusinessImg from "@/assets/business.jpg"
import CustomerImg from "@/assets/customer.jpg"
import ObjectItem from "./ObjectItem"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const ObjectContent: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()
  return (
    <div
      className='object-content__wrapper'
      style={{
        height: height,
      }}
    >
      <div className='object-content gird'>
        <div className='object-content--left'>
          <ObjectItem
            title='物业企业'
            description='我们的方案可以帮助物业公司获得业主好评。借助数字化，减员增效；多种经营增加营收；提供给居民更好的服务，获得更好的评价'
            img={BusinessImg}
          />
        </div>
        <div className='object-content--right'>
          <ObjectItem
            isReverse
            title='社区居民'
            description='使用我们的产品服务，可以促使物业提供更好的服务。住户拥有用体验更好的服务APP；在线获取更多周边生活服务；物业公司可以雇佣到更优秀的员工，来提供更高质量的物业服务'
            img={CustomerImg}
          />
        </div>
      </div>
    </div>
  )
}

ObjectContent.defaultProps = defaultProps

export default ObjectContent
