import { useEffect, useState } from "react"
import { compose, prop, tap } from "ramda"
import Aos from "aos"
import { setGlobalData } from "./global"

const isBrowser = typeof window !== "undefined"

interface ITarget {
  innerWidth: number
  innerHeight: number
}

/**
 * hooks-获取当前是视口高度
 * @returns
 */
export const useGetWindowHeight = () => {
  // 注意：此处初始高度为999，目的在于避免aos动画初始化异常
  const [height, setHeight] = useState(9999)

  useEffect(() => {
    const onResize = compose(
      setHeight,
      tap((v: number) =>
        setGlobalData("systemInfo", {
          systemHeight: v,
        })
      ),
      prop("innerHeight"),
      prop<"target", ITarget>("target")
    ) as (event: unknown) => void

    if (isBrowser) {
      const { innerHeight } = window

      setHeight(innerHeight)
      window.addEventListener("resize", onResize)
    }

    return () => window.removeEventListener("resize", onResize)
  }, [isBrowser])

  useEffect(() => {
    Aos.init({ once: true })
  }, [height])

  return {
    height: height <= 789 ? 789 : height,
  }
}

/**
 * 判断当前是否是移动设备
 * @returns
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onResize = (event: UIEvent) => {
      const { target } = event
      const { innerHeight, innerWidth } = target as unknown as ITarget
      setIsMobile(innerHeight / innerWidth > 1.3)
    }

    if (isBrowser) {
      const { innerWidth, innerHeight } = window

      setIsMobile(innerHeight / innerWidth > 1.3)
      window.addEventListener("resize", onResize)
    }

    return () => window.removeEventListener("resize", onResize)
  }, [isBrowser])

  return isMobile
}
