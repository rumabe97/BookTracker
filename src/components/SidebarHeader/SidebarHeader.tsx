import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {Text, View} from "react-native";
import React from "react";
import {SidebarHeaderStyles} from "./SidebarHeaderStyles.ts";

const SidebarHeader = () => {
    const {currentTheme} = useTheme();
    const sidebarHeaderStyles = SidebarHeaderStyles(currentTheme);


    return (
        <View style={sidebarHeaderStyles.header}>
            <View style={sidebarHeaderStyles.statsContainer}>
                <View style={sidebarHeaderStyles.statItem}>
                    <Text style={sidebarHeaderStyles.statLabel}>Read</Text>
                    <Text style={sidebarHeaderStyles.statValue}>41</Text>
                </View>
                <View style={sidebarHeaderStyles.statItem}>
                    <Text style={sidebarHeaderStyles.statLabel}>Pending</Text>
                    <Text style={sidebarHeaderStyles.statValue}>4</Text>
                </View>
                <View style={sidebarHeaderStyles.statItem}>
                    <Text style={sidebarHeaderStyles.statLabel}>Wishlist</Text>
                    <Text style={sidebarHeaderStyles.statValue}>10</Text>
                </View>
            </View>
        </View>
    );
}

export default SidebarHeader;
