import React, { FC } from "react"
import Access from "@/sections/Solution/Access"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Solution: FC<Props> = (props) => {
  return (
    <div className='solution'>
      <Access />
      <div className='solution__catalogue'></div>
    </div>
  )
}

Solution.defaultProps = defaultProps

export default Solution
