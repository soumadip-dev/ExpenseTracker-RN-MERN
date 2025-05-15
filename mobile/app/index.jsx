import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 20, color: 'blue' }}>starting the app...</Text>
      <Link href={'/about'} style={{ fontSize: 20, color: 'red' }}>
        About
      </Link>

      <Image
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1755534520276-7a75d7b70915?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
        }}
        style={{ width: 200, height: 200 }}
      />

      <Image
        source={require('@/assets/images/react-logo.png')}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
