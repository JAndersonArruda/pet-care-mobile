import { FlatList, View } from "react-native";
import styles from "./home.styles";

import { Service, ServiceType } from "@/types/services";

import ServiceCard from "@/components/cards/Card";
import ServiceTypeCard from "@/components/cards/TypeCard";
import AppHeader from "@/components/header/AppHeader";
import BottomMenu from "@/components/menu/BottomMenu";

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
            <AppHeader />

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
                    showsVerticalScrollIndicator={false}
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
