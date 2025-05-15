import { View, Text } from 'react-native';
const about = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 20, color: 'blue' }}>About page</Text>
    </View>
  );
};
export default about;
