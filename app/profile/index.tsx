import { useState } from "react";
import useProfileLogic from "./profile.logic";
import ProfileView from "./profile.view";

import { Service } from "@/types/services";

import ServiceModal from "@/components/modal/ServiceModal";
import { Alert } from "react-native";

const ProfileScreen = () => {
    const state = useProfileLogic();

    const [serviceModalVisible, setServiceModalVisible] = useState(false);
    const [modalAction, setModalAction] = useState<"create" | "edit">("create");
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const handleEditService = (service: Service) => {
        setModalAction("edit");
        setSelectedService(service);
        setServiceModalVisible(true);
    };

    const handleCreateService = () => {
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


    return (
        <>
            <ProfileView
                {...state}
                onCreateService={handleCreateService}
                onEditService={handleEditService}
                onDelete={handleDelete}
            />

            <ServiceModal
                action={modalAction}
                visible={serviceModalVisible}
                service={selectedService}
                onClose={() => setServiceModalVisible(false)}
                onConfirm={(service) => {
                    // 🔒 pronto para API
                    // if (modalAction === "create") POST /services
                    // else PUT /services/:id

                    setServiceModalVisible(false);
                }}
            />
        </>
    )
}

export default ProfileScreen;