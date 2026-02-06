import { FlatList, Image, Pressable, Text, View } from "react-native";
import styles from "./profile.styles";

import { UserType } from "./profile.logic";
import { Service } from "@/types/services";

import BottomMenu from "@/components/menu/BottomMenu";
import AppHeader from "@/components/header/AppHeader";
import Card from "@/components/cards/Card";

interface ProfileViewProps {
    userType: UserType;
    user: any;
    pets: any[];
    clinic: any;
    services: any[];
    onCreateService: () => void;
    onEditService: (service: Service) => void;
    onDelete: (type: "pet" | "service", id: string) => void;
}

const ProfileView = ({ userType, user, pets, clinic, services, onCreateService, onEditService, onDelete }: ProfileViewProps) => {
    return (
        <View style={styles.container}>
            <AppHeader />

            {/* TOPO PERFIL */}
            <View style={styles.profileHeader}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />


                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                    <Text style={styles.address}>{user.address}</Text>
                </View>
            </View>


            {/* CLIENTE */}
            {userType === "client" && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Meus Pets</Text>


                    <FlatList
                        data={pets}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <Card type="pet" data={item} />
                                <View style={styles.overlayActions}>
                                    <Pressable
                                        style={styles.overlayDeleteButton}
                                        onPress={(event) => {
                                            event.stopPropagation();
                                            onDelete("pet", item.id);
                                        }}
                                    >
                                        <Text style={styles.overlayDeleteText}>Excluir</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )}
                    />
                </View>
            )}

            {/* ADMIN */}
            {userType === "admin" && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{clinic.name}</Text>
                    <Text style={styles.address}>{clinic.address}</Text>

                    <View style={styles.servicesHeader}>
                        <Text style={styles.sectionTitle}>Serviços</Text>
                        <Pressable
                            style={styles.contentAddService}
                            onPress={onCreateService}
                        >
                            <Text style={styles.addService}>+ Adicionar</Text>
                        </Pressable>
                    </View>


                    <FlatList
                        data={services}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <Card type="service" data={item} />

                                <View style={styles.overlayActions}>
                                    <Pressable
                                        style={styles.overlayEditButton}
                                        onPress={() => onEditService(item)}
                                    >
                                        <Text style={styles.overlayEditText}>Editar</Text>
                                    </Pressable>
                                    <Pressable
                                        style={styles.overlayDeleteButton}
                                        onPress={(event) => {
                                            event.stopPropagation();
                                            onDelete("service", item.id);
                                        }}
                                    >
                                        <Text style={styles.overlayDeleteText}>Excluir</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )}
                    />
                </View>
            )}

            <BottomMenu initialTabs="profile" />
        </View>
    );
};

export default ProfileView;
