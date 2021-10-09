import React, { FC } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import BusinessImg from "@/assets/object-company.png"
import CustomerImg from "@/assets/object-customer.png"
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
            description='我们的方案可以帮助物业公司获得业主好评。借助数字化能力，增效减员；多种经营增加营收；提供给居民更好的服务，获得更好的评价。'
            img={BusinessImg}
          />
        </div>
        <div className='object-content--right'>
          <ObjectItem
            isReverse
            title='社区居民'
            description='我们为社区居民提供体验更好的APP和硬件，在线就可以获取物业基础服务，和更多的周边生活服务。'
            img={CustomerImg}
          />
        </div>
      </div>
    </div>
  )
}

ObjectContent.defaultProps = defaultProps

export default ObjectContent
