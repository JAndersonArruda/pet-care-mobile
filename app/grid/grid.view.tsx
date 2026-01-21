import { Text, View } from "react-native";
import styles from "./grid.styles";

import BottomMenu from "@/components/menu/BottomMenu";

const GridView = () => {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.text}>Grid</Text>
            </View>

            <BottomMenu initialTabs="grid" />
        </View>
    );
};

export default GridView;
