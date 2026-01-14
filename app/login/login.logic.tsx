import { useState } from "react";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

const useLoginLogic = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    function handleLogin() {
        if (!email.trim()) {
            Alert.alert("Error", "O campo Email é obrigatório!");
            return;
        }
        if (!password.trim()) {
            Alert.alert("Error", "O campo Senha é obrigatório!");
            return;
        }
        console.log({ email, password, remember });

        router.replace("/home");
    }

    function handleToSignUp() {
        router.replace("/signup");
    }

    function handleGoogleLogin() {
        console.log("Login com Google");
    }

    return {
        email,
        password,
        remember,
        setEmail,
        setPassword,
        setRemember,
        handleLogin,
        handleToSignUp,
        handleGoogleLogin,
    };
};

export default useLoginLogic;