import React, { FC } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import CustomButton from "@/components/CustomButton"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const ManagementSystem: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()
  return (
    <div
      className='management-system__wrapper'
      style={{
        height,
      }}
    >
      <div className='management-system gird'>
        <div
          className='management-system__show-img'
          data-aos='fade-left'
          data-aos-duration='700'
        >
          <div className='management-system__show-img__background'></div>
          <div className='management-system__show-img__content'></div>
        </div>
        <div
          className='management-system__text'
          data-aos='fade-right'
          data-aos-duration='700'
        >
          <div className='management-system__title'>数字物业平台</div>
          <div className='management-system__description'>
            简单易用，不失强大
          </div>
          <div
            className='management-system__controller'
            data-aos='fade-right'
            data-aos-delay='300'
          >
            <CustomButton type='primary' size='default'>
              立刻使用
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}

ManagementSystem.defaultProps = defaultProps

export default ManagementSystem
