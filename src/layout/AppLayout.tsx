import React, {useCallback, useRef} from 'react';
import {DrawerLayoutAndroid, View} from 'react-native';
import Router from "../core/routing/AppRouting.tsx";
import {useNavigationState} from "@react-navigation/native";
import {AppLayoutStyles} from "./AppLayoutStyles.ts";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {LoaderProvider} from "../context/Loader/LoaderProvider.tsx";
import Loader from "../components/Loader";
import CustomToast from "../components/CustomToast";


const AppLayout: React.FC = () => {
    const routeName = useNavigationState((state) => state ? state.routes[state.index].name : 'SplashScreen');
    const drawer = useRef<DrawerLayoutAndroid>(null);

    const handleCloseDrawer = useCallback(() => {
        if (drawer?.current) drawer.current.closeDrawer();
    }, [])

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition="left"
            renderNavigationView={() => <Sidebar handleCloseDrawer={handleCloseDrawer}/>}>
            <View style={AppLayoutStyles.container}>
                {routeName !== 'SplashScreen' && <Header drawer={() => drawer.current?.openDrawer()}/>}
                <LoaderProvider>
                    <Router/>
                    <Loader/>
                </LoaderProvider>
                <CustomToast/>
            </View>
        </DrawerLayoutAndroid>
    );
};
export default AppLayout;
