import React from 'react';
import AppLayout from "./layout";
import {NavigationContainer} from "@react-navigation/native";
import {ThemeProvider} from "./context/DarkMode/DarkModeProvider.tsx";

function App(): React.JSX.Element {

    return (
        <ThemeProvider>
            <NavigationContainer>
                <AppLayout/>
            </NavigationContainer>
        </ThemeProvider>
    );
}


export default App;
