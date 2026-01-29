import { useState } from "react";
import { ImageSourcePropType } from "react-native";

export interface Pet {
    id: string;
    name: string;
    image: ImageSourcePropType,
}

const usePetsLogic = () => {
    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

    const pets: Pet[] = [
            {
                id: "1",
                name: "Bem",
                image: require("@/assets/images/banho.png"),
            },
            {
                id: "2",
                name: "Antonio",
                image: require("@/assets/images/banho.png"),
            },
            {
                id: "3",
                name: "Joao",
                image: require("@/assets/images/banho.png"),
            },
        ];
    
        return {
            pets,
            selectedPet,
            setSelectedPet,
        };
};

export default usePetsLogic;