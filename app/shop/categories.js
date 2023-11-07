import { Entypo } from '@expo/vector-icons'
import { Tabs } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: 'center'
  }
});


export default function Categories() {
  return (
    <View style={styles.container}>
      <Tabs.Screen options={{
        tabBarIcon: () => (<Entypo name="add-to-list" size={22} color='#85A43D' />),
      }} />
      <Text>Categories</Text>
    </View>
  )
}