import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#EEE",
    },
    headerText: {
        fontSize: 18,
        fontWeight: "600",
    },
    list: {
        padding: 12,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#F0F0F0",
    },
    colPet: {
        flex: 1.2,
    },
    colService: {
        flex: 2,
    },
    colDate: {
        flex: 1.6,
    },
    colStatus: {
        flex: 1.4,
        alignItems: "flex-end",
    },
    petName: {
        fontSize: 14,
        fontWeight: "600",
    },
    service: {
        fontSize: 14,
        fontWeight: "500",
    },
    clinic: {
        fontSize: 12,
        color: "#777",
    },
    date: {
        fontSize: 12,
        color: "#555",
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginBottom: 6,
    },
    statusDone: {
        backgroundColor: "#E6F9ED",
    },
    statusPending: {
        backgroundColor: "#FFF4E5",
    },
    statusText: {
        fontSize: 12,
        fontWeight: "500",
    },
    moreButton: {
        padding: 4,
    },
    moreText: {
        fontSize: 18,
    },
});


export default styles;