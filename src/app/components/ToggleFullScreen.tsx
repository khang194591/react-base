import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ToggleFullScreen = () => {
  const { t } = useTranslation()
  //   const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.getElementById('main'))

  const [fullScreen, setFullScreen] = useState(!!document.fullscreenElement)

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setFullScreen(true)
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
      setFullScreen(false)
    }
  }

  return (
    <Tooltip title={t(fullScreen ? 'common.button.exitFullScreen' : 'common.button.fullScreen')}>
      <Button onClick={toggleFullScreen}>{fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}</Button>
    </Tooltip>
  )
}

export default ToggleFullScreen
