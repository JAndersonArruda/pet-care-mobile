import { Modal, View, Text, Pressable } from "react-native";
import styles from "./available-slots-modal";
import { AvailableSlot } from "@/types/availableSlot";

type AvailableSlotsModalProps = {
    visible: boolean;
    slots: AvailableSlot[];
    selectedSlot: AvailableSlot | null;
    onSelect: (slot: AvailableSlot) => void;
    onClose: () => void;
};

const AvailableSlotsModal = ({
    visible,
    slots,
    selectedSlot,
    onSelect,
    onClose,
}: AvailableSlotsModalProps) => {
    return (
        <Modal 
            transparent animationType="fade" 
            visible={visible}
        >
            <Pressable 
                style={styles.slotsOverlay} 
                onPress={onClose}
            >
                <View style={styles.slotsContainer}>
                    {slots.map((slot) => (
                        <Pressable
                            key={slot.id}
                            style={[
                                styles.slotItem,
                                selectedSlot?.id === slot.id && styles.slotItemActive,
                            ]}
                            onPress={() => onSelect(slot)}
                        >
                            <Text style={styles.slotText}>
                                {slot.label}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </Pressable>
        </Modal>
    );
};

export default AvailableSlotsModal;
