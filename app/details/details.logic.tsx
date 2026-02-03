import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

import { pets, services } from "@/data/data-test";

import { Service } from "@/types/services";
import { Pet } from "@/types/pets";

type ParamsProps = {
    id: string;
    type: "service" | "pet";
}

type DataType = Service | Pet | null


const useDetailsLogic = () => {
    const { id, type } = useLocalSearchParams<ParamsProps>();
    const [data, setData] = useState<DataType>(null);

    console.log(id + " " + type);

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
    };
};

export default useDetailsLogic;