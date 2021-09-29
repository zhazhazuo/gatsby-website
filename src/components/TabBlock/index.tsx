import React, { FC, useState } from "react"
import TabItem, { Props as TabItemProps } from "./TabIItem"
import "./index.scss"

interface ITabItem extends Omit<TabItemProps, "active"> {
  content: React.ReactNode
}

interface IProps {
  tabList: ITabItem[]
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

export type Props = IProps & Partial<DefaultProps>

const TabBlock: FC<Props> = (props) => {
  const { tabList } = props
  const [activeIndex, setActiveIndex] = useState(0)

  const onTabItemClick = (curIndex: number, stateIndex: number) => {
    if (curIndex === stateIndex) return
    setActiveIndex(curIndex)
  }

  return (
    <div className='tab-block'>
      <div className='tab-block__tab-list-wrapper'>
        <div
          className='tab-block__tab-list'
          style={{
            gridTemplateColumns: `repeat(${tabList.length}, 1fr)`,
          }}
        >
          {tabList.map((item, index) => (
            <TabItem
              {...item}
              key={index}
              active={index === activeIndex}
              onClick={() => onTabItemClick(index, activeIndex)}
            />
          ))}
        </div>
      </div>
      <div className='tab-block__content'>{tabList[activeIndex].content}</div>
    </div>
  )
}

TabBlock.defaultProps = defaultProps

export default TabBlock
