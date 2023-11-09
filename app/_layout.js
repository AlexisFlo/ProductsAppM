import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3B5249",
        },
        headerTintColor: "#fff",
        headerBackTitleVisible: false,
        headerRight: () => (
          <Link href="/settings" asChild>
            <Ionicons name="ios-settings-outline" size={22} color="white" />
          </Link>
        ),
      }}
    />
  );
}
