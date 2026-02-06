import useDetailsLogic from "./details.logic";
import DetailsView from "./details.view";

import { Pet } from "@/types/pets";
import { Appointment } from "@/types/appointments";

import ScheduleModal from "@/components/modal/ScheduleModal";
import EditPetModal from "@/components/modal/PetModal";


const DetailsScreen = () => {
    const state = useDetailsLogic();

    const closeSchedule = () => state.handleClose("schedule");
    const closeEditPet = () => state.handleClose("pet");
    const saveSchedule = (data: Appointment) => state.handleSaveSchedule(data);
    const saveEditPet = (data: Pet) => state.handleSaveEditPet(data);

    return (
        <>
            <DetailsView
                {...state}
                onOpenSchedule={state.handleOpenSchedule}
                onOpenEditPet={state.handleOpenEditPet}
            />

            <ScheduleModal
                visible={state.openSchedule}
                onClose={closeSchedule}
                onConfirm={saveSchedule}
                availableSlots={state.availableSlots}
                selectedSlot={state.selectedSlot}
                setSelectedSlot={state.setSelectedSlot}
                showSlots={state.showSlots}
                setShowSlots={state.setShowSlots}

                pets={state.pets}           // 👈 lista de pets do usuário
                selectedPet={state.selectedPet}
                setSelectedPet={state.setSelectedPet}
                showPets={state.showPets}
                setShowPets={state.setShowPets}
            />

            <EditPetModal
                action={"edit"}
                visible={state.openEditPet}
                pet={state.type === "pet" ? state.data : null}
                onClose={closeEditPet}
                onConfirm={saveEditPet}
            />
        </>
    )
}

export default DetailsScreen;