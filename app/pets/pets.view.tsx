import { FlatList, View } from "react-native";
import styles from "./pets.styles";

import { Pet } from "./pets.logic";

import BottomMenu from "@/components/menu/BottomMenu";
import Card from "@/components/cards";

interface PetsViewProps {
    pets: Pet[];
    setSelectedPet: (pet: Pet) => void;
}

const PetsView = ({ pets, setSelectedPet }: PetsViewProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    data={pets}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ gap: 12 }}
                    renderItem={({ item }) => (
                        <Card
                            title={item.name}
                            image={item.image}
                            onPress={() => setSelectedPet(item)}
                        />
                    )}
                />

            </View>

            <BottomMenu initialTabs="pets" />
        </View>
    );
};

export default PetsView;
