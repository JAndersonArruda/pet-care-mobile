import useLoginLogic from "./login.logic";
import LoginView from "./login.view";

export default function LoginScreen() {
    const state = useLoginLogic();
    return <LoginView {...state} />
}