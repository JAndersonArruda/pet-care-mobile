import { View, Text, Switch, TouchableOpacity } from "react-native";
import styles from "./remember-me.styles";

type RememberMeProps = {
    value: boolean;
    onValueChange: (value: boolean) => void;
    onForgot: () => void;
}

const RememberMe = ({ value, onValueChange, onForgot }: RememberMeProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Switch
                    value={value}
                    onValueChange={onValueChange}
                    trackColor={{ false: "#ccc", true: "#F7C548" }}
                    thumbColor="#FFF"
                />
                <Text style={styles.text}>Lembrar de mim</Text>
            </View>

            <TouchableOpacity onPress={onForgot}>
                <Text style={styles.forgot}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RememberMe;