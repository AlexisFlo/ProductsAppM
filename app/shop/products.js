import { useLocalSearchParams, useRouter } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

import { ProductItem } from "../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainerList: {
    paddingTop: 40,
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

const data = new Array(15).fill(0).map((_, index) => ({ id: index }));
export default function Products() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const viewableItems = useSharedValue([]);

  const renderItem = ({ item, index }) => (
    <ProductItem item={item} index={index} viewableItems={viewableItems} />
  );

  const ListHeaderComponent = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Feature Products</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ListHeaderComponent />
      <FlatList
        data={data}
        onViewableItemsChanged={({ viewableItems: visibleItems }) => {
          viewableItems.value = visibleItems;
        }}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainerList}
      />
    </View>
  );
}
