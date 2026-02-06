import useProfileLogic from "./profile.logic";
import ProfileView from "./profile.view";

import ServiceModal from "@/components/modal/ServiceModal";

const ProfileScreen = () => {
    const state = useProfileLogic();

    return (
        <>
            <ProfileView
                {...state}
                onCreateService={state.handleOpenCreateService}
                onEditService={state.handleOpenEditService}
                onDelete={state.handleDelete}
            />

            <ServiceModal
                action={state.modalAction}
                visible={state.serviceModalVisible}
                service={state.selectedService}
                onClose={state.handleClose}
                onConfirm={state.handleSave}
            />
        </>
    )
}

export default ProfileScreen;