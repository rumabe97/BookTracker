import {ReactNode, useContext, useState} from "react";
import {LoaderContext} from "./LoaderContext";

export const LoaderProvider = ({children}: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);

    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);

    return (
        <LoaderContext.Provider value={{isLoading, showLoader, hideLoader}}>
            {children}
        </LoaderContext.Provider>
    );
}

export const useLoader = () => {
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
