import { useClerk } from '@clerk/clerk-expo';
import { Alert, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles/home.styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export const SignOutButton = () => {
  const { signOut } = useClerk();
  const handleSignOut = async () => {
    try {
      Alert.alert('Logout', 'Are you sure you want to logout?', [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await signOut();
          },
        },
      ]);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
      <Ionicons name="log-out-outline" size={22} color={COLORS.text} />
    </TouchableOpacity>
  );
};
