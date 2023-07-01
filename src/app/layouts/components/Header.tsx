import ToggleLanguage from "@/app/components/ToggleLanguage";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Layout, theme } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

interface Props {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const mapPathname: Record<string, string> = {
  "/": "quickMatching",
  "/quick-matching": "quickMatching",
  "/schedule-matching": "scheduleMatching",
  "/matching-history": "matchingHistory",
  "/chat": "chat",
};

function Header({ collapsed, setCollapsed }: Props) {
  const { t } = useTranslation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { pathname } = useLocation();

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
      <Breadcrumb
        className="hidden md:block ml-4"
        items={[
          { title: t("common.title.home") },
          { title: t(`common.title.${mapPathname[pathname]}`) },
        ]}
      />
      <span className="flex-1" />
      <div className="inline-flex gap-2">
        <ToggleLanguage />
      </div>
      s{" "}
    </Layout.Header>
  );
}

export default Header;
