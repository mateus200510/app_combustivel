import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ texto, onPress, estilo }) {
  return (
    <TouchableOpacity style={[styles.botao, estilo]} onPress={onPress}>
      <Text style={styles.botaoTexto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#009640",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    marginTop: 4,
  },
  botaoTexto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 1,
  },
});
