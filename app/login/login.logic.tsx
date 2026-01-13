import { useRouter } from "expo-router";
import { useEffect } from "react";

const useLoginLogic = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (true) router.replace('/preload');
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    return {};
}

export default useLoginLogic;