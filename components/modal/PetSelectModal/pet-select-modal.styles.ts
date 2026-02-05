import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    container: {
        backgroundColor: "#FFF",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 16,
        maxHeight: "60%",
    },
    item: {
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#EEE",
    },
    text: {
        fontSize: 15,
        fontWeight: "600",
        color: "#222",
        textAlign: "center",
    },
    itemActive: {
        backgroundColor: "#F2F0FF",
        borderRadius: 12,
    },
});

export default styles