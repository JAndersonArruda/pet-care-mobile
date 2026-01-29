import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./card.styles";

interface CardProps {
    title: string;
    image: any;
    subtitle?: string; // preço ou info extra
    onPress: () => void;
}

const Card = ({ title, image, subtitle, onPress }: CardProps) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Image
                source={image}
                style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
        </TouchableOpacity>
    );
};

export default Card;