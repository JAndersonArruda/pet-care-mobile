import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./appointment-row.styles";

import { Appointment } from "@/types/appointments";

import StatusBadge from "@/components/status/StatusBadge";
import AppointmentActionsModal from "@/components/modal/AppointmentActionsModal";

const AppointmentRow = ({ item }: { item: Appointment }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
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
                    <Pressable
                        style={styles.moreButton}
                        onPress={() => setMenuVisible(true)}
                    >
                        <Text style={styles.moreText}>⋮</Text>
                    </Pressable>
                </View>
            </View>

            <AppointmentActionsModal
                visible={menuVisible}
                status={item.status}
                onClose={() => setMenuVisible(false)}
                onViewDetails={() => {
                    setMenuVisible(false);
                    console.log("Ver detalhes", item.id);
                }}
                onConclude={() => {
                    setMenuVisible(false);
                    console.log("Concluir agendamento", item.id);
                }}
            />
        </>
    );
};

export default AppointmentRow;