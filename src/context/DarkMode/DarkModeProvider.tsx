import React, {ReactNode, useContext, useEffect, useState} from 'react';
import {ThemeContext} from "./DarkModeContext.ts";
import {darkTheme, lightTheme} from "../../styles/Themes.ts";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Appearance} from 'react-native';

export const ThemeProvider = ({children}: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    let currentTheme = isDarkMode ? darkTheme : lightTheme;

    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await AsyncStorage.getItem('theme') || Appearance.getColorScheme();
            currentTheme = savedTheme === 'dark' ? darkTheme : lightTheme;
            setIsDarkMode(savedTheme === 'dark');
        };
        loadTheme().then();
    }, []);

    const toggleTheme = async () => {
        setIsDarkMode(!isDarkMode);
        currentTheme = isDarkMode ? darkTheme : lightTheme;
        await AsyncStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{isDarkMode, currentTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
