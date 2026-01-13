import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        marginBottom: 35,
        paddingHorizontal: 40,
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
        fontWeight: "600",
    },
});

export default styles;