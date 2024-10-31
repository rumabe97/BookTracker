import {createContext} from "react";
import {ThemeType} from "../../styles/Themes.ts";

type ThemeContextType = {
    isDarkMode: boolean;
    currentTheme: ThemeType;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
