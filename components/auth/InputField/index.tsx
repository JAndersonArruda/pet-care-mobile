import { View, Text, TextInput, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./input-field.styles";

type InputFieldProps = TextInputProps & {
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
}

const InputField = ({ label, icon, ...props }: InputFieldProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <View style={styles.inputWrapper}>
                <Ionicons name={icon} size={20} color="#F7C548" />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#999"
                    {...props}
                />
            </View>
        </View>
    );
}

export default InputField;