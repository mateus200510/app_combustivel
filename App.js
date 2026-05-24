import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function App() {
  const [etanol, setEtanol] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [resultado, setResultado] = useState(null);

  function verificar() {
    const e = parseFloat(etanol.replace(",", "."));
    const g = parseFloat(gasolina.replace(",", "."));

    if (!e || !g || e <= 0 || g <= 0) {
      setResultado({
        mensagem: "Digite os dois preços corretamente!",
        tipo: "erro",
      });
      return;
    }

    const percentual = ((e / g) * 100).toFixed(1);

    if (e / g <= 0.7) {
      setResultado({
        mensagem: `Abasteça com ETANOL! O etanol está a ${percentual}% da gasolina.`,
        tipo: "etanol",
      });
    } else {
      setResultado({
        mensagem: `Abasteça com GASOLINA! O etanol está a ${percentual}% da gasolina.`,
        tipo: "gasolina",
      });
    }
  }

  function getResultadoStyle() {
    if (!resultado) return {};
    if (resultado.tipo === "etanol") return styles.cardEtanol;
    if (resultado.tipo === "gasolina") return styles.cardGasolina;
    return styles.cardErro;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logo}>
          <Image
            source={require("./assets/petrobras.jpg")}
            style={styles.logoImagem}
          />
        </View>

        <Text style={styles.titulo}>Álcool ou Gasolina?</Text>
        <Text style={styles.subtitulo}>
          Descubra qual combustível vale mais a pena
        </Text>

        <Text style={styles.label}>Preço do Etanol (R$)</Text>
        <TextInput
          style={styles.input}
          value={etanol}
          onChangeText={setEtanol}
          placeholder="Ex: 3.49"
          keyboardType="decimal-pad"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Preço da Gasolina (R$)</Text>
        <TextInput
          style={styles.input}
          value={gasolina}
          onChangeText={setGasolina}
          placeholder="Ex: 5.59"
          keyboardType="decimal-pad"
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity style={styles.botao} onPress={verificar}>
          <Text style={styles.botaoTexto}>VERIFICAR VANTAGEM</Text>
        </TouchableOpacity>

        {resultado && (
          <View style={[styles.resultCard, getResultadoStyle()]}>
            <Text style={styles.resultadoEmoji}>
              {resultado.tipo === "etanol"
                ? "🌿"
                : resultado.tipo === "gasolina"
                ? "⛽"
                : "⚠️"}
            </Text>

            <Text style={styles.resultadoTexto}>{resultado.mensagem}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 28,
    width: "100%",
    maxWidth: 380,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  logo: {
    alignItems: "center",
    marginBottom: 16,
  },
  logoImagem: {
    width: 150,
    height: 90,
    resizeMode: "contain",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1a1a",
    textAlign: "center",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 13,
    color: "#888",
    textAlign: "center",
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    color: "#1a1a1a",
    backgroundColor: "#fafafa",
  },
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
    fontWeight: "500",
  },
});