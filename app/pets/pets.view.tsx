import { FlatList, View } from "react-native";
import styles from "./pets.styles";

import { Pet } from "@/types/pets";

import PetCard from "@/components/cards/Card";
import AppHeader from "@/components/header/AppHeader";
import BottomMenu from "@/components/menu/BottomMenu";

interface PetsViewProps {
    pets: Pet[];
    selectedPet: string;
    setSelectedPet: (id: string) => void;
}

const PetsView = ({ pets, setSelectedPet }: PetsViewProps) => {
    return (
        <View style={styles.container}>
            
            <AppHeader />

            <View style={styles.content}>
                <FlatList
                    data={pets}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.petsList}
                    renderItem={({ item }) => (
                        <PetCard
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
