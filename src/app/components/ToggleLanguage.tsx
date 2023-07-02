import { languageText } from '@/shared/locales/utils'
import { localStg } from '@/shared/utils/storage'
import { GlobalOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import { US, VN } from 'country-flag-icons/react/3x2'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { useCommonStore } from '../store/common'

const flagMap: Record<SupportLanguage, React.ReactElement> = {
  en: <US width={24} />,
  vi: <VN width={24} />,
}

function ToggleLanguage() {
  const { i18n } = useTranslation()
  const commonStore = useCommonStore()

  const options = Object.values(['en', 'vi'] as SupportLanguage[]).map((item) => ({
    key: item,
    label: (
      <div className="w-28 flex items-center justify-start gap-2">
        {flagMap[item]}
        <p onClick={() => handleChangeLanguage(item)}>{languageText[item]}</p>
      </div>
    ),
  }))

  function handleChangeLanguage(val: SupportLanguage) {
    commonStore.toggleLanguage(val)
    dayjs.locale(val)
    i18n.changeLanguage(val)
    localStg.set('language', val)
  }
  return (
    <Dropdown
      placement="bottom"
      menu={{
        selectable: true,
        items: options,
        defaultSelectedKeys: [commonStore.language],
      }}
    >
      <Button>
        <GlobalOutlined style={{ strokeWidth: 1.5 }} />
      </Button>
    </Dropdown>
  )
}

export default ToggleLanguage
