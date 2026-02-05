import { useState } from "react";
import usePetsLogic from "./pets.logic";
import PetsView from "./pets.view";

import CreatePetModal from "@/components/modal/PetModal";

const PetsScreen = () => {
    const state = usePetsLogic();
    const [openCreatePet, setOpenCreatePet] = useState(false);

    return (
        <>
            <PetsView 
                {...state} 
                onCreatePet={() => setOpenCreatePet(true)}
            />

            <CreatePetModal
                action="create"
                visible={openCreatePet}
                onClose={() => setOpenCreatePet(false)}
                onConfirm={(newPet) => {
                    // vazio por enquanto (API depois)
                    setOpenCreatePet(false);
                }}
            />
        </>

    )

}

export default PetsScreen;