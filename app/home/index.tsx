import useHomeLogic from "./home.logic";
import HomeView from "./home.view";

const HomeScreen = () => {
    const state = useHomeLogic();
    return <HomeView {... state} />
}

export default HomeScreen;