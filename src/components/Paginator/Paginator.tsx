import {Text, View} from "react-native";
import React from "react";
import {PaginatorStyles} from "./PaginatorStyles.ts";
import Button from "../Button/Button.tsx";

const Paginator = () => {
    return (
        <View style={PaginatorStyles.pagination}>
            <Button
                title="Previous"
                onPress={() => console.log('previous')}
                buttonStyle={[PaginatorStyles.paginationButton, {backgroundColor: false ? '#3a3a3a' : '#e0e0e0'}]}
                textStyle={[PaginatorStyles.paginationText, {color: false ? '#ffffff' : '#333333'}]}
                disabled={1 === 1}
            />
            <Text style={[PaginatorStyles.paginationInfo, {color: false ? '#ffffff' : '#333333'}]}>
                Page {1} of {1}
            </Text>
            <Button
                title="Next"
                onPress={() => console.log('next')}
                buttonStyle={[PaginatorStyles.paginationButton, {backgroundColor: false ? '#3a3a3a' : '#e0e0e0'}]}
                textStyle={[PaginatorStyles.paginationText, {color: false ? '#ffffff' : '#333333'}]}
                disabled={1 === 1}
            />
        </View>
    );
}

export default Paginator;
