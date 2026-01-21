import useGridLogic from "./grid.logic";
import GridView from "./grid.view";


const GridScreen = () => {
    const state = useGridLogic();
    return <GridView {... state} />
}

export default GridScreen;