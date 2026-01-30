import { useState } from "react";

import { services, serviceTypes } from "@/data/data-test";

const useHomeLogic = () => {
    const [selectedType, setSelectedType] = useState<string>("1");

    const filteredServices = services.filter(
        (service) => service.typeId === selectedType
    );

    return {
        serviceTypes,
        services: filteredServices,
        selectedType,
        setSelectedType,
    };
};

export default useHomeLogic;