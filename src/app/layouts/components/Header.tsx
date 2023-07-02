import ToggleFullScreen from '@/app/components/ToggleFullScreen'
import ToggleLanguage from '@/app/components/ToggleLanguage'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Layout, theme } from 'antd'
import { uniqBy } from 'lodash'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import AvatarMenu from './AvatarMenu'

interface Props {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const mapPathname: Record<string, string> = {
  '/': 'home',
  '/user': 'user',
  '/attendance': 'attendance',
}

function Header({ collapsed, setCollapsed }: Props) {
  const { t } = useTranslation()
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const { pathname } = useLocation()

  const items = [
    { title: t('common.module.label.home'), path: '' },
    { title: t(`common.module.label.${mapPathname[pathname]}`) },
  ]

  return (
    <Layout.Header
      className="flex items-center px-4 h-16 border-slate-300 border-solid border-0 border-b"
      style={{ background: colorBgContainer }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center p-4"
      />
      <Breadcrumb className="hidden md:block ml-4" items={uniqBy(items, 'title')} />
      <span className="flex-1" />
      <div className="inline-flex gap-2">
        <ToggleFullScreen />
        <ToggleLanguage />
        <AvatarMenu />
      </div>
    </Layout.Header>
  )
}

export default Header
