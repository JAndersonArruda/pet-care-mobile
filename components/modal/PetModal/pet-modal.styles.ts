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
        paddingBottom: 30,
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#222",
        marginBottom: 18,
        textAlign: "center",
        paddingVertical: 10,
    },

    label: {
        fontSize: 13,
        color: "#777",
        marginBottom: 4,
        marginLeft: 14,
    },

    input: {
        backgroundColor: "#F2F2F2",
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontSize: 15,
        color: "#222",
        marginBottom: 20,
    },

    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 14,
    },

    cancel: {
        fontSize: 16,
        backgroundColor: "#999",
        color: "#FFF",
        fontWeight: "700",
        paddingVertical: 10,
        width: 120,
        borderRadius: 20,
        textAlign: "center",
    },

    confirm: {
        fontSize: 16,
        backgroundColor: "#E3A73D",
        color: "#FFF",
        fontWeight: "700",
        paddingVertical: 10,
        width: 120,
        borderRadius: 20,
        textAlign: "center",
    },
});

export default styles;
