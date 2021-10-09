import React, { FC, useEffect, useState } from "react"
import cls from "classnames"
import Img1 from "@/assets/appScreenshot/1.png"
import Img2 from "@/assets/appScreenshot/2.png"
import Img3 from "@/assets/appScreenshot/3.png"
import Img4 from "@/assets/appScreenshot/4.png"
import Img5 from "@/assets/appScreenshot/5.png"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const list = [
  Img4,
  Img5,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img1,
]

const AppModuleBlock: FC<Props> = (props) => {
  const [timer, setTimer] = useState<any>(null)
  const [isBegin, setIsBegin] = useState(false)
  const [activeIndex, setActiveIndex] = useState((list.length - 1) / 2)
  const [animationStyle, setAnimationStyle] = useState({})

  useEffect(() => {
    let index = -1

    const timer = setInterval(() => {
      if (index === list.length - 9) {
        setAnimationStyle((v) => ({
          transform: `translate3d(0, 0, 0)`,
          transition: "all 0ms ease 0s",
        }))
        index = -1
        setActiveIndex((v) => 7)
      } else {
        setIsBegin(true)
        setAnimationStyle((v) => ({
          transform: `translate3d(calc((-300px) * ${index + 1}), 0, 0)`,
          transition: "all 500ms ease 0s",
        }))
        setActiveIndex((v) => v + 1)
      }
      index = index + 1
    }, 1500)

    setTimer(timer)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className='app-module-block'>
      <div className='app-module-block__header'></div>
      <div className='app-module-block__content'>
        <div className='app-module-block__phone-container'></div>
        <div className='app-module-block__screenshot-list__wrapper'>
          <div
            className='app-module-block__screenshot-list'
            style={animationStyle}
          >
            {list.map((item, index) => {
              const ClassName = cls("app-module-block__screenshot-item", {
                "app-module-block__screenshot-item--active":
                  (activeIndex === index + 1 && index !== 5) ||
                  (!isBegin && index === 6),
              })
              return (
                <div className={ClassName} key={index}>
                  <div className='app-module-block__screenshot-item__img'>
                    <img src={item} alt='' />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

AppModuleBlock.defaultProps = defaultProps

export default AppModuleBlock
