import { useAuthStore } from '@/app/store/auth'
import { localStg } from '@/shared/utils/storage'
import { LogoutOutlined } from '@ant-design/icons'
import { Avatar, Dropdown } from 'antd'
import { useTranslation } from 'react-i18next'

const AvatarMenu = () => {
  const { t } = useTranslation()
  const { fetchUserFromStg } = useAuthStore()

  const handleSignOut = () => {
    localStg.clear()
    fetchUserFromStg()
  }
  return (
    <Dropdown
      placement="bottom"
      menu={{
        items: [
          {
            key: 'sign-out',
            label: t('auth.action.signOut'),
            icon: <LogoutOutlined />,
            onClick: handleSignOut,
          },
        ],
      }}
    >
      <Avatar className="cursor-pointer" />
    </Dropdown>
  )
}

export default AvatarMenu
