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
        marginBottom: 16,
        textAlign: "center",
        paddingVertical: 10,
    },
    row: {
        flexDirection: "row",
        marginTop: 12,
        gap: 12,
    },
    field: {
        flex: 1,
    },
    fieldFull: {
        width: "100%",
        marginTop: 12,
    },
    select: {
        backgroundColor: "#F2F2F2",
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginBottom: 10,
    },
    label: {
        fontSize: 13,
        color: "#777",
        marginBottom: 4,
        marginLeft: 14,
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
        backgroundColor: "#6A4DFF",
        color: "#FFF",
        fontWeight: "700",
        paddingVertical: 10,
        width: 120,
        borderRadius: 20,
        textAlign: "center",
    },
});

export default styles;
