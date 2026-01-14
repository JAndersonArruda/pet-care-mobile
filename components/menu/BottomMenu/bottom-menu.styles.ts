import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 56,
    backgroundColor: "#1E3A8A", // azul igual da imagem
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    width: 24,
    height: 3,
    backgroundColor: "#E53935", // vermelho
    borderRadius: 2,
  },
});

export default styles;