import { compose, prop, tap } from "ramda"
import { useEffect, useState } from "react"
import { setGlobalData } from "./global"

interface ITarget {
  innerHeight: number
}

/**
 * hooks-获取当前是视口高度
 * @returns
 */
export const useGetWindowHeight = () => {
  if (typeof window !== "undefined") {
    const { innerHeight } = window
    const [height, setHeight] = useState(innerHeight)

    setGlobalData("systemInfo", {
      systemHeight: innerHeight,
    })

    const onResize = compose(
      setHeight,
      tap((v: number) =>
        setGlobalData("systemInfo", {
          systemHeight: v,
        })
      ),
      prop("innerHeight"),
      prop<"target", ITarget>("target")
    )

    useEffect(() => {
      window.addEventListener("resize", onResize as () => void)
      return () => window.removeEventListener("resize", onResize as () => void)
    }, [onResize])

    return {
      height: height,
    }
  }
  return {
    height: 0,
  }
}
