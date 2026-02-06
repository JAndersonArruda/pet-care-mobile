import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 16,
    },
    petsList: {
        marginVertical: 20,
        paddingBottom: 40,
    },

    fab: {
        position: "absolute",
        right: 20,
        bottom: 90, // altura do BottomMenu
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#E3A73D",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5, // Android
        shadowColor: "#000", // iOS
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    fabIcon: {
        fontSize: 32,
        color: "#FFF",
        fontWeight: "300",
        marginTop: -5,
    },
});

export default styles;
