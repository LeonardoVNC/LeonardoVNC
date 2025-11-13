import type { ThemeConfig } from "antd";
import { theme as antdTheme } from "antd";

export const darkPalette = {
  P0: "#0d1117",
  P1: "#161b22",
  P2: "#21262d",
  P3: "#30363d",
  white: "#f0f6fc",
  neutral50: "#f0f6fc",
  neutral100: "#e6edf3",
  neutral200: "#d0d7de",
  neutral300: "#8b949e",
  neutral400: "#6e7681",
  neutral500: "#484f58",
  neutral600: "#30363d",
  neutral700: "#21262d",
  neutral800: "#161b22",
  neutral900: "#0d1117",
  successLight: "#238636",
  successAntd: "#238636",
  warningLight: "#d29922",
  infoLight: "#58a6ff",
  errorLight: "#da3633",
  darkPrimary: "#58a6ff",
  darkText: "#f0f6fc",
  darkTextSecondary: "#8b949e",
  green: "#238636",
  red: "#da3633",
  blue: "#58a6ff",
  lightBlue: "#aff5ff",
};

const borderWidth = 1;

export const darkTheme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm],
  token: {
    lineWidth: borderWidth,
    colorPrimary: "#58a6ff",
    colorInfo: "#58a6ff",
    colorSuccess: "#238636",
    colorWarning: "#d29922",
    colorError: "#da3633", 
    fontFamily: "Inter, sans-serif",
    borderRadius: 12,
    colorBgBase: "#0d1117",
    colorBgLayout: "#161b22",
    colorBgContainer: "#21262d",
    colorBgElevated: "#30363d", 
    colorBorder: "#30363d",
    colorText: "#f0f6fc", 
    colorTextPlaceholder: "#8b949e",
    colorTextSecondary: "#8b949e", 
    colorLink: "#58a6ff", 
    colorLinkHover: "#79c0ff",
    colorFill: "#21262d", 
    colorFillSecondary: "#30363d",
    colorTextDisabled: "#6e7681",
  },
  components: {
    Button: {
      colorPrimary: "#58a6ff", 
      colorPrimaryHover: "#79c0ff",
      colorPrimaryActive: "#58a6ff",
      primaryShadow: "none", 
      controlHeight: 40,
      controlHeightLG: 44,
      borderRadius: 12, 
    },
    Card: { 
      borderRadiusLG: 12, 
      colorBorder: "#30363d",
      colorBgContainer: "#21262d", 
    },
    Input: { 
      controlHeight: 40,
      colorBorder: "#30363d",
      colorBgContainer: "#161b22",
      colorText: "#8b949e",
      borderRadius: 8,
    },
    Select: {
      controlHeight: 40,
      colorText: "#8b949e",
      borderRadius: 8,
    },
    Tag: { 
      defaultBg: "#21262d", 
      defaultColor: "#f0f6fc", 
      colorBorder: "#30363d",
    },
  },
};

export const lightPalette = {
  P0: "#ffffff",
  P1: "#f7fafc",
  P2: "#f0f6fb",
  P3: "#e6edf3",
  white: "#0b1220",
  neutral50: "#0b1220",
  neutral100: "#1b2a37",
  neutral200: "#2b3b4a",
  neutral300: "#566c83",
  neutral400: "#7b93a9",
  neutral500: "#98a9bf",
  neutral600: "#cde4ff",
  neutral700: "#eaf6ff",
  neutral800: "#f8fcff",
  neutral900: "#ffffff",
  successLight: "#237a3e",
  warningLight: "#b37a00",
  infoLight: "#096dd9",
  errorLight: "#a61d24",
  darkPrimary: "#096dd9",
  darkText: "#0b1220",
  darkTextSecondary: "#566c83",
  green: "#237a3e",
  red: "#a61d24",
  blue: "#096dd9",
  lightBlue: "#dbeeff",
};

export const lightTheme: ThemeConfig = {
  algorithm: [antdTheme.defaultAlgorithm],
  token: {
    lineWidth: borderWidth,
    colorPrimary: "#096dd9",
    colorInfo: "#096dd9",
    colorSuccess: "#237a3e",
    colorWarning: "#b37a00",
    colorError: "#a61d24",
    fontFamily: "Inter, sans-serif",
    borderRadius: 12,
    colorBgBase: "#ffffff",
    colorBgLayout: "#f7fafc",
    colorBgContainer: "#ffffff",
    colorBgElevated: "#f0f6fb",
    colorBorder: "#e6edf3",
    colorText: "#0b1220",
    colorTextPlaceholder: "#7b93a9",
    colorTextSecondary: "#566c83",
    colorLink: "#096dd9",
    colorLinkHover: "#58a6ff",
    colorFill: "#ffffff",
    colorFillSecondary: "#f0f6fb",
    colorTextDisabled: "#98a9bf",
  },
  components: {
    Button: {
      colorPrimary: "#096dd9",
      colorPrimaryHover: "#2b6fd6",
      colorPrimaryActive: "#093ea6",
      primaryShadow: "none",
      controlHeight: 40,
      controlHeightLG: 44,
      borderRadius: 12,
    },
    Card: {
      borderRadiusLG: 12,
      colorBorder: "#e6edf3",
      colorBgContainer: "#ffffff",
    },
    Input: {
      controlHeight: 40,
      colorBorder: "#e6edf3",
      colorBgContainer: "#f7fafc",
      colorText: "#67676d",
      borderRadius: 8,
    },
    Select: {
      controlHeight: 40,
      colorText: "#67676d",
      borderRadius: 8,
    },
    Tag: {
      defaultBg: "#f7fafc",
      defaultColor: "#0b1220",
      colorBorder: "#e6edf3",
    },
  },
};

export type ThemeName = "light" | "dark";

export function getThemeConfig(name: ThemeName): ThemeConfig {
  return name === "dark" ? darkTheme : lightTheme;
}

export function getPalette(name: ThemeName) {
  return name === "dark" ? darkPalette : lightPalette;
}
