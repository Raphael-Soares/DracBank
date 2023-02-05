import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {useState} from "react";

const Movements = ({item}) => {
    const [show, setShow] = useState(false);
    return (
        <TouchableOpacity style={styles.container} onPress={() => setShow(!show)}>
            <Text style={styles.date}>{item.date}</Text>
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                {show ? (
                    <Text style={item.type === 1 ? styles.value : styles.expenses}>
                        R$ {item.type === 1 ? "+" : "-"}
                        {item.value}
                    </Text>
                ) : (
                    <View style={styles.skeleton} />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default Movements;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: "#DADADA",
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: "#DADADA",
        fontWeight: "bold",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    value: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#00B94A",
    },
    expenses: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#C62C36",
    },
    skeleton: {
        width: 80,
        height: 10,
        backgroundColor: "#DADADA",
        borderRadius: 8,
    },
});
