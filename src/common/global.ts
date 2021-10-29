interface ISystemInfo {
  systemHeight: number
}

export interface ILinkInfo {
  productionCenter: string
}

interface IContactsInfoItem {
  name: string
  phoneNumber: string
}

interface IContactsInfo {
  first: IContactsInfoItem
  second: IContactsInfoItem
  serviceMail: string
  bdMail: string
  address: {
    wuhan: string
    beijing: string
  }
}

interface IGlobalData {
  linkInfo: ILinkInfo
  systemInfo: ISystemInfo
  contactsInfo: IContactsInfo
}

const globalData: IGlobalData = {
  linkInfo: {
    productionCenter:
      "http://account-test.ganlin.com/user/login?callback=http://cp-test.ganlin.com/user/login&followup=http://cp-test.ganlin.com/product/m&app_id=aca4sos3mvzzvc",
  },
  systemInfo: {
    systemHeight: 0,
  },
  contactsInfo: {
    first: {
      name: "张先生",
      phoneNumber: "186 1189 4648",
    },
    second: {
      name: "叶先生",
      phoneNumber: "189 4292 9577",
    },
    serviceMail: "service@ganlin.com",
    bdMail: "bd@ganlin.com",
    address: {
      wuhan: "湖北省武汉市洪山区光谷创业街三人行众创基地",
      beijing: "北京市海淀区中关村大街甲28号5层北侧5F154号",
    },
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
