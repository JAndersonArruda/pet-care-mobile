import { View, ActivityIndicator, Text } from "react-native";
import styles from "./login.styles";

const LoginView = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
            <Text>Charging...</Text>
        </View>
    );
}

export default LoginView;