import { Ionicons } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { View, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated";

import { Card } from "./components";
import { CARD_HEIGHT } from "./components/card";
import { PRODUCTS } from "./constants/data";
import { CARD_HEADERS } from "./constants/data/card-header";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    padding: 20,
    backgroundColor: "#3B5249",
    borderRadius: 15,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 13,
    fpntWeight: "bold",
    color: "#fff",
  },
  icon: {
    marginRight: 10,
  },
});

const { headerIcon, headerIconColor, headerTitle } = CARD_HEADERS.Home.Slider;

const snapToOffsets = [0, CARD_HEIGHT];

export default function Home() {
  const translateX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      translateX.value = x;
    },
  });

  const style = useAnimatedStyle(() => ({
    ...styles.container,
    backgroundColor: interpolateColor(
      translateX.value,
      PRODUCTS.map((_, i) => i * width),
      PRODUCTS.map((product) => product.primaryColor)
    ),
  }));

  const onSelect = ({ title, subtitle, price, image, id }) => {
    const product = { title, subtitle, price, image, id };
    router.push({
      pathname: "/shop/products",
      params: product,
    });
  };
  const onPressAddProduct = () => {
    router.push({
      pathname: "/shop/categories",
    });
  };

  return (
    <Animated.View style={style}>
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
          <Animated.ScrollView
            onScroll={onScroll}
            decelerationRate="fast"
            snapToInterval={width}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrolEventThrottle={16}>
            {PRODUCTS?.map((product, index) => (
              <Card
                {...product}
                key={product.id}
                headerTitle={headerTitle}
                headerIcon={headerIcon}
                headerIconColor={headerIconColor}
                x={translateX}
                index={index}
                onSelect={onSelect}
              />
            ))}
          </Animated.ScrollView>
        </View>
        {/*{PRODUCTS.map((product) => (
          <Card {...product} key={product.id} />
        ))}*/}
      </ScrollView>
      <TouchableOpacity onPress={onPressAddProduct} style={styles.button}>
        <Ionicons name="basket" size={22} color="#85A43D" style={styles.icon} />
        <Text style={styles.buttonText}>Hacer tú lista de compra</Text>
      </TouchableOpacity>

      {/*<Pressable onPress={addProduct} style={styles.button}>
        <Text style={styles.buttonText}>Agregar productos</Text>
      </Pressable>*/}
    </Animated.View>
  );
}
