import { Link, Stack } from "expo-router";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
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

  const onSelect = (text) => {
    console.log(text);
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

      <Link href="/shop/categories">Go to categories</Link>
    </Animated.View>
  );
}
