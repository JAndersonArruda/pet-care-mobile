import { useState } from "react";
import { router } from "expo-router";

import useDetailsLogic from "./details.logic";
import DetailsView from "./details.view";

import ScheduleModal from "@/components/modal/ScheduleModal";
import EditPetModal from "@/components/modal/EditPetModal";

const DetailsScreen = () => {
    const state = useDetailsLogic();

    const [openSchedule, setOpenSchedule] = useState(false);
    const [openEditPet, setOpenEditPet] = useState(false);

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
            />

            <EditPetModal
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