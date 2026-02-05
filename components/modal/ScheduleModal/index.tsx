import { Modal, View, Text, Pressable } from "react-native";
import styles from "./schedule-modal.styles";

import { AvailableSlot } from "@/types/availableSlot";

import AvailableSlotsModal from "../AvailableSlotsModal";

type ScheduleModalProps = {
    visible: boolean;
    onClose: () => void;
    onConfirm: () => void;
    availableSlots: AvailableSlot[];
    selectedSlot: AvailableSlot | null;
    setSelectedSlot: (slot: AvailableSlot) => void;
    showSlots: boolean;
    setShowSlots: (value: boolean) => void;
};

const ScheduleModal = ({ 
    visible, 
    onClose, 
    onConfirm, 
    availableSlots,
    selectedSlot, 
    setSelectedSlot, 
    showSlots, 
    setShowSlots 
}: ScheduleModalProps) => {
    return (
        <Modal
            transparent
            animationType="slide"
            visible={visible}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Editar Pet</Text>

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
                        <View style={styles.select}>
                            <Text style={styles.value}>Thor • Labrador</Text>
                        </View>
                    </View>

                    <View style={styles.actions}>
                        <Pressable onPress={onClose}>
                            <Text style={styles.cancel}>Cancelar</Text>
                        </Pressable>

                        <Pressable 
                            onPress={onConfirm}  
                            disabled={!selectedSlot}
                        >
                            <Text style={[
                                styles.confirm, 
                                !selectedSlot && { opacity: 0.5 }
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
            </View>
        </Modal>
    );
};

export default ScheduleModal;
