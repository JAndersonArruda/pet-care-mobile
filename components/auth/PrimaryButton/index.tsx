import { TouchableOpacity, Text } from "react-native";
import styles from "./primary-button.styles";

type PrimaryButtonProps = {
    title: string;
    onPress: () => void;
}

const PrimaryButton = ({ title, onPress }: PrimaryButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default PrimaryButton;