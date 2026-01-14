import useSignUpLogic from "./signup.logic";
import SignUpView from "./signup.view";

export default function SignUpScreen() {
    const state = useSignUpLogic();
    return <SignUpView {...state} />
}