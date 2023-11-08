import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const CARD_HEIGHT = width;
export const TOP = 10;
export const SIZE = 160;

export const styles = StyleSheet.create({
  container: {
    width,
    height: CARD_HEIGHT,
  },
  card: {
    flex: 1,
    margin: 30,
    padding: 15,
    justifyContent: "space-between",
    borderRadius: 15,
  },
  cardContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
  },
  image: {
    width: SIZE,
    height: SIZE,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    top: TOP,
  },
});
