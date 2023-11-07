import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
    </Stack>
  )
}