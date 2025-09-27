import { Divider, Layout, Menu } from "antd";
import { HomeOutlined, MenuFoldOutlined, MenuOutlined, ProjectOutlined } from "@ant-design/icons";
import { useState, useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProfileInfo from "../components/ProfileInfo";

const { Sider, Content } = Layout;

const navItems = [
  { key: "/", icon: <HomeOutlined />, label: <Link to="/">Home</Link> },
  {
    key: "/projects",
    icon: <ProjectOutlined />,
    label: <Link to="/projects">Projects</Link>,
  },
];

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();

  const selectedKey = useMemo(() => {
    const match = navItems.find((i) =>
      i.key === "/" ? pathname === "/" : pathname.startsWith(i.key)
    );
    return match?.key ?? "/";
  }, [pathname]);

  const triggerIcon = (
    <>
      {collapsed ? (
        <MenuOutlined style={{ fontSize: 24, color: "var(--ant-colorText)" }} />
      ) : (
        <MenuFoldOutlined style={{ fontSize: 24, color: "var(--ant-colorText)" }} />
      )}
    </>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={250}
        collapsedWidth={96}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={triggerIcon}
        style={{
          padding: "16px 0",
          background: "var(--ant-colorBgContainer)",
          borderRight: "1px solid var(--ant-colorBorder)",
          boxShadow: "2px 0 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ProfileInfo
          photoURL="https://avatars.githubusercontent.com/u/165107546?v=4"
          name="LeonardoVNC"
          collapsed={collapsed}
        />

        <Divider style={{ margin: "0 16px 16px 0" }} />

        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          items={navItems}
          className="px-3"
          style={{
            borderInlineEnd: 0,
            flex: 1,
            overflowY: "auto",
            background: "transparent",
            color: "var(--ant-colorText)", 
          }}
        />
      </Sider>

      <Layout className="flex flex-col min-h-0">
        <Content 
          className="flex-1 min-h-0 overflow-hidden pt-4 md:p-6" 
          style={{ 
            background: "var(--ant-colorBgLayout)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
