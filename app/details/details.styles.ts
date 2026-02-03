import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },

    image: {
        width: "100%",
        height: 320,
        resizeMode: "cover",
    },

    content: {
        flex: 1,
        backgroundColor: "#FFF",
        marginTop: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111",
        marginBottom: 6,
    },

    subtitle: {
        fontSize: 15,
        color: "#666",
        marginBottom: 10,
    },

    location: {
        fontSize: 14,
        color: "#999",
        marginBottom: 14,
    },

    tags: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 16,
    },

    tag: {
        backgroundColor: "#F2F2F2",
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 14,
        fontSize: 13,
        color: "#444",
        fontWeight: "500",
    },

    description: {
        fontSize: 15,
        color: "#555",
        lineHeight: 22,
    },

    footer: {
        padding: 16,
        borderTopWidth: 1,
        borderColor: "#EEE",
        backgroundColor: "#FFF",
    },

    button: {
        backgroundColor: "#F5A623",
        paddingVertical: 14,
        borderRadius: 16,
        alignItems: "center",
    },

    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "700",
    },
});

export default styles;
