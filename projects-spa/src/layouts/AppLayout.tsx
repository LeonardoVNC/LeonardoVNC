import { Divider, Layout, Menu, Grid, Tooltip, Button } from "antd";  // Agrega Tooltip y Button
import { FolderOpenOutlined, HomeOutlined, MenuFoldOutlined, MenuOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useState, useMemo, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProfileInfo from "../components/ProfileInfo";
import useProfileInfo from "../hooks/useProfileInfo";
import useThemeStore from "../store/useThemeStore";

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
  const { pathname } = useLocation();
  const { getName, getAvatar } = useProfileInfo();
  const { theme, setTheme, palette } = useThemeStore();
  const [collapsed, setCollapsed] = useState(false);
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const screens = useBreakpoint();
  const isMobile = !screens?.md;
  const SIDER_WIDTH = 250;
  const SIDER_COLLAPSED_WIDTH = 96;

  const selectedKey = useMemo(() => {
    const match = navItems.find((i) =>
      i.key === "/" ? pathname === "/" : pathname.startsWith(i.key)
    );
    return match?.key ?? "/";
  }, [pathname]);

  const loadInfo = () => {
    setName(getName());
    setAvatar(getAvatar());
  }

  useEffect(() => {
    loadInfo();
  }, [])

  const ThemeSelector = useMemo(() => {
    return (
      <Button
        type="text"
        icon={theme === "light" ? <MoonOutlined /> : <SunOutlined />}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
        }}
        aria-label="Toggle theme"
      />
    )
  }, [theme])

  const MenuTrigger = useMemo(() => {
    return (
      <Button
        type="text"
        icon={collapsed ? <MenuOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
        }}
        aria-label="Toggle menu"
      />
    )
  }, [collapsed])

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!isMobile && (
        <Sider
          width={SIDER_WIDTH}
          collapsedWidth={SIDER_COLLAPSED_WIDTH}
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          trigger={null}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            height: "100vh",
            padding: "16px 0",
            background: "var(--app-colorBgContainer)",
            borderRight: "1px solid var(--app-colorBorder)",
            boxShadow: "2px 0 4px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <ProfileInfo photoURL={avatar} name={name} collapsed={collapsed} />

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
                color: "var(--app-colorText)",
              }}
            />

            <Divider style={{ margin: "0 8px 8px 0" }} />

            <div style={{
              display: 'flex',
              flexDirection: collapsed ? 'column' : 'row',
              justifyContent: collapsed ? 'center' : 'space-around',
              alignItems: 'center',
              padding: '10px',
              gap: collapsed ? '8px' : '0',
            }}>
              <Tooltip key={`theme-${collapsed}`} title={`Enable ${theme === "light" ? "dark" : "light"} theme`}>
                {ThemeSelector}
              </Tooltip>
              <Tooltip key={`menu-trigger-${collapsed}`} title={collapsed ? "Open menu" : "Close menu"}>
                {MenuTrigger}
              </Tooltip>
            </div>
          </div>
        </Sider>
      )}

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

      {isMobile && (
        <div
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 3,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            items={navItems}
            style={{
              width: "100%",
              // background: palette.P0
            }}
          />
        </div>
      )}
    </Layout>
  );
}