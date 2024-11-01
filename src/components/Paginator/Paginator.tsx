import {Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {PaginatorStyles} from "./PaginatorStyles.ts";
import Button from "../Button";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";

const Paginator = ({handlePagination, pages}: { handlePagination: (newValue: number) => void, pages: number }) => {
    const {currentTheme} = useTheme();
    const paginatorStyles = PaginatorStyles(currentTheme);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        if (pages > 0) {
            setCurrentPage(1);
        } else {
            setCurrentPage(0);
        }
    }, [pages]);
    return (
        <View style={paginatorStyles.pagination}>
            <Button
                title="Previous"
                onPress={() => {
                    setCurrentPage((prevPage) => {
                        const newPage = prevPage - 1;
                        handlePagination(newPage);
                        return newPage;
                    });
                }}
                buttonStyle={paginatorStyles.paginationButton}
                textStyle={paginatorStyles.paginationText}
                disabled={currentPage === 1}
            />
            <Text style={paginatorStyles.paginationInfo}>
                Page {currentPage} of {pages}
            </Text>
            <Button
                title="Next"
                onPress={() => {
                    setCurrentPage((prevPage) => {
                        const newPage = prevPage + 1;
                        handlePagination(newPage);
                        return newPage;
                    });
                }}
                buttonStyle={paginatorStyles.paginationButton}
                textStyle={paginatorStyles.paginationText}
                disabled={currentPage === pages}
            />
        </View>
    );
}

export default Paginator;
