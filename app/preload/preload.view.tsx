import { View, Image } from "react-native";
import styles from "./preload.styles";

const PreloadView = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.icon}
                resizeMode="contain"
            />
        </View>
    );
}

export default PreloadView;
