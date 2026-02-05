import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 45,
        paddingBottom: 15,
        backgroundColor: "#FFF",

        // 🔹 Borda
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",

        // 🔹 Sombra (iOS)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 8,

        // 🔹 Sombra (Android)
        elevation: 6,
    },

    greeting: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111",
    },

    subtitle: {
        fontSize: 13,
        color: "#777",
        marginTop: 2,
    },

    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 21,
        backgroundColor: "#E3A73D",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        fontSize: 20,
        color: "#fff",
    },
});

export default styles;
