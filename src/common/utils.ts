import { navigate } from "gatsby-link"

export const downloadHandle = () => {
  const linkAndroid = "http://cdn.img.ganlin.fun/store/ganlin.apk"

  const u = navigator.userAgent
  // 判断是否是 Android 终端
  const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1

  const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  const isWeiXin =
    navigator.userAgent.toLowerCase().indexOf("micromessenger") > -1

  if (!isAndroid && !isIos && !isWeiXin) return

  if (isAndroid) {
    navigate(linkAndroid)
  } else {
    navigate(`https://apps.apple.com/cn/app/%E7%94%98%E9%82%BB/id1544613611`)
  }
}
