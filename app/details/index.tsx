import { useState } from "react";
import { router } from "expo-router";

import useDetailsLogic from "./details.logic";
import DetailsView from "./details.view";

import { AvailableSlot } from "@/types/availableSlot";
import { Pet } from "@/types/pets";

import { availableSlots } from "@/data/data-test";

import ScheduleModal from "@/components/modal/ScheduleModal";
import EditPetModal from "@/components/modal/PetModal";


const DetailsScreen = () => {
    const state = useDetailsLogic();

    const [openSchedule, setOpenSchedule] = useState(false);
    const [openEditPet, setOpenEditPet] = useState(false);

    const [selectedSlot, setSelectedSlot] = useState<AvailableSlot | null>(null);
    const [showSlots, setShowSlots] = useState(false);

    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
    const [showPets, setShowPets] = useState(false);


    return (
        <>
            <DetailsView
                {...state}
                onOpenSchedule={() => setOpenSchedule(true)}
                onOpenEditPet={() => setOpenEditPet(true)}
            />

            <ScheduleModal
                visible={openSchedule}
                onClose={() => setOpenSchedule(false)}
                onConfirm={() => {
                    setOpenSchedule(false);
                    router.push("/appointments");
                }}
                availableSlots={availableSlots}
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                showSlots={showSlots}
                setShowSlots={setShowSlots}

                pets={state.pets}           // 👈 lista de pets do usuário
                selectedPet={selectedPet}
                setSelectedPet={setSelectedPet}
                showPets={showPets}
                setShowPets={setShowPets}
            />

            <EditPetModal
                action={"edit"}
                visible={openEditPet}
                pet={state.type === "pet" ? state.data : null}
                onClose={() => setOpenEditPet(false)}
                onConfirm={(updatedPet) => {
                    setOpenEditPet(false);
                    // depois: salvar pet
                }}
            />
        </>
    )
}

export default DetailsScreen;