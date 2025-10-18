import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getPalette } from "../theme";

export type ThemeName = "light" | "dark";

interface ThemeState {
    theme: ThemeName;
    setTheme: (t: ThemeName) => void;
    toggleTheme: () => void;
    palette: any;
    setPalette: (p: any) => void;
}

const defaultPalette = getPalette("dark")

const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: "dark",
            setTheme: (theme: ThemeName) => set({ theme }),
            toggleTheme: () =>
                set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
            palette: defaultPalette,
            setPalette: (palette) => set({ palette }),
        }),
        {
            name: "port-theme"
        }
    )
);

export default useThemeStore;