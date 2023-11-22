// import { Picker } from "@react-native-picker/picker";
// import { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "#556f75",
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 15,
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
// "productList"
export default function ProductList() {
  // const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={styles.container}>
      <Text>Lista de compra</Text>
      {/* 
        Los datos del inventario, inusmo se obtienen de la base de datos y se verán en una tabla o una flatlist
        con un botón para editar y otro para eliminar 
      */}
      {/* 
      <TextInput placeholder="Producto" style={styles.input} />
      <TextInput placeholder="Cantidad" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="$ Precio" style={styles.input} keyboardType="numeric" />
      <Text>Categoría</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Vegetales" value="Veg" />
        <Picker.Item label="Frutas" value="Fru" />
      </Picker>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
      */}
    </View>
  );
}
