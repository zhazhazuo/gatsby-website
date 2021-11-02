import React, { FC } from "react"
import { createPropsGetter } from "@golink/link-ui"
import CustomButton from "../CustomButton"
import "./index.scss"

interface IProps {
  logo: string
  title: string
  description: string
  showContent: React.ReactNode
}

const defaultProps = {
  style: "primary" as "primary" | "secondary",
}

type DefaultProps = Readonly<typeof defaultProps>

export type Props = IProps & Partial<DefaultProps>

const getProps = createPropsGetter<DefaultProps>()

const SolutionBlock: FC<Props> = (props) => {
  const { logo, title, description, showContent, style } = getProps(props)

  return (
    <div className='solution-block grid'>
      <div className='solution-block__description'>
        <div
          className={`solution-block__logo solution-block__logo--${style}`}
          style={{
            backgroundImage: `url(${logo})`,
          }}
        ></div>
        <div className='solution-block__title'>{title}</div>
        <div className='solution-block__text'>{description}</div>
        <div className='solution-block__button'>
          <CustomButton type={style} size='default'>
            了解更多
          </CustomButton>
        </div>
      </div>
      <div className='solution-block__img'>{showContent}</div>
    </div>
  )
}

SolutionBlock.defaultProps = defaultProps

export default SolutionBlock
