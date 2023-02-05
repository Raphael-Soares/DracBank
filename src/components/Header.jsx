import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from "react-native";
import React from "react";

import {Feather} from "@expo/vector-icons";

const statusbarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
export default function Header({name}) {
    return (
        <View style={styles.header}>
            <View style={styles.content}>
                <Text style={styles.user}>Olá, {name}</Text>
                <TouchableOpacity style={styles.buttonUser}>
                    <Feather name="user" activeOpacity={0.9} size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#bd93f9",

        paddingTop: statusbarHeight,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        flexDirection: "row",

        justifyContent: "space-between",
    },
    user: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: "rgba(255, 255, 255, 0.5)",

        justifyContent: "center",
        alignItems: "center",
        borderRadius: 44 / 2,
    },
});
