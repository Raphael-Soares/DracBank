import {StyleSheet, Text, View} from "react-native";
import React from "react";

const Balance = ({saldo, gastos}) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>-{gastos}</Text>
                </View>
            </View>
        </View>
    );
};

export default Balance;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",

        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        paddingVertical: 14,
        marginTop: -24,
        marginHorizontal: 14,
        borderRadius: 4,
        zIndex: 99,
    },
    item: {},
    itemTitle: {
        fontSize: 24,
        color: "#44475a",
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    currencySymbol: {
        color: "#44475a",
        marginRight: 6,
    },
    balance: {
        fontSize: 24,
        color: "#50fa7b",
    },
    expenses: {
        fontSize: 24,
        color: "#ff5555",
    },
});
