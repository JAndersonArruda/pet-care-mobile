import { Text, View } from "react-native";
import styles from "./home.styles";
import BottomMenu, { BottomMenuItem } from "@/components/menu/BottomMenu";

type HomeViewProps = {
    menuItems: BottomMenuItem[];
    activeTab: string;
};

const HomeView = ({ menuItems, activeTab }: HomeViewProps) => {
    return (
        <View style={styles.container}>

            {/* Conteúdo */}
            <View style={styles.content}>
                <Text style={styles.text}>Tela: {activeTab}</Text>
            </View>

            {/* Menu inferior */}
            <BottomMenu items={menuItems} activeKey={activeTab} />
        </View>
    );
};

export default HomeView;
