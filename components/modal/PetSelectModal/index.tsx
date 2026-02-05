import { Modal, View, Text, Pressable } from "react-native";
import styles from "./pet-select-modal.styles";
import { Pet } from "@/types/pets";

type PetSelectModalProps = {
    visible: boolean;
    pets: Pet[];
    selectedPet: Pet | null;
    onSelect: (pet: Pet) => void;
    onClose: () => void;
};

const PetSelectModal = ({
    visible,
    pets,
    selectedPet,
    onSelect,
    onClose,
}: PetSelectModalProps) => {
    return (
        <Modal transparent animationType="fade" visible={visible}>
            <Pressable style={styles.overlay} onPress={onClose}>
                <View style={styles.container}>
                    {pets.map((pet) => (
                        <Pressable
                            key={pet.id}
                            style={[
                                styles.item,
                                selectedPet?.id === pet.id && styles.itemActive,
                            ]}
                            onPress={() => onSelect(pet)}
                        >
                            <Text style={styles.text}>
                                {pet.name} • {pet.breed}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </Pressable>
        </Modal>
    );
};

export default PetSelectModal;
