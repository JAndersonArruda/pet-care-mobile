import { ActivityIndicator, Text, View } from "react-native"
import styles from "./home.styles";


const HomeView = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} />
            <Text>Em breve</Text>
        </View>
    )
}

export default HomeView;