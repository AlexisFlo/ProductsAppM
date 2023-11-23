import { FlashList } from "@shopify/flash-list";
import React, { useRef, useState } from "react";
import { View, Text, Pressable, LayoutAnimation, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainerList: {
    paddingTop: 15,
  },
  header: {
    fontSize: 22,
    color: "#000",
    fontWeight: "bold",
  },
  headerContainer: {
    padding: 20,
    textAlign: "center",
  },
});

const List = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  const list = useRef(null);

  const removeItem = (item) => {
    setData(
      data.filter((dataItem) => {
        return dataItem !== item;
      })
    );
    list.current?.prepareForLayoutAnimationRender();

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          removeItem(item);
        }}>
        <View>
          <Text>Cell Id: {item}</Text>
        </View>
      </Pressable>
    );
  };

  const ListHeaderComponent = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Lista compra</Text>
    </View>
  );

  return (
    <View>
      <ListHeaderComponent />
      <FlashList
        ref={list}
        keyExtractor={(item) => {
          return item.toString();
        }}
        renderItem={renderItem}
        estimatedItemSize={100}
        data={data}
        contentContainerStyle={styles.contentContainerList}
      />
    </View>
  );
};

export default List;
