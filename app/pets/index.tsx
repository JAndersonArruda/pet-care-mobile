import usePetsLogic from "./pets.logic";
import PetsView from "./pets.view";

import CreatePetModal from "@/components/modal/PetModal";

const PetsScreen = () => {
    const state = usePetsLogic();

    return (
        <>
            <PetsView 
                {...state} 
                onCreatePet={state.handleOpenCreatePet}
            />

            <CreatePetModal
                action="create"
                visible={state.openCreatePet}
                onClose={state.handleClose}
                onConfirm={state.handleSave}
            />
        </>

    )

}

export default PetsScreen;