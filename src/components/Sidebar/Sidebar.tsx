import {View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {SidebarStyles} from "./SidebarStyles.ts";
import SidebarHeader from "../SidebarHeader/SidebarHeader.tsx";
import {navItems} from "./SidebarItems.ts";
import NavItemMenu from "../NavItem/NavItem.tsx";

const Sidebar = () => {
    const {currentTheme} = useTheme();
    const sidebarStyles = SidebarStyles(currentTheme);

    return (
        <SafeAreaView style={sidebarStyles.container}>
            <View style={sidebarStyles.sidebar}>
                <SidebarHeader/>
                <View style={sidebarStyles.navContainer}>
                    {navItems.map((item, index) => (
                        <NavItemMenu icon={item.icon} label={item.label} screen={item.screen} key={index}/>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Sidebar;
