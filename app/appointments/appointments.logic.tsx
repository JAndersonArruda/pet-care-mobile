import { useState } from "react";

import { Appointment } from "@/types/appointments";

import { mockAppointments } from "@/data/data-test";

const useAppointmentsLogic = () => {
    const [appointments] = useState<Appointment[]>(mockAppointments);

    return {
        appointments,
    };
};


export default useAppointmentsLogic;