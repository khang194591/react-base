import { DashboardOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface Props {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const items = [
  {
    key: "/",
    label: "common.title.quickMatching",
    icon: <DashboardOutlined />,
    children: null,
  },
];

function Sider({ collapsed, setCollapsed }: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const siderItems = useCallback(
    () =>
      items.map((item) => ({
        ...item,
        label: t(item.label),
        onClick: () => navigate(item.key),
      })),
    [t, navigate]
  );

  return (
    <Layout.Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={80}
      width={256}
      onCollapse={(value) => setCollapsed(value)}
      className="border-solid border-0 border-r border-slate-300 font-medium"
    >
      <Menu
        theme="light"
        mode="inline"
        className="text-slate-500 px-2 pt-2"
        defaultSelectedKeys={[location.pathname]}
        items={siderItems()}
      />
    </Layout.Sider>
  );
}

export default Sider;
