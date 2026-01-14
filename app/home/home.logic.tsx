import { BottomMenuItem } from "@/components/menu/BottomMenu";
import { useState } from "react"

const useHomeLogic = () => {
    const [activeTab, setActiveTab] = useState("home");

    const menuItems: BottomMenuItem[] = [
        {
            key: "pets",
            icon: "home-outline",
            onPress: () => setActiveTab("home"),
        },
        {
            key: "pets",
            icon: "paw-outline",
            onPress: () => setActiveTab("pets"),
        },
        {
            key: "grid",
            icon: "grid-outline",
            onPress: () => setActiveTab("grid"),
        },
        {
            key: "profile",
            icon: "person-outline",
            onPress: () => setActiveTab("profile"),
        },
    ]

    return {
        menuItems,
        activeTab,
    }
};

export default useHomeLogic;