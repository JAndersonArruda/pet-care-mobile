import { Image, Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import styles from "./card.styles";

import { Service } from "@/types/services";
import { Pet } from "@/types/pets";

type CardProps =
    | {
        type: "service";
        data: Service
    }
    | {
        type: "pet";
        data: Pet
    };

const Card = ({ data, type }: CardProps) => {
    const handlePress = () => {
        router.push({
            pathname: "/details",
            params: {
                id: data.id,
                type,
            },
        });
    };

    return (
        <Pressable onPress={handlePress}>
            <View style={styles.card}>
                <Image source={{ uri: data.image }} style={styles.image} />

                <View style={styles.info}>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.title}>{data.name}</Text>

                            {type === "service" ? (
                                <Text style={styles.subTitle}>{data.clinic}</Text>
                            ) : (
                                <Text style={styles.subTitle}>
                                    {data.breed} • {data.age}
                                </Text>
                            )}
                        </View>
                        <View style={styles.right}>
                            {type === "service" ? (
                                <Text style={styles.textRight}>{data.price}</Text>
                            ) : (
                                <Text style={styles.textRight}>{data.sex}</Text>

                            )}
                        </View>
                    </View>
                </View>
            </View >
        </Pressable>
    );
};

export default Card;
