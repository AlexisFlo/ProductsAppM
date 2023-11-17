import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 20,
    backgroundColor: "#3B5249",
    borderRadius: 15,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default function Categories() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Producto" />
      <TextInput placeholder="Cantidad" keyboardType="numeric" />
      <TextInput placeholder="$ Precio" keyboardType="numeric" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
