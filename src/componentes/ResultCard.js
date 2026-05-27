import { View, Text, StyleSheet } from "react-native";

export default function ResultCard({ resultado }) {
  if (!resultado) return null;

  function getResultadoStyle() {
    if (resultado.tipo === "etanol") return styles.cardEtanol;
    if (resultado.tipo === "gasolina") return styles.cardGasolina;
    return styles.cardErro;
  }

  function getEmoji() {
    if (resultado.tipo === "etanol") return "🌿";
    if (resultado.tipo === "gasolina") return "⛽";
    return "⚠️";
  }

  return (
    <View style={[styles.resultCard, getResultadoStyle()]}>
      <Text style={styles.resultadoEmoji}>{getEmoji()}</Text>
      <Text style={styles.resultadoTexto}>{resultado.mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultCard: {
    marginTop: 20,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  cardEtanol: {
    backgroundColor: "#e8f5e9",
    borderWidth: 1,
    borderColor: "#a5d6a7",
  },
  cardGasolina: {
    backgroundColor: "#e3f2fd",
    borderWidth: 1,
    borderColor: "#90caf9",
  },
  cardErro: {
    backgroundColor: "#fff3e0",
    borderWidth: 1,
    borderColor: "#ffcc80",
  },
  resultadoEmoji: {
    fontSize: 30,
    marginBottom: 8,
  },
  resultadoTexto: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    lineHeight: 20,
  },
});
