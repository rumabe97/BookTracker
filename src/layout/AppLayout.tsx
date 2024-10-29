import React from 'react';
import {View} from 'react-native';
import Router from "../core/routing/AppRouting.tsx";
import {useNavigationState} from "@react-navigation/native";
import {AppLayoutStyles} from "./AppLayoutStyles.ts";
import Header from "../components/Header/Header.tsx";


const AppLayout: React.FC = () => {
    const routeName = useNavigationState((state) => state ? state.routes[state.index].name : 'SplashScreen');
    return (
        <View style={AppLayoutStyles.container}>
            {routeName !== 'SplashScreen' && <Header/>}
            <Router/>
        </View>
    );
};

export default AppLayout;
