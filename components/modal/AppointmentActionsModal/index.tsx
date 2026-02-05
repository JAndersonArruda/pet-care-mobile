import { Modal, Pressable, Text, View, TouchableWithoutFeedback } from "react-native";
import styles from "./appointment-actions-modal.styles";

interface Props {
    visible: boolean;
    status: "PENDENTE" | "CONCLUIDO";
    onClose: () => void;
    onViewDetails: () => void;
    onConclude?: () => void;
}

const AppointmentActionsModal = ({
    visible,
    status,
    onClose,
    onViewDetails,
    onConclude,
}: Props) => {
    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <View style={styles.menu}>
                        <Pressable style={styles.menuItem} onPress={onViewDetails}>
                            <Text style={styles.menuText}>Ver detalhes</Text>
                        </Pressable>

                        {status === "PENDENTE" && (
                            <Pressable
                                style={styles.menuItem}
                                onPress={onConclude}
                            >
                                <Text style={[styles.menuText, styles.success]}>
                                    Concluir
                                </Text>
                            </Pressable>
                        )}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default AppointmentActionsModal;
