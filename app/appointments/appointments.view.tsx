import { FlatList, View } from "react-native";
import styles from "./appointments.styles";

import { Appointment } from "@/types/appointments";

import AppHeader from "@/components/header/AppHeader";
import BottomMenu from "@/components/menu/BottomMenu";
import AppointmentRow from "@/components/rows/AppointmentRow";

interface AppointmentsViewProps {
    appointments: Appointment[];
}

const AppointmentsView = ({ appointments }: AppointmentsViewProps) => {
    return (
        <View style={styles.container}>
            <AppHeader />

            <FlatList
                data={appointments}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <AppointmentRow item={item} />}
                contentContainerStyle={styles.list}
            />


            <BottomMenu initialTabs="appointments" />
        </View>
    );
};


export default AppointmentsView;
