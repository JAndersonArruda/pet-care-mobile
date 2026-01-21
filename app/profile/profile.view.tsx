import { Text, View } from "react-native";
import styles from "./profile.styles";

import BottomMenu from "@/components/menu/BottomMenu";

const ProfileView = () => {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.text}>Profile</Text>
            </View>

            <BottomMenu initialTabs="profile" />
        </View>
    );
};

export default ProfileView;
