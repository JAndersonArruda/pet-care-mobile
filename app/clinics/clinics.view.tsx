import { Text, View } from "react-native";
import styles from "./clinics.styles";

import BottomMenu from "@/components/menu/BottomMenu";

const ClinicsView = () => {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.text}>Clinics</Text>
            </View>

            <BottomMenu initialTabs="clinics" />
        </View>
    );
};

export default ClinicsView;
