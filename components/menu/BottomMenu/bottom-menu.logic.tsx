import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export type BottomMenuItem = {
    key: string;
    icon: keyof typeof Ionicons.glyphMap;
    routePath: "/home" | "/pets" | "/grid" | "/profile" | "/clinics";
};

const useBottomMenuLogic = (initialTab: string = "home") => {
    const [activeTab, setActiveTab] = useState(initialTab);

    const menuItems: BottomMenuItem[] = [
        { key: "home", icon: "home-outline", routePath: "/home" },
        { key: "grid", icon: "grid-outline", routePath: "/grid" },
        { key: "pets", icon: "paw-outline", routePath: "/pets" },
        { key: "appointments", icon: "pulse-outline", routePath: "appointments" },
        { key: "profile", icon: "person-outline", routePath: "/profile" },
    ];

    return {
        menuItems,
        activeTab,
        setActiveTab
    }
};

export default useBottomMenuLogic;