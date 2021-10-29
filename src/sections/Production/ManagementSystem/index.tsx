import React, { FC, Fragment } from "react"
import { useGetWindowHeight } from "@/common/hooks"
import AnchorPoint from "@/components/AnchorPoint"
import CustomButton from "@/components/CustomButton"
import TabBlock, { Props as TabBlockProps } from "@/components/TabBlock"
import ModuleGird from "./ModuleGird"
import "./index.scss"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const tabList: TabBlockProps["tabList"][0][] = [
  {
    text: "物业服务",
    icon: <i className='ri-archive-fill'></i>,
    content: (
      <ModuleGird
        columns={3}
        rows={2}
        data={[
          {
            icon: "",
            title: "小区主数据",
            content:
              "全面管理小区楼栋、单元、房间、住户和员工等基础数据，有据可查。",
          },
          {
            icon: "",
            title: "物业工单",
            content:
              "住户在甘邻 APP 提交服务工单，工作人员在电脑和手机上在线处理。",
          },
          {
            icon: "",
            title: "通知公告",
            content:
              "物业可以一键推送公告至住户手机，让住户快速了解小区各类信息。",
          },
          {
            icon: "",
            title: "小区活动",
            content:
              "小区活动可以一键推送至住户的手机了。我们还提供了丰富的工具和供应商，举办活动更简单。",
          },
          {
            icon: "",
            title: "访客管理",
            content:
              "住户在甘邻 APP 上创建访客码，可以通过微信转发。所有访问记录都有据可查。",
          },
          {
            icon: "",
            title: "先进简便的权限管理",
            content:
              "我们设计了非常健全的角色和权限系统，物业员工很容易上手和管理。",
          },
        ]}
      />
    ),
  },
  {
    text: "收费管理",
    icon: <i className='ri-archive-fill'></i>,
    content: (
      <ModuleGird
        columns={3}
        rows={2}
        data={[
          {
            icon: "",
            title: "台账管理",
            content: "小区物业费台账，灵活的账单调整，完善的日志记录。",
          },
          {
            icon: "",
            title: "自动生成账单",
            content: "一次配置，自动生成待缴费账单。",
          },
          {
            icon: "",
            title: "AI 催缴",
            content:
              "代替人工催缴，借助 APP 消息、短信、自动语音电话，自动向业主催收。",
          },
          {
            icon: "",
            title: "用户自助缴费",
            content:
              "住户可以在甘邻 APP 上缴费了，物业管理人员可以在后台实时看到收缴台账。",
          },
          {
            icon: "",
            title: "资金极速到账",
            content:
              "用户完成缴费后，资金会立即执行到账流程，极高的资金周转效率。",
          },
        ]}
      />
    ),
  },

  {
    text: "移动办公",
    icon: <i className='ri-archive-fill'></i>,
    content: (
      <ModuleGird
        columns={3}
        rows={2}
        data={[
          {
            icon: "",
            title: "物业管理",
            content: "管理门禁，处理工单，审核认证，手机上都能做。",
          },
          {
            icon: "",
            title: "商家服务",
            content: "包含商城订单配送，订单管理，和售后处理等。",
          },
          {
            icon: "",
            title: "安防设备管理",
            content: "包含门禁设备安装助手，设备远程管理等功能。",
          },
        ]}
      />
    ),
  },
  {
    text: "智能安防",
    icon: <i className='ri-archive-fill'></i>,
    content: (
      <ModuleGird
        columns={3}
        rows={2}
        data={[
          {
            icon: "",
            title: "门禁安装助手",
            content: "配合甘邻的硬件设备，可能是安装维护最简单的门禁。",
          },
          {
            icon: "",
            title: "设备管理",
            content:
              "我们提供了非常简洁的设备管理功能，可以很方便的查看，和远程维护。",
          },
          {
            icon: "",
            title: "门禁卡管理",
            content: "简单直观的完成开卡、销卡，以及查看刷卡日志。",
          },
          {
            icon: "",
            title: "安防大数据",
            content:
              "甘邻的所有硬件设备都运行在云端。您可以借助我们的仪表盘功能，全面了解小区的安防情况。",
          },
          {
            icon: "",
            title: "安防日志",
            content:
              "甘邻的所有门禁都运行在云端，我们会自动生成安防日志，授权后也可以随时导出或对接。",
          },
        ]}
      />
    ),
  },
]

const ManagementSystem: FC<Props> = (props) => {
  const { height } = useGetWindowHeight()
  return (
    <Fragment>
      <section
        className='management-system__wrapper'
        style={{
          height: height * 0.8,
        }}
      >
        <AnchorPoint pointId='management-system' />
        <div className='management-system grid'>
          <div
            className='management-system__text'
            data-aos='fade-right'
            data-aos-duration='700'
          >
            <div className='management-system__title'>
              <span className='management-system__title--active'>数字</span>
              物业平台
            </div>
            <div className='management-system__description'>
              简单易用，不失强大
            </div>
            <div
              className='management-system__controller'
              data-aos='fade-right'
              data-aos-delay='300'
            >
              <CustomButton type='primary' size='default'>
                立即访问
              </CustomButton>
            </div>
          </div>
          <div className='management-system__show-img'>
            <div
              className='management-system__show-img__background'
              data-aos='fade-left'
              data-aos-duration='700'
              data-aos-delay='300'
            ></div>
            <div
              className='management-system__show-img__content'
              data-aos='fade-left'
            ></div>
            <div
              className='management-system__show-img__content__mini-program'
              data-aos='fade-left'
            ></div>
          </div>
        </div>
      </section>
      <div className='management-system__detail'>
        <TabBlock tabList={tabList} tabHeaderColor='#fff' />
      </div>
    </Fragment>
  )
}

ManagementSystem.defaultProps = defaultProps

export default ManagementSystem
