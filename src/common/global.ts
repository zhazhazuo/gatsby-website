interface ISystemInfo {
  systemHeight: number
}

interface IGlobalData {
  systemInfo: ISystemInfo
}

const globalData: IGlobalData = {
  systemInfo: {
    systemHeight: 0,
  },
}

export const setGlobalData = <K extends keyof IGlobalData>(
  key: K,
  val: Partial<IGlobalData[K]>
) => {
  const preData = getGlobalData(key)

  globalData[key] = {
    ...preData,
    ...val,
  }
}

export const getGlobalData = <T extends keyof IGlobalData>(key: T) => {
  return globalData[key] as IGlobalData[T]
}
