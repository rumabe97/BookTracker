import SplashScreen from "../../screens/SplashScreen";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./StackParamList.ts";
import HomeScreen from "../../screens/Home";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
    return (
        <RootStack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false}}>
            <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
            <RootStack.Screen name="HomeScreen" component={HomeScreen}/>
        </RootStack.Navigator>
    );
};

export default Router;
