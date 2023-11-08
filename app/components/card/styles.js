import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const CARD_HEIGHT = width;

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
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
