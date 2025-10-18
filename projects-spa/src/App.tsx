import './App.css'
import { App as AntApp, ConfigProvider } from "antd";
import { AppRoutes } from './routes/routes'
import { getThemeConfig } from "./theme";
import useThemeStore from "./store/useThemeStore";

function App() {
  const theme = useThemeStore((s) => s.theme);

  return (
    <ConfigProvider theme={getThemeConfig(theme)} {...{ cssVar: { key: "app" } }}>
      <AntApp>
        <AppRoutes />
      </AntApp>
    </ConfigProvider>
  )
}

export default App
