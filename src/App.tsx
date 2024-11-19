import React from 'react';
import AppLayout from "./layout";
import {NavigationContainer} from "@react-navigation/native";
import {ThemeProvider} from "./context/DarkMode/DarkModeProvider.tsx";
import CustomToast from "./components/CustomToast";

function App(): React.JSX.Element {

    return (
        <ThemeProvider>
            <NavigationContainer>
                <AppLayout/>
            </NavigationContainer>
            <CustomToast/>
        </ThemeProvider>
    );
}


export default App;
