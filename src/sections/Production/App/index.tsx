import React, { FC, Fragment } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import CustomButton from "@/components/CustomButton"
import TabBlock from "@/components/TabBlock"
import AppModuleBlock from "./AppModuleBlock"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const App: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()
  return (
    <Fragment>
      <section
        className='app__wrapper'
        style={{
          height: height * 0.8,
        }}
      >
        <div className='app gird'>
          <div
            className='app__text'
            data-aos='fade-left'
            data-aos-duration='700'
          >
            <div className='app__text__title'>甘邻App</div>
            <div className='app__text__description'>
              以用户为中心，为社区居民提供物业基础服务和本地生活服务.
            </div>
            <div
              className='app__text__controller'
              data-aos='fade-left'
              data-aos-delay='300'
            >
              <CustomButton type='primary' size='default'>
                立刻下载
              </CustomButton>
            </div>
          </div>
          <div className='app__show-img'>
            <div className='app__show-img__background' data-aos='fade-right' />

            <div
              className='app__show-img__content'
              data-aos='fade-right'
              data-aos-delay='300'
            >
              <div className='app__show-img__mobile'></div>
              <div className='app__show-img__cut'></div>
            </div>
          </div>
        </div>
      </section>
      <div
        className='app__show-detail'
        style={{
          height: height * 0.8,
        }}
      >
        <TabBlock
          tabHeaderColor='#fff'
          tabList={[
            {
              text: "应用页面展示",
              icon: <i className='ri-archive-fill'></i>,
              content: <AppModuleBlock />,
            },
          ]}
        />
      </div>
    </Fragment>
  )
}

App.defaultProps = defaultProps

export default App
