import { Divider, Layout, Menu, Grid } from "antd";
import { FolderOpenOutlined, HomeOutlined, MenuFoldOutlined, MenuOutlined } from "@ant-design/icons";
import { useState, useMemo, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProfileInfo from "../components/ProfileInfo";
import useProfileInfo from "../hooks/useProfileInfo";

const { Sider, Content } = Layout;
const { useBreakpoint } = Grid;

const navItems = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>
  },
  {
    key: "/projects",
    icon: <FolderOpenOutlined />,
    label: <Link to="/projects">My Projects</Link>,
  },
];

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const { pathname } = useLocation();
  const { getName, getAvatar } = useProfileInfo();

  const screens = useBreakpoint();
  const isMobile = !screens?.md; //TODO mover el menú abajo si es mobile

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

  const loadInfo = () => {
    setName(getName());
    setAvatar(getAvatar());
  }

  useEffect(() => {
    loadInfo();
  }, [])

  const SIDER_WIDTH = 250;
  const SIDER_COLLAPSED_WIDTH = 96;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={SIDER_WIDTH}
        collapsedWidth={SIDER_COLLAPSED_WIDTH}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={triggerIcon}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          height: "100vh",
          padding: "16px 0",
          background: "var(--ant-colorBgContainer)",
          borderRight: "1px solid var(--ant-colorBorder)",
          boxShadow: "2px 0 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ProfileInfo
          photoURL={avatar}
          name={name}
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
            background: "transparent",
            color: "var(--ant-colorText)",
          }}
        />
      </Sider>

      <Layout
        className="flex flex-col min-h-0"
        style={{
          marginLeft: isMobile ? 0 : (collapsed ? SIDER_COLLAPSED_WIDTH : SIDER_WIDTH),
          minHeight: "100vh",
        }}
      >
        <Content
          style={{
            boxSizing: "border-box",
            height: "100vh",
            overflowY: "auto"
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
