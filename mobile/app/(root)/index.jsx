import { useUser } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { Alert, FlatList, Image, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { SignOutButton } from '@/components/SignOutButton';
import { useTransactions } from '../../hooks/useTransactions.js';
import { useEffect, useState } from 'react';
import PageLoader from '../../components/PageLoader.jsx';
import { styles } from '../../assets/styles/home.styles.js';
import { Ionicons } from '@expo/vector-icons';
import BalanceCard from '../../components/BalanceCard.jsx';
import { TransactionItem } from '../../components/TransactionItem.jsx';
import NoTransactionsFound from '../../components/NoTransactionsFound.jsx';

export default function Page() {
  // Get the user from Clerk
  const { user } = useUser();

  // Get the router from Expo
  const router = useRouter();

  // Set the refreshing state
  const [refreshing, setRefreshing] = useState(false);

  // Custom hook to fetch transactions and account summary
  const { transactions, summary, isLoading, loadData, deleteTransaction } = useTransactions(
    user?.id
  );

  // Function to handle refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  // Run the loadData function when the user id changes
  useEffect(() => {
    loadData();
  }, [user?.id, loadData]);

  // Function to handle delete
  const handleDelete = id => {
    Alert.alert('Delete Transaction', 'Are you sure you want to delete this transaction?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => deleteTransaction(id) },
    ]);
  };

  // If loading and not refreshing, show the loader
  if (isLoading && !refreshing) return <PageLoader />;

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
            <SignOutButton />
          </View>
        </View>
        <BalanceCard summary={summary} />

        <View style={styles.transactionsHeaderContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
        </View>
      </View>
      {/* FlatList is a performant way to render long lists in React Native. */}
      {/* it renders items lazily — only those on the screen. */}
      <FlatList
        style={styles.transactionsList}
        contentContainerStyle={styles.transactionsListContent}
        data={transactions}
        renderItem={({ item }) => <TransactionItem item={item} onDelete={handleDelete} />}
        ListEmptyComponent={<NoTransactionsFound />}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
}
