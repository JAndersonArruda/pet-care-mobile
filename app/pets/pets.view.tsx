import { FlatList, View } from "react-native";
import styles from "./pets.styles";

import { Pet } from "@/types/pets";

import BottomMenu from "@/components/menu/BottomMenu";
import ServiceCard from "@/components/cards/ServiceCard";

interface PetsViewProps {
    pets: Pet[];
    selectedPet: string;
    setSelectedPet: (id: string) => void;
}

const PetsView = ({ pets, setSelectedPet }: PetsViewProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    data={pets}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.petsList}
                    renderItem={({ item }) => (
                        <ServiceCard
                            data={item}
                            type="pet"
                        />
                    )}
                />

            </View>

            <BottomMenu initialTabs="pets" />
        </View>
    );
};

export default PetsView;
