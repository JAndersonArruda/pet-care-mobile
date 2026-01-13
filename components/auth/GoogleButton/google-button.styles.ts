import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#222",
        height: 40,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 14,

        borderTopWidth: 1,
        borderTopColor: "#000",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: "#FFF",
        marginLeft: 8,
        fontSize: 14,
        fontWeight: "500",
    },
});

export default styles;