import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./StackParamList.ts";
import {BookStatus} from "../entities/BookStatus";
import SplashScreen from "../../screens/SplashScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>();
const HomeScreenLazy = React.lazy(() => import('../../screens/Home'));
const SearchScreenLazy = React.lazy(() => import('../../screens/SearchBook'));
const MyBooks = React.lazy(() => import('../../screens/MyBooks'));

const Router = () => {
    return (
        <RootStack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false}}>
            <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
            <RootStack.Screen name="Home" component={HomeScreenLazy}/>
            <RootStack.Screen name="SearchBook" component={SearchScreenLazy}/>
            <RootStack.Screen name="CompletedBooks" component={MyBooks}
                              initialParams={{status: BookStatus.Completed}}/>
            <RootStack.Screen name="PendingBooks" component={MyBooks}
                              initialParams={{status: BookStatus.Pending}}/>
            <RootStack.Screen name="WishlistBooks" component={MyBooks}
                              initialParams={{status: BookStatus.Wishlist}}/>
            <RootStack.Screen name="DiscardedBooks" component={MyBooks}
                              initialParams={{status: BookStatus.Discarded}}/>
        </RootStack.Navigator>
    );
};

export default Router;
