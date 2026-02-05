import { Pressable, Text, View } from "react-native";
import styles from "./appointment-row.styles";

import { Appointment } from "@/types/appointments";
import StatusBadge from "@/components/status/StatusBadge";

const AppointmentRow = ({ item }: { item: Appointment }) => {
    return (
        <View style={styles.row}>
            <View style={styles.colPet}>
                <Text style={styles.petName}>{item.petName}</Text>
            </View>


            <View style={styles.colService}>
                <Text style={styles.service}>{item.service}</Text>
                <Text style={styles.clinic}>{item.clinic}</Text>
            </View>


            <View style={styles.colDate}>
                <Text style={styles.date}>{item.datetime}</Text>
            </View>


            <View style={styles.colStatus}>
                <StatusBadge status={item.status} />
                <Pressable style={styles.moreButton}>
                    <Text style={styles.moreText}>⋮</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default AppointmentRow;