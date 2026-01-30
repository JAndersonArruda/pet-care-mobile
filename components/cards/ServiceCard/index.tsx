import { Image, Text, View } from "react-native";
import styles from "./service-card.styles";

import { Service } from "@/types/services";
import { Pet } from "@/types/pets";

type ServiceCardProps =
    | {
        type: "service";
        data: Service
    }
    | {
        type: "pet";
        data: Pet
    };

const ServiceCard = ({ data, type }: ServiceCardProps) => {
    return (
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
    );
};

export default ServiceCard;
