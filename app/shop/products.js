import { Ionicons } from "@expo/vector-icons";
import { Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Products() {
  const router = useRouter();
  const params = useLocalSearchParams();

  console.warn({ params });
  return (
    <View style={styles.container}>
      <Text>Products</Text>
    </View>
  );
}
