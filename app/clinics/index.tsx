import useClinicsLogic from "./clinics.logic";
import ClinicsView from "./clinics.view";

const ClinicsScreen = () => {
    const state = useClinicsLogic();
    return <ClinicsView {... state} />
}

export default ClinicsScreen;