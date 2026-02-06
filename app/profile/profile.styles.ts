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
    serviceWrapper: {
        marginBottom: 12,
    },
    servicesHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 15,
    },
    contentAddService: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E3A73D",
        borderRadius: 30,
        paddingVertical: 6,
        paddingHorizontal: 16,
    },
    addService: {
        color: "#FFF",
        fontWeight: "700",
        fontSize: 13,
        marginTop: 0,
    },
    cardContainer: {
        position: "relative",
        marginBottom: 12,
    },
    overlayActions: {
        position: "absolute",
        top: 10,
        right: 65,
        flexDirection: "row",
        gap: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
        // borderRadius: 20,
        // elevation: 4,
    },

    overlayDeleteButton: {
        position: "absolute",
        backgroundColor: "#E53935",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        elevation: 4,
    },

    overlayEditButton: {
        position: "absolute",
        right: 15,
        backgroundColor: "#1976D2",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        elevation: 4,
    },

    overlayEditText: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "600",
    },

    overlayDeleteText: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "600",
    },
});


export default styles;