import {Text, View} from "react-native";
import React from "react";
import {HeaderStyles} from "./HeaderStyles.ts";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import Button from "../Button";
import {lightTheme} from "../../styles/Themes.ts";
import {useNavigationState} from "@react-navigation/native";


const Header = ({
                    drawer = () => {
                    }
                }) => {
    const {currentTheme, toggleTheme} = useTheme();
    const headerStyles = HeaderStyles(currentTheme);

    const routeName: string = useNavigationState((state) => state ? state.routes[state.index].name : 'SplashScreen');
    const routeNameSplit: string[] = routeName.split(/(?=[A-Z])/);
    const finalRouteName: string = routeNameSplit.join(" ");
    return (
        <View style={headerStyles.header}>
            <Button
                title="☰"
                onPress={drawer}
                textStyle={headerStyles.menuIcon}
            />
            <Text style={headerStyles.title}> {finalRouteName}</Text>
            <Button
                title={currentTheme === lightTheme ? '☀️' : '🌙'}
                onPress={toggleTheme}
                textStyle={headerStyles.darkModeToggle}
            />
        </View>
    );
}

export default Header;
