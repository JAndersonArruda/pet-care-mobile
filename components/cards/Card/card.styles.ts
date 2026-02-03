import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFF",
        borderRadius: 30,
        marginBottom: 20,
        overflow: "hidden",

        // 🔹 Borda
        borderWidth: 1.5,
        borderColor: "#F0C7AE",
        // 🔹 Sombra (iOS)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 8,

        // 🔹 Sombra (Android)
        elevation: 6,
    },
    image: {
        width: "100%",
        height: 250,
    },

    info: {
        backgroundColor: "#F0C7AE",
        paddingHorizontal: 25,
        paddingBottom: 45,
        paddingTop: 30,
        borderRadius: 30,
        marginTop: -25,
        // paddingVertical: 13
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },

    left: {
        flex: 1,
    },

    right: {
        alignItems: "flex-end",
        fontSize: 16,
        fontWeight: "700",
        color: "#f5f5f5",
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
    },
    subTitle: {
        fontSize: 13,
        color: "#555",
        marginTop: 4,
    },
    textRight: {
        fontSize: 16,
        fontWeight: "700",
        color: "#f5f5f5",
    },
});

export default styles;
