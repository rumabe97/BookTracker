import {Text, View} from "react-native";
import React from "react";
import {PaginatorStyles} from "./PaginatorStyles.ts";
import Button from "../Button/Button.tsx";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";

const Paginator = () => {
    const {currentTheme} = useTheme();
    const paginatorStyles = PaginatorStyles(currentTheme);
    return (
        <View style={paginatorStyles.pagination}>
            <Button
                title="Previous"
                onPress={() => console.log('previous')}
                buttonStyle={paginatorStyles.paginationButton}
                textStyle={paginatorStyles.paginationText}
                disabled={1 === 1}
            />
            <Text style={paginatorStyles.paginationInfo}>
                Page {1} of {1}
            </Text>
            <Button
                title="Next"
                onPress={() => console.log('next')}
                buttonStyle={paginatorStyles.paginationButton}
                textStyle={paginatorStyles.paginationText}
                disabled={1 === 1}
            />
        </View>
    );
}

export default Paginator;
