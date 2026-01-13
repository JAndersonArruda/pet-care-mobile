import { View, Image } from "react-native";
import styles from "./logo.styles";

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("@/assets/images/logo.png")}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
}

export default Logo;