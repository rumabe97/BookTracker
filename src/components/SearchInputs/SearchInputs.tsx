import React, {useCallback, useState} from "react";
import {View} from "react-native";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {SearchInputsStyles} from "./SearchInputsStyles.ts";
import Button from "../Button";
import SearchInput from "../Searchinput";

const SearchInputs = ({handleTitleAuthor, options}: {
    handleTitleAuthor: (newValue: string[]) => void,
    options: string[]
}) => {
    const [states, setStates] = useState(
        options.reduce((acc: any, option) => {
            acc[option] = "";
            return acc;
        }, {})
    );
    const {currentTheme} = useTheme();
    const searchInputStyles = SearchInputsStyles(currentTheme);

    const handleValue = useCallback((value: string, type?: any) => {
        setStates((prevStates: any) => ({
            ...prevStates,
            [type]: value,
        }));
    }, [])


    return (
        <View style={searchInputStyles.container}>
            {options.map((option, index) => (
                <SearchInput key={index} title={option} handleValue={handleValue}/>
            ))}

            <Button
                title=''
                onPress={() => {
                    const newValue = Object.values(states) as string[];
                    handleTitleAuthor(newValue)
                }}
                buttonStyle={searchInputStyles.searchButton}
                icon={faSearch}
                textStyle={searchInputStyles.searchText}
            />
        </View>
    );
}

export default SearchInputs;
