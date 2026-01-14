import useLoginLogic from "./login.logic";
import LoginView from "./login.view";

const LoginScreen = () => {
    const state = useLoginLogic();
    return <LoginView {...state} />
}

export default LoginScreen;