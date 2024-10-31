import React, {useRef} from 'react';
import {DrawerLayoutAndroid, View} from 'react-native';
import Router from "../core/routing/AppRouting.tsx";
import {useNavigationState} from "@react-navigation/native";
import {AppLayoutStyles} from "./AppLayoutStyles.ts";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


const AppLayout: React.FC = () => {
    const routeName = useNavigationState((state) => state ? state.routes[state.index].name : 'SplashScreen');
    const drawer = useRef<DrawerLayoutAndroid>(null);

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition="left"
            renderNavigationView={() => <Sidebar/>}>
            <View style={AppLayoutStyles.container}>
                {routeName !== 'SplashScreen' && <Header drawer={() => drawer.current?.openDrawer()}/>}
                <Router/>
            </View>
        </DrawerLayoutAndroid>
    );
};
export default AppLayout;
