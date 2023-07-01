import { languageText } from "@/locales";
import { GlobalOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useCommonStore } from "../store/common";
import { localStg } from "@/utils/storage";

function ToggleLanguage() {
  const { i18n } = useTranslation();
  const commonStore = useCommonStore();

  const options = Object.values(["en", "vi"] as SupportLanguage[]).map(
    (item) => ({
      key: item,
      label: (
        <p onClick={() => handleChangeLanguage(item)}>{languageText[item]}</p>
      ),
    })
  );

  function handleChangeLanguage(val: SupportLanguage) {
    commonStore.toggleLanguage(val);
    dayjs.locale(val);
    // i18n.changeLanguage(val);
    localStg.set("language", val);
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
  );
}

export default ToggleLanguage;
