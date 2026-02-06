import { Modal, View, Text, Pressable, TextInput } from "react-native";
import { useEffect, useState } from "react";
import styles from "./clinic-modal.styles";

import { Clinic } from "@/types/clinic";

type ClinicModalProps = {
    action: "create" | "edit";
    visible: boolean;
    clinic?: Clinic | null;
    onClose: () => void;
    onConfirm: (clinic: Clinic) => void;
};

const ClinicModal = ({ action, visible, clinic, onClose, onConfirm }: ClinicModalProps) => {
    const isEdit = action === "edit";

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        if (isEdit && clinic) {
            setName(clinic.name);
            setAddress(clinic.address);
        } else {
            setName("");
            setAddress("");
        }
    }, [isEdit, clinic, visible]);

    const handleSave = () => {
        const payload: Clinic = {
            id: isEdit && clinic ? clinic.id : "",
            name,
            address,
        };

        onConfirm(payload);
    };

    return (
        <Modal transparent animationType="slide" visible={visible}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {isEdit ? "Editar clínica" : "Cadastrar clínica"}
                    </Text>

                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Nome da clínica"
                    />

                    <Text style={styles.label}>Endereço</Text>
                    <TextInput
                        style={styles.input}
                        value={address}
                        onChangeText={setAddress}
                        placeholder="Endereço"
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

export default ClinicModal;
