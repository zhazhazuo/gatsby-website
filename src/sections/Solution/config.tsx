import React from "react"
import { Props as SolutionBlockProps } from "@/components/SolutionBlock"
import ShowContent from "@/sections/Solution/ShowContent"
import BlueBackgroundImg from "@/assets/dot-pattern-blue.png"
import OrangeBackgroundImg from "@/assets/dot-pattern-orange.png"
import BlackBackgroundImg from "@/assets/dot-pattern-black.png"
import AccessImg from "@/assets/section/Solution/access-show.png"
import PayImg from "@/assets/section/Solution/pay-show.png"
import RepairImg from "@/assets/section/Solution/repair-show.png"
import ShoppingImg from "@/assets/section/Solution/shopping-show.png"

export const solutionList: SolutionBlockProps[] = [
  {
    logo: "ri-walk-line",
    title: "小区出行",
    description:
      "甘邻的小区通行方案，由甘邻APP中的『开门』和『访客邀请』，数字物业平台中的『智能安防』『访客管理』，以及自研的二维码门禁机共同组成。提供了二维码开门、蓝牙开门、刷卡开门、APP远程开门、和小程序开门等多种开门方式；住户可以自由的邀请访客到访，甘邻会在云端存储下每次通行和到访的日志，物业可以随时查看和导出历史通行记录。既方便又安全。",
    showContent: <ShowContent background={BlueBackgroundImg} img={AccessImg} />,
  },
  {
    logo: "ri-water-flash-fill",
    title: "智能缴费",
    description:
      "甘邻的物业缴费方案，由甘邻APP中的『缴费』模块，和数字物业平台中的『物业收费』模块共同组成。可以完美的在手机上完成物业缴费、代收水电煤气费，以及其他物业收费项目。同时借助甘邻数字物业平台提供的『智能收费』功能，更可以实现自动短信和电话语音提醒缴费，和基于催收心理学自主研发的定期提醒功能。省时省力。",
    showContent: <ShowContent background={OrangeBackgroundImg} img={PayImg} />,
  },
  {
    logo: "ri-tools-fill",
    title: "报事报修",
    description:
      "甘邻的在线报事报修方案，由甘邻APP中的『维修』『投诉』等模块，和数字物业平台中的『物业服务』模块共同组成，可以全面的覆盖物业的日常服务场景。我们也会借助数字化的能力，监控和统计物业员工的日常处理过程，自动触发服务的回访获得反馈。基于这些数据，管理层可以在物业驾驶舱中直观的看到当前企业的服务情况和客户满意度等。",
    showContent: (
      <ShowContent background={BlackBackgroundImg} img={RepairImg} />
    ),
  },
  {
    logo: "ri-shopping-cart-2-fill",
    title: "社区电商",
    style: "secondary",
    description:
      "甘邻社区电商，是我们提供给物业企业的增值服务，物业企业可以借助系统能力，整合自己的线下资源，为管辖小区的住户，提供电商和有偿配送等服务，多种经营增收。社区电商由甘邻APP中的『优选』模块，和『甘邻商家中心』，甘邻数字物业小程序中的『商家服务』模块共同组成。\n同时甘邻也会提供线上的学习资源，帮助物业企业更好的进行电商运营。",
    showContent: (
      <ShowContent background={OrangeBackgroundImg} img={ShoppingImg} />
    ),
  },
]
