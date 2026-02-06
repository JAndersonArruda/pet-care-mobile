import { useState } from "react";

import { pets } from "@/data/data-test";
import { Pet } from "@/types/pets";

const usePetsLogic = () => {
    const [openCreatePet, setOpenCreatePet] = useState(false);

    const handleOpenCreatePet = () => {
        setOpenCreatePet(true);
    }

    const handleClose = () => {
        setOpenCreatePet(false);
    }

    const handleSave = (newPet: Pet) => {
        // vazio por enquanto (API depois)
        handleClose();
    }

    return {
        pets,
        openCreatePet,
        handleOpenCreatePet,
        handleClose,
        handleSave,
    };
};

export default usePetsLogic;