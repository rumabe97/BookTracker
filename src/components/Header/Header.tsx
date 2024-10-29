import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {HeaderStyles} from "./HeaderStyles.ts";

const Header = () => {
    return (
        <View style={HeaderStyles.header}>
            <TouchableOpacity onPress={() => console.log('Menu pressed')}>
                <Text style={[HeaderStyles.menuIcon, {color: false ? '#ffffff' : '#333333'}]}>☰</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[HeaderStyles.darkModeToggle, {color: false ? '#ffffff' : '#333333'}]}>
                    {true ? '☀️' : '🌙'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Header;
