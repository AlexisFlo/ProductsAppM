import { Link, Stack } from 'expo-router'
import { View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        title: 'Home',
      }} />
      <Text>Home</Text>
      <Link href={"/shop/categories"}>Go to categories</Link>
    </View>
  )
}