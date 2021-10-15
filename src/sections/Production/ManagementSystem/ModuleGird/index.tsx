import React, { FC } from "react"
import "./index.scss"

interface IProps {
  data: IGirdItemProps[]
}

const defaultProps = {
  columns: 3,
  rows: 3,
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

interface IGirdItemProps {
  icon: string
  title: string
  content: string
}

const GirdItem: FC<IGirdItemProps> = ({ icon, title, content }) => {
  return (
    <div className='grid-item'>
      <div className='grid-item__icon'>
        <i className='ri-pie-chart-line'></i>
      </div>
      <div className='grid-item__description'>
        <div className='grid-item__title'>{title}</div>
        <div className='grid-item__text'>{content}</div>
      </div>
    </div>
  )
}

const ModuleGird: FC<Props> = (props) => {
  const { columns, rows, data } = props

  return (
    <div
      className='module-grid'
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        // gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
    >
      {data.map((item, index) => (
        <GirdItem {...item} key={index} />
      ))}
    </div>
  )
}

ModuleGird.defaultProps = defaultProps

export default ModuleGird
