import { TouchableOpacity, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./google-button.styles";

type GoogleButtonProps = {
    onPress: () => void;
}

export default function GoogleButton({ onPress }: GoogleButtonProps) {
    return (
        <TouchableOpacity 
            style={styles.button} 
            onPress={onPress}
        >
            <View style={styles.content}>
                <AntDesign name="google" size={20} color="#FFF" />
                <Text style={styles.text}>Entrar com Google</Text>
            </View>
        </TouchableOpacity>
    );
}
