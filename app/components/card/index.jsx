import { View, Text, Image, Dimensions } from "react-native";

import { styles } from "./styles";
import CardHeader from "../card-header";

const { width } = Dimensions.get("window");

export const CARD_HEIGHT = width;

const Card = ({
  title,
  subtitle,
  image,
  primaryColor,
  secondaryColor,
  headerTitle,
  headerIcon,
  headerIconColor,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: primaryColor }]}>
        <View style={styles.cardContent}>
          <CardHeader
            headerTitle={headerTitle}
            headerIcon={headerIcon}
            headerIconColor={headerIconColor}
          />
          <Image style={styles.image} source={{ uri: image }} resizeMode="contain" />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
