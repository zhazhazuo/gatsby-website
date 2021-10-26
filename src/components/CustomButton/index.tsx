import React, { FC } from "react"
import cls from "classnames"
import { createPropsGetter } from "@golink/link-ui"
import "./index.scss"

enum ShapeEnum {
  default = "default",
  capsule = "capsule",
}

type ShapeType = "default" | "capsule"

enum SizeEnum {
  default = "default",
  small = "small",
  large = "large",
}

type SizeType = "default" | "small" | "large"

enum TypeEnum {
  default = "default",
  primary = "primary",
  secondary = "secondary",
  warn = "warn",
}

type TypeType = "default" | "primary" | "secondary" | "warn"

type ElevationLevelType = 0 | 4 | 8 | 16 | 999

interface IProps {}

const defaultProps = {
  full: false,
  ghost: false,
  type: TypeEnum.default as TypeType,
  size: SizeEnum.default as SizeType,
  shape: ShapeEnum.default as ShapeType,
  elevationLevel: 0 as ElevationLevelType,
  onClick: () => {},
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const getProps = createPropsGetter<DefaultProps>()

const CustomButton: FC<Props> = (props) => {
  const { children, type, size, full, ghost, elevationLevel, onClick } =
    getProps(props)
  const ClassName = cls(
    `custom-button custom-button--${type} custom-button--${size}`,
    {
      "custom-button--ghost": ghost,
      "custom-button--full": full,
      "custom-button--elevation-level4": elevationLevel === 4,
      "custom-button--elevation-level8": elevationLevel === 8,
      "custom-button--elevation-level16": elevationLevel === 16,
      "custom-button--elevation-level-top": elevationLevel === 999,
    }
  )

  return (
    <button className={ClassName} onClick={onClick}>
      {children}
    </button>
  )
}

CustomButton.defaultProps = defaultProps

export default CustomButton
