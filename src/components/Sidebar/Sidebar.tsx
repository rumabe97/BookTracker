import {View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {SidebarStyles} from "./SidebarStyles.ts";
import SidebarHeader from "../SidebarHeader";
import {navItems} from "./SidebarItems.ts";
import NavItemMenu from "../NavItem";

const Sidebar = ({handleCloseDrawer}: { handleCloseDrawer: () => void }) => {
    const {currentTheme} = useTheme();
    const sidebarStyles = SidebarStyles(currentTheme);

    return (
        <SafeAreaView style={sidebarStyles.container}>
            <View style={sidebarStyles.sidebar}>
                <SidebarHeader/>
                <View style={sidebarStyles.navContainer}>
                    {navItems.map((item, index) => (
                        <NavItemMenu item={item} handleCloseDrawer={handleCloseDrawer} key={index}/>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Sidebar;
