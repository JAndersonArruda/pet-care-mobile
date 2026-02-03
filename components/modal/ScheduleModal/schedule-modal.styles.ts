import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "flex-end",
    },
    container: {
        backgroundColor: "#FFF",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
    },
    valueRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    label: {
        fontSize: 12,
        color: "#999",
    },
    value: {
        fontSize: 15,
        fontWeight: "600",
        color: "#222",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
    },
    cancel: {
        fontSize: 16,
        color: "#999",
    },
    confirm: {
        fontSize: 16,
        color: "#6A4DFF",
        fontWeight: "700",
    },
});

export default styles;
