import { FlatList, Text, View, Pressable } from "react-native";
import styles from "./appointments.styles";

import { Appointment } from "@/types/appointments";

import AppHeader from "@/components/header/AppHeader";
import BottomMenu from "@/components/menu/BottomMenu";

interface Props {
    appointments: Appointment[];
}

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


const AppointmentsView = ({ appointments }: Props) => {
    return (
        <View style={styles.container}>
            <AppHeader />

            <FlatList
                data={appointments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <AppointmentRow item={item} />}
                contentContainerStyle={styles.list}
            />


            <BottomMenu initialTabs="appointments" />
        </View>
    );
};


export default AppointmentsView;
