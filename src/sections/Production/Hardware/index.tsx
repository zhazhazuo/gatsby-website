import React, { FC } from "react"
import AnchorPoint from "@/components/AnchorPoint"
import { useGetWindowHeight } from "@/common/hooks"
import HardwareImg from "@/assets/section/Hardware/device.png"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const descriptionList = [
  "99.9% 的设备稳定性",
  "可存储 5 万白名单用户数据",
  "ID / IC 双卡读取",
  "动态二维码扫码开门",
  "WiFi / 有线 双联网模式",
  "手机远程开门",
  "IP67 防水等级",
  "2.2 英寸屏幕",
  "铝合金、钢化玻璃外壳",
]

const Hardware: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()
  return (
    <section className='hardware'>
      <AnchorPoint pointId='hardware' />
      <div className='hardware__content'>
        <img className='hardware__img' src={HardwareImg} alt='' />
        <div className='hardware__slogan'>
          <p className='hardware__slogan__title'>
            <span className='hardware__slogan__title--active'>二维码</span>
            门禁
          </p>
          <p className='hardware__slogan__text'>
            为软件重新设计的硬件 无需学习，10秒配置上线
          </p>
        </div>
      </div>
      <div className='hardware__description'>
        {descriptionList.map((item, index) => (
          <div className='hardware__description__item' key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}

Hardware.defaultProps = defaultProps

export default Hardware
