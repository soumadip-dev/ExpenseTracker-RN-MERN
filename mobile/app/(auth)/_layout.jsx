import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Stack } from 'expo-router';
const AuthRoutesLayout = () => {
  const { isSignedIn } = useAuth();
  if (isSignedIn) {
    return <Redirect href={'/'} />;
  }
  return <Stack />;
};
export default AuthRoutesLayout;
