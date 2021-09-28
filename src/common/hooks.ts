import { compose, prop, tap } from "ramda"
import { useEffect, useState } from "react"
import { setGlobalData } from "./global"

const isBrowser = typeof window !== "undefined"

interface ITarget {
  innerHeight: number
}

/**
 * hooks-获取当前是视口高度
 * @returns
 */
export const useGetWindowHeight = () => {
  const [height, setHeight] = useState(0)

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

  return {
    height,
  }
}
