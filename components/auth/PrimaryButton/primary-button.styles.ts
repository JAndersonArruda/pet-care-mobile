import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#F7C548",
        height: 40,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    text: {
        color: "#FFF",
        fontWeight: "600",
        fontSize: 16,
    },
});

export default styles;