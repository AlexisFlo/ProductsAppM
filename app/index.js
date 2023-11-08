import { Link, Stack } from "expo-router";
import { View, StyleSheet, ScrollView } from "react-native";

import { Card } from "./components";
import { PRODUCTS } from "./constants/data";
import { CARD_HEADERS } from "./constants/data/card-header";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

const { headerIcon, headerIconColor, headerTitle } = CARD_HEADERS.Home.Slider;

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.slider}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {PRODUCTS.map((product) => (
              <Card
                {...product}
                key={product.id}
                headerTitle={headerTitle}
                headerIcon={headerIcon}
                headerIconColor={headerIconColor}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <Link href="/shop/categories">Go to categories</Link>
    </View>
  );
}
