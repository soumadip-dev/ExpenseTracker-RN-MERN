import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

const API_URL = 'http://localhost:8080/api/v1';

export const useTransactions = userId => {
  const [transaction, setTransaction] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  //* Fetch all transactions for a given user
  // useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
  // fetchTrnsactions will only be recreated when userId changes.
  const fetchTrnsactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/${userId}`);
      const data = await response.json();
      setTransaction(data.data);
    } catch (error) {
      console.error('Error fetching transactions', error);
    }
  }, [userId]);

  //* Fetch account summary for a given user
  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/summary/${userId}`);
      const data = await response.json();
      setSummary({
        balance: data.data.totalBalance,
        income: data.data.totalIncome,
        expenses: data.data.totalExpenses,
      });
    } catch (error) {
      console.error('Error fetching summary', error);
    }
  }, [userId]);

  //* Load both transactions and summary data
  const loadData = useCallback(async () => {
    if (!userId) return;
    setIsLoading(true);
    try {
      await Promise.all([fetchTrnsactions(), fetchSummary()]);
    } catch (error) {
      console.error('Error loading data', error);
    }
    setIsLoading(false);
  }, [userId, fetchTrnsactions, fetchSummary]);
};
