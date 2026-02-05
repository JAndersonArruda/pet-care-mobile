import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    profileHeader: {
        flexDirection: "row",
        padding: 16,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EEE",
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
    },
    profileInfo: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: "600",
    },
    email: {
        fontSize: 14,
        color: "#555",
    },
    address: {
        fontSize: 13,
        color: "#777",
        marginTop: 4,
    },
    section: {
        flex: 1,
        padding: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
    },
    petWrapper: {
        marginBottom: 12,
    },
    deleteButton: {
        alignSelf: "flex-end",
        marginTop: 4,
        backgroundColor: "#E53935",
        paddingVertical: 6,
        paddingHorizontal: 13,
        borderRadius: 20,
    },
    deleteText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: 600,
    },
    servicesHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 8,
    },
    addService: {
        color: "#1DB954",
        fontWeight: "600",
    },
    serviceWrapper: {
        marginBottom: 12,
    },
    serviceActions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 16,
        marginTop: 4,
    },
    edit: {
        color: "#1976D2",
        fontSize: 13,
    },
});


export default styles;