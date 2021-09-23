import { Link } from "gatsby"
import React, { FC, useState } from "react"

export const themeConfigDefault = {
  headerButton: (
    <>
      <Link to='/#'>登录</Link>
    </>
  ),
}

const GlobalContext = React.createContext({
  visibleOffCanvas: false,
  videoModalVisible: false,
  toggleVideoModal: () => {},
  toggleOffCanvas: () => {},
  closeOffCanvas: () => {},
})

const GlobalProvider: FC = ({ children }) => {
  const [videoModalVisible, setVideoModalVisible] = useState(false)
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false)

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible)
  }

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas)
  }

  const closeOffCanvas = () => {
    setVisibleOffCanvas(false)
  }

  return (
    <GlobalContext.Provider
      value={{
        videoModalVisible,
        visibleOffCanvas,
        toggleVideoModal,
        toggleOffCanvas,
        closeOffCanvas,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
export { GlobalProvider }
