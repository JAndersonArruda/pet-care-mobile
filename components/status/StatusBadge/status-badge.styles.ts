import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginBottom: 6,
    },
    statusDone: {
        backgroundColor: "#E6F9ED",
    },
    statusPending: {
        backgroundColor: "#FFF4E5",
    },
    statusText: {
        fontSize: 12,
        fontWeight: "500",
    },
});

export default styles;