import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./StackParamList.ts";
import {BookStatus} from "../entities/BookStatus";

const RootStack = createNativeStackNavigator<RootStackParamList>();
const SplashScreenLazy = React.lazy(() => import('../../screens/SplashScreen'));
const HomeScreenLazy = React.lazy(() => import('../../screens/Home'));
const SearchScreenLazy = React.lazy(() => import('../../screens/SearchBook'));
const CompletedBooks = React.lazy(() => import('../../screens/MyBooks'));

const Router = () => {
    return (
        <RootStack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false}}>
            <RootStack.Screen name="SplashScreen" component={SplashScreenLazy}/>
            <RootStack.Screen name="HomeScreen" component={HomeScreenLazy}/>
            <RootStack.Screen name="SearchBook" component={SearchScreenLazy}/>
            <RootStack.Screen name="CompletedBooks" component={CompletedBooks} initialParams={{status:BookStatus.Completed}}/>
        </RootStack.Navigator>
    );
};

export default Router;
