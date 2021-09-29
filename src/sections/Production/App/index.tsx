import { useGetWindowHeight } from "@/common/hooks"
import CustomButton from "@/components/CustomButton"
import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const App: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()
  return (
    <section
      className='app__wrapper'
      style={{
        height,
      }}
    >
      <div className='app gird'>
        <div className='app__text' data-aos='fade-left' data-aos-duration='700'>
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
  )
}

App.defaultProps = defaultProps

export default App
