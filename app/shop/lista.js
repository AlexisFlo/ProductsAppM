import { FlashList } from "@shopify/flash-list";
import React from "react";
import { Text } from "react-native";

const DATA = [
  {
    title: "Feature Products",
  },
  {
    title: "Second item",
  },
];

const List = () => {
  return (
    <FlashList
      data={DATA}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      estimatedItemSize={100}
    />
  );
};

export default List;