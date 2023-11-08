import { Link, Stack } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Card } from "./components";
import { PRODUCTS } from "./constants/data";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      <ScrollView>
        <View>
          <ScrollView horizontal>
            {PRODUCTS.map((product) => (
              <Card {...product} key={product.id} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <Link href="/shop/categories">Go to categories</Link>
    </View>
  );
}
