import { useEffect, useState } from "react"

/**
 * hooks-获取当前是视口高度
 * @returns
 */
export const useGetWindowHeight = () => {
  if (typeof window !== "undefined") {
    const { innerHeight } = window
    const [height, setHeight] = useState(innerHeight)

    const onResize = () => setHeight(innerHeight)

    useEffect(() => {
      window.addEventListener("resize", onResize)
      return () => window.removeEventListener("resize", onResize)
    }, [onResize])

    return {
      height: `${height}px`,
    }
  }
  return {
    height: "100%",
  }
}
