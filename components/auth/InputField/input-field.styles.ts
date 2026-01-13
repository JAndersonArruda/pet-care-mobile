import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 16,
    },
    label: {
        marginBottom: 6,
        fontSize: 14,
        color: "#444",
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 24,
        paddingHorizontal: 16,
        height: 48,

        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 14,
    },
});

export default styles;