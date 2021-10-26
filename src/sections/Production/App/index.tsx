import React, { FC, Fragment } from "react"
import { navigate } from "gatsby-link"
import { useGetWindowHeight } from "@/common/hooks"
import CustomButton from "@/components/CustomButton"
import TabBlock from "@/components/TabBlock"
import AppShotSwiper from "@/components/AppShotSwiper"
import Img1 from "@/assets/section/App/1.png"
import Img2 from "@/assets/section/App/2.png"
import Img3 from "@/assets/section/App/3.png"
import Img4 from "@/assets/section/App/4.png"
import Img5 from "@/assets/section/App/5.png"
import Img6 from "@/assets/section/App/6.png"
import Img7 from "@/assets/section/App/7.png"
import Img8 from "@/assets/section/App/8.png"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const appShotList = [Img7, Img8, Img1, Img2, Img3, Img4, Img5, Img6]

const App: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()
  return (
    <Fragment>
      <section
        id='app'
        className='app__wrapper'
        style={{
          minHeight: height * 0.5,
        }}
      >
        <div
          className='app grid'
          style={{
            height: height * 0.8,
          }}
        >
          <div
            className='app__text'
            data-aos='fade-left'
            data-aos-duration='700'
          >
            <div className='app__text__title'>甘邻 App</div>
            <div className='app__text__description'>
              以用户为中心，为社区居民提供物业基础服务和本地生活服务
            </div>
            <div
              className='app__text__controller'
              data-aos='fade-left'
              data-aos-delay='300'
            >
              <CustomButton
                type='secondary'
                size='large'
                onClick={() => {
                  navigate("/support", {
                    state: {
                      type: "download",
                    },
                  })
                }}
              >
                立刻下载
              </CustomButton>
            </div>
          </div>
          <div className='app__show-img'>
            <div
              className='app__show-img__background'
              data-aos='fade-right'
              data-aos-delay='300'
            />
            <div className='app__show-img__content' data-aos='fade-right'>
              <div className='app__show-img__cut'></div>
            </div>
          </div>
        </div>
      </section>
      <div className='app__show-detail'>
        <TabBlock
          tabHeaderColor='#fff'
          tabList={[
            {
              text: "应用页面展示",
              icon: <i className='ri-archive-fill'></i>,
              content: <AppShotSwiper shotList={appShotList} />,
            },
          ]}
        />
      </div>
    </Fragment>
  )
}

App.defaultProps = defaultProps

export default App
