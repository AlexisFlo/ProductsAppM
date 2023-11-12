import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

import { getOrders, insertOrder } from "../../database";

const styles = StyleSheet.create({});

const ProductRegistrationScreen = () => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getOrders()
      .then((orders) => setData(orders))
      .catch((error) => console.error(error));
  }, []);

  const handleRegister = () => {
    insertOrder(product, quantity, price);
    console.log(`Registrando producto: ${product}, Cantidad: ${quantity}, Precio: ${price}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Producto: {item.producto}</Text>
      <Text>Cantidad: {item.cantidad}</Text>
      <Text>Precio: {item.precio}</Text>
    </View>
  );

  return (
    <View>
      <TextInput placeholder="Producto" value={product} onChangeText={setProduct} />
      <TextInput
        placeholder="Cantidad"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Registrar Producto" onPress={handleRegister} />
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

export default ProductRegistrationScreen;
