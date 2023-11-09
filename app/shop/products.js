import { Ionicons } from "@expo/vector-icons";
import { Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ProductItem } from "../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainerList: {
    paddingTop: 40,
  },
});

const data = new Array(15).fill(0).map((_, index) => ({ id: index }));

export default function Products() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const renderItem = ({ item }) => {
    return <ProductItem />;
  };

  console.warn({ params });
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
