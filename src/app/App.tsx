import { theme } from '@/shared/assets/theme'
import { router } from '@/shared/router'
import { App as AntdApp, ConfigProvider } from 'antd'
import en from 'antd/locale/en_US'
import vi from 'antd/locale/vi_VN'
import { RouterProvider } from 'react-router-dom'
import { useCommonStore } from './store/common'

function App() {
  const { language } = useCommonStore()

  function getLocale(language: SupportLanguage) {
    switch (language) {
      case 'en':
        return en
      case 'vi':
        return vi
      default:
        return en
    }
  }

  return (
    <div id="main">
      <ConfigProvider theme={theme} locale={getLocale(language)}>
        <AntdApp>
          <RouterProvider router={router} />
        </AntdApp>
      </ConfigProvider>
    </div>
  )
}

export default App
