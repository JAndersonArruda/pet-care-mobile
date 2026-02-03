import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        width: 80,
        height: 100,
        borderRadius: 40,
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
        // flexShrink: 0,

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
    selected: {
        backgroundColor: "#E3A73D",
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 6,
    },
    selectedIcon: {
        backgroundColor: "#fff",
        borderRadius: 20,
    },
    text: {
        fontSize: 10,
        fontWeight: "600",
    },
});

export default styles;
