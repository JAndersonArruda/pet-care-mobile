import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "#F2F2F2",
        borderRadius: 16,
        padding: 12,
        overflow: "hidden",
        marginBottom: 12,
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 160,
        borderRadius: 12,
        marginBottom: 8,
        resizeMode: "cover",
    },
    textContainer: {
        alignItems: "center",
    },
    title: {
        fontWeight: "600",
        fontSize: 14,
        color: "#333",
    },
    subtitle: {
        fontSize: 12,
        color: "#777",
        marginTop: 2,
    },
});

export default styles;