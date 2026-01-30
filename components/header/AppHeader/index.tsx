import { View, Text, TouchableOpacity } from "react-native";
import styles from "./app-header.styles";
import { Ionicons } from "@expo/vector-icons";

type AppHeaderProps = {
    name?: string;
    subtitle?: string;
};

const AppHeader = ({ name = "Usuário", subtitle = "Bom dia" }: AppHeaderProps) => {
    return (
        <View style={styles.container}>
            {/* Texto */}
            <View>
                <Text style={styles.greeting}>Oi, {name}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>

            {/* Ícone */}
            <TouchableOpacity style={styles.iconContainer}>
                <Ionicons name="notifications-outline" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

export default AppHeader;
