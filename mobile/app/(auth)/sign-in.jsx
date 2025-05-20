import { useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from '../../assets/styles/auth.styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  //* Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace('/');
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  //* Render the sign-in form
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      extraScrollHeight={30}
    >
      <View>
        <Text>Sign in</Text>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={emailAddress => setEmailAddress(emailAddress)}
        />
        <TextInput
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
        <TouchableOpacity onPress={onSignInPress}>
          <Text>Continue</Text>
        </TouchableOpacity>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
          <Link href="/sign-up">
            <Text>Sign up</Text>
          </Link>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
