import { useState } from "react";

import { Pet } from "@/types/pets";

import { pets } from "@/data/data-test";

const usePetsLogic = () => {
    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

    return {
        pets,
        selectedPet,
        setSelectedPet,
    };
};

export default usePetsLogic;