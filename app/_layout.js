import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack screenOptions={{
      headerTitle: 'Home',
      headerStyle:{
        backgroundColor: '#f4511e',
        alignItems: 'center',
        justifyContent: 'center',
      }
    }}>

    </Stack>
  )
}