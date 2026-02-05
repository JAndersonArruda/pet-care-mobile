import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#F0F0F0",
    },
    colPet: {
        flex: 1.2,
    },
    colService: {
        flex: 2,
    },
    colDate: {
        flex: 1.6,
    },
    colStatus: {
        flex: 1.4,
        alignItems: "flex-end",
    },
    petName: {
        fontSize: 14,
        fontWeight: "600",
    },
    service: {
        fontSize: 14,
        fontWeight: "500",
    },
    clinic: {
        fontSize: 12,
        color: "#777",
    },
    date: {
        fontSize: 12,
        color: "#555",
    },
    moreButton: {
        padding: 4,
    },
    moreText: {
        fontSize: 18,
    },
});

export default styles;