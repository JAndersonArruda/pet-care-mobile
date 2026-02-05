import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
       slotsOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    slotsContainer: {
        backgroundColor: "#FFF",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 16,
        maxHeight: "60%",
    },
    slotItem: {
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#EEE",
    },
    slotText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#222",
        textAlign: "center",
    },
    slotItemActive: {
        backgroundColor: "#F2F0FF",
        borderRadius: 12,
    },
});

export default styles