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

    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#222",
        marginBottom: 16,
    },

    input: {
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 10,
        fontSize: 15,
        color: "#222",
        marginBottom: 12,
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
