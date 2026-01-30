import { FlatList, Text, View } from "react-native";
import styles from "./home.styles";

import { Service, ServiceType } from "@/types/services";

import BottomMenu from "@/components/menu/BottomMenu";
import ServiceTypeCard from "@/components/cards/ServiceTypeCard";
import ServiceCard from "@/components/cards/ServiceCard";
// futuramente:
// import ServiceDetailsModal from "@/components/modals/ServiceDetailsModal";

interface HomeViewProps {
    serviceTypes: ServiceType[];
    services: Service[];
    selectedType: string;
    setSelectedType: (id: string) => void;
}

const HomeView = ({ serviceTypes, services, selectedType, setSelectedType }: HomeViewProps) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.greeting}>Olá 👋</Text>
                <Text style={styles.subtitle}>Encontre o melhor serviço para seu pet</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.typesWrapper}>
                    {/* Tipos de serviço */}
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={serviceTypes}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.typesList}
                        renderItem={({ item }) => (
                            <ServiceTypeCard
                                data={item}
                                selected={item.id === selectedType}
                                onPress={() => setSelectedType(item.id)}
                            />
                        )}
                    />
                </View>

                {/* Cards de serviços */}
                <FlatList
                    data={services}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.servicesList}
                    renderItem={({ item }) => (
                        <ServiceCard 
                            data={item}
                            type="service"
                        />
                    )}
                />
            </View>

            <BottomMenu initialTabs="home" />
        </View >
    );
};

export default HomeView;
