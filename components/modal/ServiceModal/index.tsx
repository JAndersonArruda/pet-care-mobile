import { Modal, View, Text, Pressable, TextInput } from "react-native";
import { useEffect, useState } from "react";
import styles from "./service-modal.styles";

import { Service } from "@/types/services";

type ServiceModalProps = {
    action: "create" | "edit";
    visible: boolean;
    service?: Service | null;
    onClose: () => void;
    onConfirm: (service: Service) => void;
};

const ServiceModal = ({ action, visible, service, onClose, onConfirm }: ServiceModalProps) => {
    const isEdit = action === "edit";

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (isEdit && service) {
            setName(service.name);
            setPrice(service.price);
            setDescription(service.description);
        } else {
            setName("");
            setPrice("");
            setDescription("");
        }
    }, [visible, isEdit, service]);

    const handleSave = () => {
        const payload: Service = isEdit && service
            ? {
                ...service,
                name,
                price,
                description,
            }
            : {
                id: "",
                typeId: "",
                name,
                clinic: "",
                price,
                image: "",
                description,
            };

        onConfirm(payload);
    };

    return (
        <Modal transparent animationType="slide" visible={visible}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {isEdit ? "Editar serviço" : "Cadastrar serviço"}
                    </Text>

                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Nome do serviço"
                    />

                    <Text style={styles.label}>Preço</Text>
                    <TextInput
                        style={styles.input}
                        value={price}
                        onChangeText={setPrice}
                        placeholder="R$ 00,00"
                        keyboardType="numeric"
                    />

                    <Text style={styles.label}>Descrição</Text>
                    <TextInput
                        style={[styles.input, { height: 80 }]}
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Descrição do serviço"
                        multiline
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

export default ServiceModal;
