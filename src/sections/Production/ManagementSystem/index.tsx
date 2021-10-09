import React, { FC, Fragment } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import CustomButton from "@/components/CustomButton"
import TabBlock, { Props as TabBlockProps } from "@/components/TabBlock"
import ModuleBlock from "./ModuleBlock"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const tabList: TabBlockProps["tabList"][0][] = [
  {
    text: "收费管理",
    icon: <i className='ri-archive-fill'></i>,
    content: <ModuleBlock />,
  },
  {
    text: "物业服务",
    icon: <i className='ri-archive-fill'></i>,
    content: <ModuleBlock />,
  },
  {
    text: "出入管理",
    icon: <i className='ri-archive-fill'></i>,
    content: <ModuleBlock />,
  },
  {
    text: "移动办公",
    icon: <i className='ri-archive-fill'></i>,
    content: <ModuleBlock />,
  },
  {
    text: "电子投票",
    icon: <i className='ri-archive-fill'></i>,
    content: <ModuleBlock />,
  },
  {
    text: "一码一物",
    icon: <i className='ri-archive-fill'></i>,
    content: <ModuleBlock />,
  },
]

const ManagementSystem: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()
  return (
    <Fragment>
      <section
        className='management-system__wrapper'
        style={{
          height: height * 0.8,
        }}
      >
        <div className='management-system gird'>
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
                访问甘邻数字物业平台
              </CustomButton>
            </div>
          </div>
          <div className='management-system__show-img'>
            <div
              className='management-system__show-img__background'
              data-aos='fade-left'
              data-aos-duration='700'
            ></div>
            <div
              className='management-system__show-img__content'
              data-aos='fade-left'
              data-aos-delay='300'
            ></div>
            <div
              className='management-system__show-img__content__mini-program'
              data-aos='fade-left'
              data-aos-delay='300'
            ></div>
          </div>
        </div>
      </section>
      <div
        className='management-system__detail'
        style={{
          height: height * 0.6,
        }}
      >
        <TabBlock tabList={tabList} />
      </div>
    </Fragment>
  )
}

ManagementSystem.defaultProps = defaultProps

export default ManagementSystem
