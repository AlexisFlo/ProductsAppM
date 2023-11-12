import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { getOrders } from "../../database";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    height: 150,
    width: "90%",
    backgroundColor: "#B8B6E2",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 15,
  },
  contentContainerList: {
    paddingTop: 40,
  },
});

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getOrders()
      .then((orders) => setData(orders))
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => <View style={styles.item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainerList}
      />
    </View>
  );
}
