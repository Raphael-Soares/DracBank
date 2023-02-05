import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native";
import React from "react";

import {AntDesign} from "@expo/vector-icons";

function Actions() {
    return (
        <ScrollView
            style={styles.container}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="addfolder" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Transferir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="tagso" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="creditcard" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="barcode" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Boletos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="setting" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Conta</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default Actions;

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginVertical: 18,
        paddingHorizontal: 14,
    },
    actionButton: {
        alignItems: "center",
        marginRight: 32,
    },
    areaButton: {
        backgroundColor: "#fff",
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    labelButton: {
        marginTop: 4,
        textAlign: "center",
        fontWeight: "bold",
    },
});
