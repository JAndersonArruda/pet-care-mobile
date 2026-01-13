import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    container: {
        flexGrow: 1,
        justifyContent: "center",
    },
    form: {
        backgroundColor: "#FFF",
        paddingTop: 24,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 18
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 24,
    },
    footerText: {
        fontSize: 14,
    },
    link: {
        color: "#F7C548",
        fontWeight: "600",
        fontSize: 14,
    },
    divider: {
        height: 1,
        backgroundColor: "#000",
        marginVertical: 6,
        width: "100%",
    },
});

export default styles