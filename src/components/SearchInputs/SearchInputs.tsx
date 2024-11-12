import React, {useCallback, useState} from "react";
import {View} from "react-native";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {SearchInputsStyles} from "./SearchInputsStyles.ts";
import Button from "../Button";
import SearchInput from "../Searchinput";

const SearchInputs = ({handleTitleAuthor}: { handleTitleAuthor: (newValue: string[]) => void }) => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const {currentTheme} = useTheme();
    const searchInputStyles = SearchInputsStyles(currentTheme);

    const handleValue = useCallback((value: string, type?: string) => {
        type === 'Author' ? setAuthor(value) : setTitle(value);
    }, [])


    return (
        <View style={searchInputStyles.container}>
            <SearchInput title={'Author'} handleValue={handleValue}/>
            <SearchInput title={'Title'} handleValue={handleValue}/>

            <Button
                title=''
                onPress={() => {
                    const newValue = [title, author];
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
