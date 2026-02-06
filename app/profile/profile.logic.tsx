import { useState } from "react";
import { Alert } from "react-native";

import { clinic, pets, services, user } from "@/data/data-test";
import { Service } from "@/types/services";
import { Clinic } from "@/types/clinic";

export type UserType = "client" | "admin";

const useProfileLogic = () => {
    const [userType] = useState<UserType>("admin"); // trocar para 'client' quando necessário

    // SERVICES
    const [serviceModalVisible, setServiceModalVisible] = useState(false);
    const [modalAction, setModalAction] = useState<"create" | "edit">("create");
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    // CLINIC
    const [clinicModalVisible, setClinicModalVisible] = useState(false);
    const [clinicAction, setClinicAction] = useState<"create" | "edit">("edit");
    const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(clinic);


    const handleOpenEditClinic = () => {
        setClinicAction("edit");
        setSelectedClinic(clinic);
        setClinicModalVisible(true);
    };

    const handleOpenCreateClinic = () => {
        setClinicAction("create");
        setSelectedClinic(null);
        setClinicModalVisible(true);
    };

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

    const handleClose = (type: "service" | "clinic") => {
        if (type === "service") setServiceModalVisible(false);
        if (type === "clinic") setClinicModalVisible(false);
    }

    const handleSaveService = (service: Service) => {
        // 🔒 pronto para API
        // if (modalAction === "create") POST /services
        // else PUT /services/:id
        handleClose("service");
    }

     const handleSaveClinic = (clinic: Clinic) => {
        // 🔒 pronto para API
        // if (clinicAction === "create") POST /clinics
        // else PUT /clinics/:id
        handleClose("clinic");
    };

    return {
        userType,
        user,
        pets,
        clinic,
        services,
        serviceModalVisible,
        clinicModalVisible,
        modalAction,
        clinicAction,
        selectedService,
        selectedClinic,
        handleOpenCreateService,
        handleOpenCreateClinic,
        handleOpenEditService,
        handleOpenEditClinic,
        handleSaveService,
        handleSaveClinic,
        handleDelete,
        handleClose,
    };
};


export default useProfileLogic;