import { FlashList } from "@shopify/flash-list";
import React, { useRef, useState } from "react";
import { View, Text, Pressable, LayoutAnimation } from "react-native";

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
  return (
    <FlashList
      ref={list}
      keyExtractor={(item) => {
        return item.toString();
      }}
      renderItem={renderItem}
      estimatedItemSize={100}
      data={data}
    />
  );
};

export default List;
