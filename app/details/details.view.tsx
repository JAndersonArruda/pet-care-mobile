import { Image, Text, View } from "react-native";
import styles from "./details.styles";

import { Service } from "@/types/services";
import { Pet } from "@/types/pets";
import BottomMenu from "@/components/menu/BottomMenu";
import AppHeader from "@/components/header/AppHeader";

type DetailsViewProps =
    | {
        type: "service",
        data: Service
    }
    | {
        type: "pet",
        data: Pet
    }

const DetailsView = ({ data, type }: DetailsViewProps) => {
    if (!data) {
        return (
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        );
    }

    const screen = type === "pet" ? "pets" : "home";

    return (
        <View style={styles.container}>
            <AppHeader />

            <Image source={{ uri: data.image }} style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.title}>{data.name}</Text>

                {type === "service" ? (
                    <>
                        <Text style={styles.subtitle}>{data.clinic}</Text>

                        {data.location ? (
                            <Text style={styles.location}>
                                📍 {data.location.address} • {data.location.distanceKm} km
                            </Text>
                        ) : (
                            <Text style={styles.location}>Localização indefinida</Text>
                        )}

                        <View style={styles.tags}>
                            <Text style={styles.tag}>{data.price}</Text>
                            <Text style={styles.tag}>Serviço</Text>
                        </View>
                    </>
                ) : (
                    <>
                        <View style={styles.tags}>
                            <Text style={styles.tag}>{data.sex}</Text>
                            <Text style={styles.tag}>{data.age}</Text>
                            <Text style={styles.tag}>{data.breed}</Text>
                        </View>
                    </>
                )}

                <Text style={styles.description}>{data.description}</Text>
            </View>

            <BottomMenu initialTabs={screen} />
        </View>
    );
}

export default DetailsView;