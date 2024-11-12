import React, {useRef} from 'react';
import {DrawerLayoutAndroid, View} from 'react-native';
import Router from "../core/routing/AppRouting.tsx";
import {useNavigationState} from "@react-navigation/native";
import {AppLayoutStyles} from "./AppLayoutStyles.ts";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {LoaderProvider} from "../context/Loader/LoaderProvider.tsx";
import Loader from "../components/Loader";
import Toast, {BaseToast, ErrorToast, ToastConfig} from "react-native-toast-message";


const AppLayout: React.FC = () => {
    const routeName = useNavigationState((state) => state ? state.routes[state.index].name : 'SplashScreen');
    const drawer = useRef<DrawerLayoutAndroid>(null);

    const toastConfig: ToastConfig = {
        error: (props) => (
            <ErrorToast
                {...props}
                style={{borderLeftColor: 'red', maxHeight: 500, height: undefined}}
                contentContainerStyle={{padding: 20, backgroundColor: 'rgba(214,16,16,0.1)'}}
                text1Style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                }}
                text2Style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    flexWrap: 'wrap',
                    width: '100%',
                    flexShrink: 1,
                }}
                text2NumberOfLines={0}
            />
        ),
        success: (props) => (
            <BaseToast
                {...props}
                style={{borderLeftColor: 'green', maxHeight: 500, height: undefined}}
                contentContainerStyle={{padding: 20, backgroundColor: 'rgba(0,166,0,0.1)'}}
                text1Style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                }}
                text2Style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    flexWrap: 'wrap',
                    width: '100%',
                    flexShrink: 1,
                }}
                text2NumberOfLines={0}
            />
        ),
    };

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition="left"
            renderNavigationView={() => <Sidebar/>}>
            <View style={AppLayoutStyles.container}>
                {routeName !== 'SplashScreen' && <Header drawer={() => drawer.current?.openDrawer()}/>}
                <LoaderProvider>
                    <Router/>
                    <Loader/>
                </LoaderProvider>
                <Toast config={toastConfig}/>
            </View>
        </DrawerLayoutAndroid>
    );
};
export default AppLayout;
