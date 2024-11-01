import {createContext} from "react";

type LoaderContextType = {
    isLoading: boolean;
    hideLoader: () => void;
    showLoader: () => void;
};

export const LoaderContext = createContext<LoaderContextType | undefined>(undefined);
