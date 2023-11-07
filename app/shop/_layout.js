import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#85A43D",
        tabBarLabelStyle:{
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: "#F4F9F1"
        }
      }}
    >
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "basket" : "basket-outline"}
              size={22}
              color="#85A43D"
            />
          ),
          tabBarLabel: "Products",
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ios-list" : "ios-list-outline"}
              size={22}
              color="#85A43D"
            />
          ),
          tabBarLabel: "Categories",
        }}
      />
    </Tabs>
  );
}
