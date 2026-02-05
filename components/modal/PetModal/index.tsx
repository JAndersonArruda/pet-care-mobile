import { Modal, View, Text, Pressable, TextInput } from "react-native";
import { useEffect, useState } from "react";
import styles from "./pet-modal.styles";

import { Pet } from "@/types/pets";

type PetModalProps = {
    action: "edit" | "create"
    visible: boolean;
    pet?: Pet | null;
    onClose: () => void;
    onConfirm: (pet: Pet) => void;
};

const PetModal = ({ action, visible, pet, onClose, onConfirm }: PetModalProps) => {
    const isEdit = action === "edit";

    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        if (isEdit && pet) {
            setName(pet.name);
            setBreed(pet.breed);
            setAge(pet.age);
        } else {
            setName("");
            setBreed("");
            setAge("");
        }
    }, [isEdit, pet, visible]);

    const handleSave = () => {
        const petPayload: Pet = isEdit && pet
        ? pet
        : {
            id: "",
            name: "",
            image: "",
            breed: "",
            age: "",
            sex: "Macho",
            description: "",
        };
        // 🔒 pronto para API
        // ex:
        // if (isEdit) PUT /pets/:id
        // else POST /pets
        onConfirm(petPayload);
    };

    return (
        <Modal transparent animationType="slide" visible={visible}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {isEdit ? "Editar pet" : "Cadastrar pet"}
                    </Text>

                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Nome"
                    />

                    <Text style={styles.label}>Raça</Text>
                    <TextInput
                        style={styles.input}
                        value={breed}
                        onChangeText={setBreed}
                        placeholder="Raça"
                    />

                    <Text style={styles.label}>Idade</Text>
                    <TextInput
                        style={styles.input}
                        value={age}
                        onChangeText={setAge}
                        placeholder="Idade"
                    />

                    <View style={styles.actions}>
                        <Pressable onPress={onClose}>
                            <Text style={styles.cancel}>Cancelar</Text>
                        </Pressable>

                        <Pressable onPress={handleSave}>
                            <Text style={styles.confirm}>Salvar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default PetModal;
