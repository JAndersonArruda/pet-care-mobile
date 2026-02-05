import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.2)",
        justifyContent: "center",
        alignItems: "center",
    },
    menu: {
        width: 200,
        backgroundColor: "#FFF",
        borderRadius: 8,
        paddingVertical: 8,
        elevation: 5, // Android
        shadowColor: "#000", // iOS
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
    menuItem: {
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    menuText: {
        fontSize: 14,
    },
    success: {
        color: "#1DB954",
        fontWeight: "600",
    },
});

export default styles;
