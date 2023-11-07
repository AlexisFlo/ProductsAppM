import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack screenOptions={{
      headerTitle: 'Home',
      headerStyle:{
        backgroundColor: '#85A43D',
      },
      headerTintColor: '#fff',
      headerRight: () => (
        <Link href={"/settings"}>
          <Ionicons name="ios-settings-outline" size={22} color="white" />
        </Link>
        )
    }}>

    </Stack>
  )
}