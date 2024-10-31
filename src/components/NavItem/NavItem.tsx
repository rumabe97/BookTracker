import Button from "../Button/Button.tsx";
import React from "react";
import {NavItem} from "../Sidebar/SidebarItems.ts";
import {useNavigation, useNavigationState} from "@react-navigation/native";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {NavItemStyles} from "./NavItemStyles.ts";

const NavItemMenu = (item: NavItem) => {
    const navigation = useNavigation();
    const routeName = useNavigationState(state => {
        return state?.routes[state.index]?.name;
    });
    const navigateToScreen = (screen: string) => {
        navigation.navigate(screen as never);
    };

    const {currentTheme} = useTheme();
    const navItemStyles = NavItemStyles(currentTheme);

    return (
        <Button
            title={`${item.label}`}
            onPress={() => navigateToScreen(item.screen)}
            buttonStyle={[
                navItemStyles.navItem,
                routeName === item.screen && navItemStyles.activeNavItem
            ]}
            icon={item.icon}
            textStyle={[navItemStyles.navLabel, routeName === item.screen && navItemStyles.activeNavLabel]}
        />
    );
}

export default NavItemMenu;
