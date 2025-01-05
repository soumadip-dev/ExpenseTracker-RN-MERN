import { Stack } from 'expo-router';
import SafeScreen from '../components/SafeScreen';
import { ClerkProvider } from '@clerk/clerk-expo';

export default function RootLayout() {
  return (
    <ClerkProvider>
      <SafeScreen>
        <Stack />
      </SafeScreen>
    </ClerkProvider>
  );
}
