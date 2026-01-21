import { Text, View } from "react-native";
import styles from "./pets.styles";

import BottomMenu from "@/components/menu/BottomMenu";

const PetsView = () => {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.text}>Pets</Text>
            </View>

            <BottomMenu initialTabs="pets" />
        </View>
    );
};

export default PetsView;
