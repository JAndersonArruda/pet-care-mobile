import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 16,
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        marginLeft: 8,
        fontSize: 13,
    },
    forgot: {
        fontSize: 13,
        color: "#F7C548",
        fontWeight: "500",
    },
});

export default styles;