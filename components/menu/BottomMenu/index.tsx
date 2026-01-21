import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import styles from "./bottom-menu.styles";
import useBottomMenuLogic from "./bottom-menu.logic";

type BottomMenuProps = {
    initialTabs: string;
};

const BottomMenu = ({ initialTabs }: BottomMenuProps) => {
    const { menuItems, activeTab, setActiveTab } = useBottomMenuLogic(initialTabs);
    const router = useRouter();

    return (
        <View style={styles.container}>
            {menuItems.map((item) => {
                const isActive = item.key === activeTab;

                const handlePress = () => {
                    setActiveTab(item.key);
                    router.push({ pathname: item.routePath });
                };

                return (
                    <TouchableOpacity
                        key={item.key}
                        style={styles.item}
                        onPress={handlePress}
                        activeOpacity={.7}
                    >
                        <View style={[styles.iconWrapper, isActive && styles.activeIcon]}>
                            <Ionicons
                                name={item.icon}
                                size={22}
                                color={isActive ? "#FFF" : "#D6D9E0"}
                            />
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    );
};

export default BottomMenu;