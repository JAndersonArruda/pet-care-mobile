import { Modal, View, Text, Pressable, TextInput } from "react-native";
import styles from "./edit-pet-modal.styles";

import { Pet } from "@/types/pets";

type EditPetModalProps = {
    visible: boolean;
    pet: Pet | null;
    onClose: () => void;
    onConfirm: (pet: Pet) => void;
};

const EditPetModal = ({ visible, pet, onClose, onConfirm }: EditPetModalProps) => {
    if (!pet) return null;

    return (
        <Modal transparent animationType="slide" visible={visible}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Editar Pet</Text>

                    <TextInput
                        style={styles.input}
                        defaultValue={pet.name}
                        placeholder="Nome"
                    />

                    <TextInput
                        style={styles.input}
                        defaultValue={pet.breed}
                        placeholder="Raça"
                    />

                    <TextInput
                        style={styles.input}
                        defaultValue={pet.age}
                        placeholder="Idade"
                    />

                    <View style={styles.actions}>
                        <Pressable onPress={onClose}>
                            <Text style={styles.cancel}>Cancelar</Text>
                        </Pressable>

                        <Pressable onPress={() => onConfirm(pet)}>
                            <Text style={styles.confirm}>Salvar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default EditPetModal;
