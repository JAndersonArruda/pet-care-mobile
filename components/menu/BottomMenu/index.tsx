import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./bottom-menu.styles";

export type BottomMenuItem = {
  key: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

type BottomMenuProps = {
  items: BottomMenuItem[];
  activeKey: string;
};

const BottomMenu = ({ items, activeKey }: BottomMenuProps) => {
    return (
        <View style={styles.container}>
            {items.map((item) => {
                const isActive = item.key === activeKey;

                return (
                    <TouchableOpacity 
                        key={item.key}
                        style={styles.item}
                        onPress={item.onPress}
                        activeOpacity={.7}
                    >
                        <Ionicons
                            name={item.icon}
                            size={22}
                            color={isActive ? "#FFF" : "#D6D9E0"}
                        />

                        {isActive && <View style={styles.activeIndicator} />}
                    </TouchableOpacity>
                )
            })}
        </View>
    );
};

export default BottomMenu;