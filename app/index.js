import { View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alisgnItems: 'center',
  },
})

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}