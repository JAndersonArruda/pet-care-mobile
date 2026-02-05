import { useState } from "react";

import { pets, services } from "@/data/data-test";

export type UserType = "client" | "admin";

const useProfileLogic = () => {
    const [userType] = useState<UserType>("client"); // trocar para 'admin' quando necessário

    const user = {
        name: "Anderson Arruda",
        email: "anderson@email.com",
        address: "Rua das Flores, 123 - São Paulo/SP",
        avatar: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    };

    const clinic = {
        name: "Pet Love Clínica",
        address: "Av. Central, 456 - São Paulo/SP",
    };


    return {
        userType,
        user,
        pets,
        clinic,
        services,
    };
};


export default useProfileLogic;