import './App.css'
import { App as AntApp, ConfigProvider } from "antd";
import { AppRoutes } from './routes/routes'
import { darkTheme } from "./theme";

function App() {

  return (
    <ConfigProvider theme={darkTheme} {...{ cssVar: { key: "app" } }}>
      <AntApp>
        <AppRoutes />
      </AntApp>
    </ConfigProvider>
  )
}

export default App
