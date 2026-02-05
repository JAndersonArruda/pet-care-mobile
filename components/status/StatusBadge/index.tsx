import { Text, View } from "react-native";
import styles from "./status-badge.styles";

import { Appointment } from "@/types/appointments";

const StatusBadge = ({ status }: { status: Appointment["status"] }) => {
    const isDone = status === "CONCLUIDO";

    return (
        <View
            style={[
                styles.statusBadge,
                isDone ? styles.statusDone : styles.statusPending,
            ]}
        >
            <Text style={styles.statusText}>
                {isDone ? "Concluído" : "Pendente"}
            </Text>
        </View>
    );
};

export default StatusBadge;