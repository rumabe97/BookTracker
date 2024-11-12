import React, {useState} from "react";
import {Animated, TextInput, View} from "react-native";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import LabelAnimation from "./Animations/LabelAnimation.ts";
import {SearchInputStyles} from "./SearchInputStyles.ts";

const SearchInput = ({handleValue, title}: {
    handleValue: (newValue: string, type: string) => void,
    title: string
}) => {
    const [value, setValue] = useState('');
    const [toValueAuthor, setToValueAuthor] = useState(1);
    const [valueFocused, setValueFocused] = useState(false);
    const {currentTheme} = useTheme();
    const searchInputStyles = SearchInputStyles(currentTheme);


    const labelAuthorAnimation = LabelAnimation(toValueAuthor);

    return (
        <View style={searchInputStyles.inputContainer}>
            <Animated.Text
                style={[
                    searchInputStyles.label,
                    {
                        transform: [{translateY: labelAuthorAnimation},
                        ],
                        color: valueFocused || value ? currentTheme.primaryColor : currentTheme.secondaryTextColor,
                    },
                ]}
            >
                {title}
            </Animated.Text>
            <TextInput
                style={searchInputStyles.input}
                value={value}
                onChangeText={(prevState: string) => {
                    setValue(prevState);
                    handleValue(prevState, title);
                }}
                onFocus={() => {
                    setValueFocused(true);
                    setToValueAuthor(0);
                }}
                onBlur={() => {
                    setValueFocused(false);
                    if (!value) setToValueAuthor(1);
                }}
                placeholder=""
                placeholderTextColor={currentTheme.secondaryTextColor}
            />
        </View>
    );
}

export default SearchInput;
