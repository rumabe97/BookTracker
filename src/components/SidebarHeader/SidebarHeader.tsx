import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {SidebarHeaderStyles} from "./SidebarHeaderStyles.ts";
import {getStatusCount} from "../../core/services/Book";
import {BookCount} from "../../core/entities/BookCount";

const SidebarHeader = () => {
    const {currentTheme} = useTheme();
    const [bookCount, setBookCount] = useState<BookCount>(new BookCount({
        completed: 0,
        reading: 0,
        pending: 0,
        wishlist: 0,
        discarded: 0
    }));

    const sidebarHeaderStyles = SidebarHeaderStyles(currentTheme);

    useEffect(() => {
        const fetchData = async () => {
            const response: BookCount = await getStatusCount();
            setBookCount(response);
        };
        fetchData().then();
    }, []);
    return (
        <View style={sidebarHeaderStyles.header}>
            <View style={sidebarHeaderStyles.statsContainer}>
                <View style={sidebarHeaderStyles.statItem}>
                    <Text style={sidebarHeaderStyles.statLabel}>Read</Text>
                    <Text style={sidebarHeaderStyles.statValue}>{bookCount.completed ?? 0}</Text>
                </View>
                <View style={sidebarHeaderStyles.statItem}>
                    <Text style={sidebarHeaderStyles.statLabel}>Discarded</Text>
                    <Text style={sidebarHeaderStyles.statValue}>{bookCount.discarded ?? 0}</Text>
                </View>
                <View style={sidebarHeaderStyles.statItem}>
                    <Text style={sidebarHeaderStyles.statLabel}>Wishlist</Text>
                    <Text style={sidebarHeaderStyles.statValue}>{bookCount.wishlist ?? 0}</Text>
                </View>
            </View>
        </View>
    );
}

export default SidebarHeader;
