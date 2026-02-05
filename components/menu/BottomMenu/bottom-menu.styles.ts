import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // height: 56,
        paddingTop: 15,
        paddingBottom: 25,
        backgroundColor: "#E3A73D",
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    iconWrapper: {
        paddingBottom: 4,
    },
    activeIcon: {
        borderBottomWidth: 2,
        borderBottomColor: "#FFF",
    },
});

export default styles;