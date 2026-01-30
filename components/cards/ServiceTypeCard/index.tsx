import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./service-type-card.styles";

import { ServiceType } from "@/types/services";

interface ServiceTypeProps {
    data: ServiceType;
    selected: boolean;
    onPress: () => void;
}

const ServiceTypeCard = ({ data, selected, onPress }: ServiceTypeProps) => {
    return (
        <TouchableOpacity
            style={[styles.card, selected && styles.selected]}
            onPress={onPress}
        >
            <Image source={{ uri: data.icon }} style={[styles.icon, selected && styles.selectedIcon]} />
            <Text style={styles.text}>{data.name}</Text>
        </TouchableOpacity>
    );
};

export default ServiceTypeCard;
