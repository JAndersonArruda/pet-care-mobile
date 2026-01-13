import PreloadView from './preload.view';
import usePreloadLogic from './preload.logic';

const PreloadScreen = () => {
    const state = usePreloadLogic();
    return <PreloadView {...state} />;
}

export default PreloadScreen;