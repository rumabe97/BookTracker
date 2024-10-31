import {View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {SidebarStyles} from "./SidebarStyles.ts";
import SidebarHeader from "../SidebarHeader/SidebarHeader.tsx";
import Button from "../Button/Button.tsx";
import {useNavigation, useNavigationState} from "@react-navigation/native";
import {navItems} from "./SidebarItems.ts";

const Sidebar = () => {
    const {currentTheme} = useTheme();
    const sidebarStyles = SidebarStyles(currentTheme);
    const navigation = useNavigation();
    const routeName = useNavigationState(state => {
        return state.routes[state.index]?.name;
    });
    const navigateToScreen = (screen: string) => {
        navigation.navigate(screen as never);
    };

    return (
        <SafeAreaView style={sidebarStyles.container}>
            <View style={sidebarStyles.sidebar}>
                <SidebarHeader/>
                <View style={sidebarStyles.navContainer}>
                    {navItems.map((item) => (
                        <Button
                            title={`${item.icon} ${item.label}`}
                            onPress={() => navigateToScreen(item.screen)}
                            buttonStyle={[
                                sidebarStyles.navItem,
                                routeName === item.screen && sidebarStyles.activeNavItem
                            ]}
                            textStyle={[sidebarStyles.navLabel, routeName === item.screen && sidebarStyles.activeNavLabel]}
                        />
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Sidebar;
