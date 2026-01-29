import { FlatList, View } from "react-native";
import styles from "./home.styles";

import { Service } from "./home.logic";

import BottomMenu from "@/components/menu/BottomMenu";
import Card from "@/components/cards";
// futuramente:
// import ServiceDetailsModal from "@/components/modals/ServiceDetailsModal";

interface HomeViewProps {
    services: Service[],
    setSelectedService: (service: Service) => void;
}

const HomeView = ({ services, setSelectedService }: HomeViewProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    data={services}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ gap: 6 }}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Card
                            title={item.name}
                            subtitle={item.price}
                            image={item.image}
                            onPress={() => setSelectedService(item)}
                        />
                    )}
                />

            </View>

            <BottomMenu initialTabs="home" />
        </View>
    );
};

export default HomeView;
