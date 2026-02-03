import useDetailsLogic from "./details.logic";
import DetailsView from "./details.view";

const DetailsScreen = () => {
    const state = useDetailsLogic();
    return <DetailsView {... state} />;
}

export default DetailsScreen;