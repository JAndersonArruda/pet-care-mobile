import { Modal, View, Text, Pressable } from "react-native";
import styles from "./schedule-modal.styles";

type ScheduleModalProps = {
    visible: boolean;
    onClose: () => void;
    onConfirm: () => void;
};

const ScheduleModal = ({ visible, onClose, onConfirm }: ScheduleModalProps) => {
    return (
        <Modal
            transparent
            animationType="slide"
            visible={visible}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>

                    <View style={styles.row}>
                        <Text style={styles.label}>Serviço</Text>
                        <Text style={styles.label}>Clínica</Text>
                    </View>

                    <View style={styles.valueRow}>
                        <Text style={styles.value}>Banho e Tosa</Text>
                        <Text style={styles.value}>PetCare</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>Data e horário</Text>
                        <Text style={styles.label}>Preço</Text>
                    </View>

                    <View style={styles.valueRow}>
                        <Text style={styles.value}>20/02 • 14:30</Text>
                        <Text style={styles.value}>R$ 80,00</Text>
                    </View>

                    <Text style={styles.label}>Pet</Text>
                    <Text style={styles.value}>Thor • Labrador</Text>

                    <View style={styles.actions}>
                        <Pressable onPress={onClose}>
                            <Text style={styles.cancel}>Cancelar</Text>
                        </Pressable>

                        <Pressable onPress={onConfirm}>
                            <Text style={styles.confirm}>Confirmar</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </Modal>
    );
};

export default ScheduleModal;
