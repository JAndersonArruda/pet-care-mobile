import useProfileLogic from "./profile.logic";
import ProfileView from "./profile.view";

const ProfileScreen = () => {
    const state = useProfileLogic();
    return <ProfileView {... state} />
}

export default ProfileScreen;