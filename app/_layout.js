import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor: '#85A43D',
      },
      headerTintColor: '#fff',
      headerBackTitleVisible: false,
      headerRight: () => (
        <Link href={"/settings"} asChild>
          <Ionicons name="ios-settings-outline" size={22} color="white" />
        </Link>
        )
    }}>

    </Stack>
  )
}