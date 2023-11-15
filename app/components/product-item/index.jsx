import { memo } from "react";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

import { styles } from "./styles";

const ProductItem = memo(({ item, index, viewableItems }) => {
  const style = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItem) => viewableItem.item.id === item.id)
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.5),
        },
      ],
    };
  }, []);
  return <Animated.View style={[styles.item, style]} />;
});

export default ProductItem;
