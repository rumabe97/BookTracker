import React from 'react';
import AppLayout from "./layout/AppLayout.tsx";
import {NavigationContainer} from "@react-navigation/native";


function App(): React.JSX.Element {

    return (
        <NavigationContainer>
            <AppLayout/>
        </NavigationContainer>
    );
}


export default App;
