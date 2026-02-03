import { Text, View } from "react-native";
import styles from "./appointments.styles";

import BottomMenu from "@/components/menu/BottomMenu";

const AppointmentsView = () => {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.text}>Appointments</Text>
            </View>

            <BottomMenu initialTabs="clinics" />
        </View>
    );
};

export default AppointmentsView;
