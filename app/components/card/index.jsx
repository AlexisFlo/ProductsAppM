import { View, Text } from "react-native";

import { styles } from "./styles";

const Card = ({ title, subtitle, primaryColor, secondaryColor }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: primaryColor }]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Card;
