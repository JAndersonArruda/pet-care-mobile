import { useState } from "react";
import { Alert } from "react-native";

import { clinic, pets, services, user } from "@/data/data-test";
import { Service } from "@/types/services";

export type UserType = "client" | "admin";

const useProfileLogic = () => {
    const [userType] = useState<UserType>("admin"); // trocar para 'admin' quando necessário

    const [serviceModalVisible, setServiceModalVisible] = useState(false);
    const [modalAction, setModalAction] = useState<"create" | "edit">("create");
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const handleOpenEditService = (service: Service) => {
        setModalAction("edit");
        setSelectedService(service);
        setServiceModalVisible(true);
    };

    const handleOpenCreateService = () => {
        setModalAction("create");
        setSelectedService(null);
        setServiceModalVisible(true);
    };

    const handleDelete = (type: "pet" | "service", id: string) => {
        const label = type === "pet" ? "pet" : "serviço";

        Alert.alert(
            `Excluir ${label}`,
            `Tem certeza que deseja excluir este ${label}?`,
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: () => {
                        if (type === "pet") {
                            // DELETE /pets/:id
                            console.log("Pet excluído:", id);
                        }

                        if (type === "service") {
                            // DELETE /services/:id
                            console.log("Serviço excluído:", id);
                        }
                    },
                },
            ]
        );
    };

    const handleClose = () => {
        setServiceModalVisible(false);
    }

    const handleSave = (service: Service) => {
        // 🔒 pronto para API
        // if (modalAction === "create") POST /services
        // else PUT /services/:id
        handleClose();
    }

    return {
        userType,
        user,
        pets,
        clinic,
        services,
        serviceModalVisible,
        modalAction,
        selectedService,
        handleOpenCreateService,
        handleOpenEditService,
        handleDelete,
        handleClose,
        handleSave,
    };
};


export default useProfileLogic;