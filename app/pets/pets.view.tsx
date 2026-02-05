import { FlatList, Pressable, Text, View } from "react-native";
import styles from "./pets.styles";

import { Pet } from "@/types/pets";

import PetCard from "@/components/cards/Card";
import AppHeader from "@/components/header/AppHeader";
import BottomMenu from "@/components/menu/BottomMenu";

interface PetsViewProps {
    pets: Pet[];
    onCreatePet: () => void;
    selectedPet: string;
}

const PetsView = ({ pets, onCreatePet }: PetsViewProps) => {
    return (
        <View style={styles.container}>

            <AppHeader />

            <View style={styles.content}>
                <FlatList
                    data={pets}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.petsList}
                    renderItem={({ item }) => (
                        <PetCard
                            data={item}
                            type="pet"
                        />
                    )}
                />

            </View>

            <Pressable
                style={styles.fab}
                onPress={onCreatePet}
            >
                <Text style={styles.fabIcon}>+</Text>
            </Pressable>
            <BottomMenu initialTabs="pets" />
        </View>
    );
};

export default PetsView;
