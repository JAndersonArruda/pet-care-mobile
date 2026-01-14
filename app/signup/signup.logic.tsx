import { useState } from "react";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

const useSignUpLogic = () => {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [remember, setRemember] = useState(false);

    function handleSignUp() {
        if (!name.trim()) {
            Alert.alert("Error", "O campo Nome é obrigatório!");
            return;
        }
        if (!email.trim()) {
            Alert.alert("Error", "O campo Email é obrigatório!");
            return;
        }
        if (!password.trim()) {
            Alert.alert("Error", "O campo Senha é obrigatório!");
            return;
        }
        if (!confirmPassword.trim()) {
            Alert.alert("Error", "O campo Confirmar senha é obrigatório!");
            return;
        }
        if (confirmPassword !== password) {
            Alert.alert("Error", "Confirmação de senha incompatível!");
            return;
        }
        console.log({ name, email, password, remember });

        handleToLogin();
    }

    function handleToLogin() {
        router.replace("/login");
    }

    function handleGoogleLogin() {
        console.log("Login com Google");
    }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         router.replace("/preload");
    //     }, 5000);

    //     return () => clearTimeout(timer);
    // }, [router]);

    return {
        name,
        email,
        password,
        confirmPassword,
        remember,
        setName,
        setEmail,
        setPassword,
        setConfirmPassword,
        setRemember,
        handleSignUp,
        handleToLogin,
        handleGoogleLogin,
    };
};

export default useSignUpLogic;