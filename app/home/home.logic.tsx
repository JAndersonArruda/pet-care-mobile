import { useState } from "react";
import { ImageSourcePropType } from "react-native";

export interface Service {
    id: string;
    name: string;
    price: string;
    image: ImageSourcePropType,
    description: string;
}

const useHomeLogic = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const services: Service[] = [
        {
            id: "1",
            name: "Banho",
            price: "R$ 50,00",
            image: require("@/assets/images/banho.png"),
            description: "Banho completo com produtos PetNut"
        },
        {
            id: "2",
            name: "Banho",
            price: "R$ 50,00",
            image: require("@/assets/images/banho.png"),
            description: "Banho completo com produtos PetNut"
        },
        {
            id: "3",
            name: "Banho",
            price: "R$ 50,00",
            image: require("@/assets/images/banho.png"),
            description: "Banho completo com produtos PetNut"
        },
    ];

    return {
        services,
        selectedService,
        setSelectedService,
    };
};

export default useHomeLogic;