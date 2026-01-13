import { View, Text, TouchableOpacity } from "react-native";
import { Switch } from "react-native-switch";
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
                {/* <Switch
                    value={value}
                    onValueChange={onValueChange}
                    trackColor={{
                        false: "#ccc", 
                        true: "#E8D29B" 
                    }}
                    thumbColor={value ? "#F7C548" : "#FFF"}
                    ios_backgroundColor="#ccc"
                /> */}
                <Switch
                    value={value}
                    onValueChange={onValueChange}
                    backgroundActive="#ffbb00ff"
                    backgroundInactive="#ccc"
                    circleActiveColor="#F7C548"
                    circleInActiveColor="#FFF"
                    barHeight={14}
                    circleSize={17}
                    innerCircleStyle={{
                        borderWidth: 0,
                        // iOS shadow
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,

                        // Android shadow
                        elevation: 4,
                    }}
                    outerCircleStyle={{
                        borderWidth: 0,
                    }}
                    changeValueImmediately
                    renderActiveText={false}
                    renderInActiveText={false}
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