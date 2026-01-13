import { useState } from "react";

const useLoginLogic = () => {
    // const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    function handleLogin() {
        console.log({ email, password, remember });
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
        email,
        password,
        remember,
        setEmail,
        setPassword,
        setRemember,
        handleLogin,
        handleGoogleLogin,
    };
};

export default useLoginLogic;