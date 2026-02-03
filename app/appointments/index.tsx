import useAppointmentsLogic from "./appointments.logic";
import AppointmentsView from "./appointments.view";

const AppointmentsScreen = () => {
    const state = useAppointmentsLogic();
    return <AppointmentsView {... state} />
}

export default AppointmentsScreen;