import { Link, Stack } from "expo-router";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";

import { Card } from "./components";
import { CARD_HEIGHT } from "./components/card";
import { PRODUCTS } from "./constants/data";
import { CARD_HEADERS } from "./constants/data/card-header";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

const { headerIcon, headerIconColor, headerTitle } = CARD_HEADERS.Home.Slider;

const snapToOffsets = [0, CARD_HEIGHT];

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        snapToOffsets={snapToOffsets}
        decelerationRate="fast">
        <View style={styles.slider}>
          <ScrollView
            decelerationRate="fast"
            snapToInterval={width}
            horizontal
            showsHorizontalScrollIndicator={false}>
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
        {PRODUCTS.map((product) => (
          <Card {...product} key={product.id} />
        ))}
      </ScrollView>

      <Link href="/shop/categories">Go to categories</Link>
    </View>
  );
}
