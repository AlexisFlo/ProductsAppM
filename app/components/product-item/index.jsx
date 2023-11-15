import { memo } from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import { styles } from "./styles";

const ProductItem = memo(({ item, index, viewableItems }) => {
  const style = useAnimatedStyle(() => {
    const isVisible = viewableItems.value.filter((item) => item.isViewable);
    console.warn({ isVisible });
    return {
      opacity: 1,
    };
  }, []);
  return <Animated.View style={[styles.item, style]} />;
});

export default ProductItem;
