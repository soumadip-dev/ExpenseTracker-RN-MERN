import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Alert, FlatList, Image, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { SignOutButton } from '@/components/SignOutButton';
import { useTransactions } from '../../hooks/useTransactions.js';
import { useEffect } from 'react';
import PageLoader from '../../components/PageLoader.jsx';
import { styles } from '../../assets/styles/home.styles.js';
import { Ionicons } from '@expo/vector-icons';

export default function Page() {
  const { user } = useUser();
  const { transaction, summary, isLoading, loadData, deleteTransaction } = useTransactions(
    user?.id
  );

  useEffect(() => {
    loadData();
  }, [user?.id, loadData]);

  if (isLoading) return <PageLoader />;

  console.log('transaction', transaction);
  console.log('summary', summary);
  console.log('User ID', user?.id);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          {/* LEFT */}
          <View style={styles.headerLeft}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.headerLogo}
              resizeMode="contain"
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.usernameText}>
                {user?.emailAddresses[0]?.emailAddress.split('@')[0]}
              </Text>
            </View>
          </View>
          {/* RIGHT */}
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.addButton} onPress={() => router.push('/create')}>
              <Ionicons name="add" size={20} color="#FFF" />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
