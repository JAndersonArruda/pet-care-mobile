import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

import { availableSlots, pets, services } from "@/data/data-test";

import { Service } from "@/types/services";
import { Pet } from "@/types/pets";
import { AvailableSlot } from "@/types/availableSlot";
import { Appointment } from "@/types/appointments";

type ParamsProps = {
    id: string;
    type: "service" | "pet";
}

type DataType = Service | Pet | null


const useDetailsLogic = () => {
    const { id, type } = useLocalSearchParams<ParamsProps>();
    const [data, setData] = useState<DataType>(null);

    const [openSchedule, setOpenSchedule] = useState(false);
    const [openEditPet, setOpenEditPet] = useState(false);

    const [selectedSlot, setSelectedSlot] = useState<AvailableSlot | null>(null);
    const [showSlots, setShowSlots] = useState(false);

    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
    const [showPets, setShowPets] = useState(false);

    const handleOpenSchedule = () => {
        setOpenSchedule(true);
    }

    const handleOpenEditPet = () => {
        setOpenEditPet(true)
    }

    const handleClose = (type: "pet" | "schedule") => {
        if (type === "pet") setOpenEditPet(false);
        if (type === "schedule") setOpenSchedule(false);
    }

    const handleSaveSchedule = (data: Appointment) => {
        // cadastrar o agendamento

        handleClose("schedule");
        router.push("/appointments");
    }

    const handleSaveEditPet = (data: Pet) => {
        // salvar edição de pet

        handleClose("pet");
    }

    useEffect(() => {
        if (type === "service") {
            const item = services.find(
                service => service.id === id
            );
            setData(item ?? null);
        }

        if (type === "pet") {
            const item = pets.find(
                pet => pet.id === id
            );
            setData(item ?? null);
        }
    }, [id, type]);

    return {
        data,
        type,
        pets,
        availableSlots,
        openSchedule,
        openEditPet,
        selectedSlot,
        showSlots,
        selectedPet,
        showPets,
        setSelectedSlot,
        setShowSlots,
        setSelectedPet,
        setShowPets,
        handleOpenSchedule,
        handleOpenEditPet,
        handleClose,
        handleSaveSchedule,
        handleSaveEditPet,
    };
};

export default useDetailsLogic;