import { View, Text } from 'react-native';

const CATEGORIES = [
  { id: 'food', name: 'Food & Drinks', icon: 'fast-food' },
  { id: 'shopping', name: 'Shopping', icon: 'cart' },
  { id: 'transportation', name: 'Transportation', icon: 'car' },
  { id: 'entertainment', name: 'Entertainment', icon: 'film' },
  { id: 'bills', name: 'Bills', icon: 'receipt' },
  { id: 'income', name: 'Income', icon: 'cash' },
  { id: 'other', name: 'Other', icon: 'ellipsis-horizontal' },
];

const CreateScreen = () => {
  return (
    <View>
      <Text>CreateScreen</Text>
    </View>
  );
};
export default CreateScreen;
