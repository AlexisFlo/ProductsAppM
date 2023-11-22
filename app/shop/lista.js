// import { Picker } from "@react-native-picker/picker";
// import { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Card } from "../components";

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
export default function List() {
  // const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={styles.container}>
      <Text>Lista de compra</Text>
      <Card />
      {/* 
        En esta pantalla se debe mostrar la lista de productos que el usuario ha agregado a su lista de compra, y se tendrá la opción de que agregue datos a esta.
      */}
    </View>
  );
}
