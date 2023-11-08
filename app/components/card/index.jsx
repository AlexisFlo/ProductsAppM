import { View, Text } from "react-native";

import { styles } from "./styles";
import CardHeader from "../card-header";

const Card = ({
  title,
  subtitle,
  primaryColor,
  secondaryColor,
  headerTitle,
  headerIcon,
  headerIconColor,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: primaryColor }]}>
        <CardHeader
          headerTitle={headerTitle}
          headerIcon={headerIcon}
          headerIconColor={headerIconColor}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Card;