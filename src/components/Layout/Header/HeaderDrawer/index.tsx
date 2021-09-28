import React, { FC } from "react"
import "./index.scss"

interface IProps {}

const defaultProps = {
  onMouseEnter: () => {},
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const HeaderDrawer: FC<Props> = (props) => {
  const { children, onMouseEnter } = props
  return (
    <div className='header-drawer' onMouseEnter={onMouseEnter}>
      {children}
    </div>
  )
}

HeaderDrawer.defaultProps = defaultProps

export default HeaderDrawer
