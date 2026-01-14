import { LinearGradient } from 'expo-linear-gradient';
import { Image } from "react-native";
import styles from "./preload.styles";

const PreloadView = () => {
    return (
        <LinearGradient
            colors={[
                "#F7C548",
                "#E3A73D",
                "#CC8330",
                "#E48E12",
                "#E08500",
            ]}
            locations={[0, 0.15, 0.5, 0.85, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <Image
                source={require('@/assets/images/logo.png')}
                style={styles.icon}
                resizeMode="contain"
            />
        </LinearGradient>
    );
}

export default PreloadView;
