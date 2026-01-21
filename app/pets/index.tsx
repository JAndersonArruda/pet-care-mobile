import usePetsLogic from "./pets.logic";
import PetsView from "./pets.view";


const PetsScreen = () => {
    const state = usePetsLogic();
    return <PetsView {... state} />
}

export default PetsScreen;