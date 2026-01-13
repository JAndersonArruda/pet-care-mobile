import { useEffect } from 'react';
import { useRouter } from 'expo-router';

const usePreloadLogic = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (true) router.replace('/login');
        }, 9000);

        return () => clearTimeout(timer);
    }, [router]);

    return {};
}

export default usePreloadLogic;
