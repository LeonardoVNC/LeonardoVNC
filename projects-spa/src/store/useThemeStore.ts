import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getPalette } from "../theme";

export type ThemeName = "light" | "dark";

interface ThemeState {
    theme: ThemeName;
    toggleTheme: () => void;
    palette: any;
}

const defaultPalette = getPalette("dark")

const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => ({
            theme: "dark",
            palette: defaultPalette,
            toggleTheme: () => {
                set((state) => ({
                    theme: state.theme === "light" ? "dark" : "light",
                    palette: getPalette(get().theme === "light" ? "dark" : "light")
                }))
            }
        }),
        {
            name: "port-theme"
        }
    )
);

export default useThemeStore;