import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const CARD_WIDTH = width * 0.6;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    felx: 1,
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
});
