import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="products" 
        options={{
          tabBarIcon: () => (
            <Ionicons name="basket" size={22} color='#85A43D' />),
        }}
      />
      <Tabs.Screen 
        name="categories"
        options={{
          tabBarIcon: () => (
            <Entypo name="add-to-list" size={22} color='#85A43D' />
          ),
        }} 
      />
    </Tabs>
  );
}
