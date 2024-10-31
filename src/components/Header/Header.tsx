import {View} from "react-native";
import React from "react";
import {HeaderStyles} from "./HeaderStyles.ts";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import Button from "../Button";
import {lightTheme} from "../../styles/Themes.ts";

const Header = ({
                    drawer = () => {
                    }
                }) => {
    const {currentTheme, toggleTheme} = useTheme();
    const headerStyles = HeaderStyles(currentTheme);


    return (
        <View style={headerStyles.header}>
            <Button
                title="☰"
                onPress={drawer}
                textStyle={headerStyles.menuIcon}
            />
            <Button
                title={currentTheme === lightTheme ? '☀️' : '🌙'}
                onPress={toggleTheme}
                textStyle={headerStyles.darkModeToggle}
            />
        </View>
    );
}

export default Header;
