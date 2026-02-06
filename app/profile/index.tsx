import ClinicModal from "@/components/modal/ClinicModal";
import useProfileLogic from "./profile.logic";
import ProfileView from "./profile.view";

import ServiceModal from "@/components/modal/ServiceModal";

const ProfileScreen = () => {
    const state = useProfileLogic();

    const closeService = () => state.handleClose("service");
    const closeClinic = () => state.handleClose("clinic");

    return (
        <>
            <ProfileView
                {...state}
                onCreateService={state.handleOpenCreateService}
                onEditService={state.handleOpenEditService}
                onEditClinic={state.handleOpenEditClinic}
                onCreateClinic={state.handleOpenCreateClinic}
                onDelete={state.handleDelete}
            />

            <ServiceModal
                action={state.modalAction}
                visible={state.serviceModalVisible}
                service={state.selectedService}
                onClose={closeService}
                onConfirm={state.handleSaveService}
            />

            <ClinicModal
                action={state.clinicAction}
                visible={state.clinicModalVisible}
                clinic={state.selectedClinic}
                onClose={closeClinic}
                onConfirm={state.handleSaveClinic}
            />

        </>
    )
}

export default ProfileScreen;