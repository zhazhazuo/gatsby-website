import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const ModuleBlock: FC<Props> = (props) => {
  return (
    <div className='module-block'>
      <div className='module-block__show-img' data-aos='fade-right' />
      <div className='module-block__description' data-aos='fade-left'>
        <div className='module-block__title'>物业收费</div>
        <div className='module-block__description-content'>
          <p>今日计划：列出今日计划，随时更新进度；</p>
          <p>今日总结：梳理成果表现，积极总结反思；</p>
          <p>明日计划：计划明日任务，附上时间和文档。</p>
        </div>
      </div>
    </div>
  )
}

ModuleBlock.defaultProps = defaultProps

export default ModuleBlock
