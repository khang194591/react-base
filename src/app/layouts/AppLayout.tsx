import { Layout } from 'antd'
import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/auth'
import Header from './components/Header'
import Sider from './components/Sider'

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const { user } = useAuthStore()

  if (!user) {
    return <Navigate to={'/auth/sign-in'} />
  }
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout.Content className="overflow-auto">
          <div className="mx-6 my-4 ">
            <Outlet />
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
