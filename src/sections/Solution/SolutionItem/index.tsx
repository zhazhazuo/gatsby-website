import React, { FC } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import SolutionBlock, {
  Props as SolutionBlockProps,
} from "@/components/SolutionBlock"
import "./index.scss"

interface IProps extends SolutionBlockProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const SolutionITem: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()

  return (
    <section
      className='solution-item'
      style={{
        height,
      }}
    >
      <SolutionBlock {...props} />
    </section>
  )
}

SolutionITem.defaultProps = defaultProps

export default SolutionITem
