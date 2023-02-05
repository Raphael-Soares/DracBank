import {StyleSheet, Text, View, FlatList} from "react-native";
import React from "react";

import Header from "../components/Header";
import Balance from "../components/Balance";
import Movements from "../components/Movements";
import Actions from "../components/Actions";

const list = [
    {
        id: 1,
        title: "Eu lhe dei ",
        value: "20.000,00",
        date: "10/10/2020",
        type: 0,
    },
    {
        id: 2,
        title: "Para lhe pagar ",
        value: "3.300,00",
        date: "10/10/2020",
        type: 1,
    },
    {
        id: 3,
        title: "Tu tem que me voltar ",
        value: "16.700,00",
        date: "10/10/2020",
        type: 1,
    },
];

const Home = () => {
    return (
        <View style={styles.container}>
            <Header name="Raphael Soares" />
            <Balance saldo={"420,00"} gastos="69,00" />
            <Actions />
            <Text style={styles.title}>Últimas movimentações:</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return <Movements item={item} />;
                }}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f2",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 14,
    },
    list: {
        marginHorizontal: 14,
    },
});
