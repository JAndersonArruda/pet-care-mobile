import { Modal, View, Text, Pressable } from "react-native";
import styles from "./schedule-modal.styles";

import { AvailableSlot } from "@/types/availableSlot";
import { Pet } from "@/types/pets";

import AvailableSlotsModal from "../AvailableSlotsModal";
import PetSelectModal from "../PetSelectModal";
import { Appointment } from "@/types/appointments";

type ScheduleModalProps = {
    visible: boolean;
    onClose: () => void;
    onConfirm: (data: Appointment) => void;
    availableSlots: AvailableSlot[];
    selectedSlot: AvailableSlot | null;
    setSelectedSlot: (slot: AvailableSlot) => void;
    showSlots: boolean;
    setShowSlots: (value: boolean) => void;
    pets: Pet[];
    selectedPet: Pet | null;
    setSelectedPet: (pet: Pet) => void;
    showPets: boolean;
    setShowPets: (value: boolean) => void;
};

const ScheduleModal = ({
    visible,
    onClose,
    onConfirm,
    availableSlots,
    selectedSlot,
    setSelectedSlot,
    showSlots,
    setShowSlots,
    pets,
    selectedPet,
    setSelectedPet,
    showPets,
    setShowPets
}: ScheduleModalProps) => {
    const handleConfirm = () => {
        if (!selectedSlot || !selectedPet) return;

        const appointmentPayload: Appointment = {
            id: "100",
            petName: selectedPet.name,
            service: "Banho e Tosa",
            clinic: "PetCare",
            datetime: selectedSlot.label,
            status: "PENDENTE",
        };

        onConfirm(appointmentPayload);
    };

    return (
        <Modal
            transparent
            animationType="slide"
            visible={visible}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Agendar serviço</Text>

                    <View style={styles.row}>
                        <View style={styles.field}>
                            <Text style={styles.label}>Serviço</Text>
                            <View style={styles.select}>
                                <Text style={styles.value}>Banho e Tosa</Text>
                            </View>
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Clínica</Text>
                            <View style={styles.select}>
                                <Text style={styles.value}>PetCare</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.field}>
                            <Text style={styles.label}>Data e horário</Text>
                            <Pressable
                                style={styles.select}
                                onPress={() => setShowSlots(true)}
                            >
                                <Text style={styles.value}>
                                    {selectedSlot ? selectedSlot.label : "Selecionar"}
                                </Text>
                            </Pressable>
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Preço</Text>
                            <View style={styles.select}>
                                <Text style={styles.value}>R$ 80,00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.fieldFull}>
                        <Text style={styles.label}>Pet</Text>
                        <Pressable
                            style={styles.select}
                            onPress={() => setShowPets(true)}
                        >
                            <Text style={styles.value}>
                                {selectedPet ? `${selectedPet.name} • ${selectedPet.breed}` : "Selecionar"}
                            </Text>
                        </Pressable>
                    </View>

                    <View style={styles.actions}>
                        <Pressable onPress={onClose}>
                            <Text style={styles.cancel}>Cancelar</Text>
                        </Pressable>

                        <Pressable
                            onPress={handleConfirm}
                            disabled={!selectedSlot}
                        >
                            <Text style={[
                                styles.confirm,
                                (!selectedSlot || !selectedPet) && { opacity: 0.5 }
                            ]}>Confirmar</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Modal de horários */}
                <AvailableSlotsModal
                    visible={showSlots}
                    slots={availableSlots}
                    selectedSlot={selectedSlot}
                    onSelect={(slot) => {
                        setSelectedSlot(slot);
                        setShowSlots(false);
                    }}
                    onClose={() => setShowSlots(false)}
                />

                {/* Modal de pets */}
                <PetSelectModal
                    visible={showPets}
                    pets={pets}
                    selectedPet={selectedPet}
                    onSelect={(pet) => {
                        setSelectedPet(pet);
                        setShowPets(false);
                    }}
                    onClose={() => setShowPets(false)}
                />

            </View>
        </Modal>
    );
};

export default ScheduleModal;
