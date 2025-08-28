import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BalanceCard from '../components/BalanceCard';
import QuickActions from '../components/QuickActions';
import TransactionList from '../components/TransactionList';
import ChartCard from '../components/ChartCard';

const {width, height} = Dimensions.get('window');

const DashboardScreen = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return today.toLocaleDateString('es-ES', options);
  };

  const mockTransactions = [
    {
      id: 1,
      title: 'Compra Laptop',
      date: 'Hoy, 2:30 PM',
      amount: -1299.00,
      type: 'expense',
      icon: 'laptop',
    },
    {
      id: 2,
      title: 'Depósito Salario',
      date: 'Ayer, 9:00 AM',
      amount: 3500.00,
      type: 'income',
      icon: 'dollar-sign',
    },
    {
      id: 3,
      title: 'Cafetería',
      date: 'Ago 25, 11:45 AM',
      amount: -12.50,
      type: 'expense',
      icon: 'coffee',
    },
  ];

  const chartData = [
    {month: 'Ene', value: 2500},
    {month: 'Feb', value: 3200},
    {month: 'Mar', value: 2800},
    {month: 'Abr', value: 4100},
    {month: 'May', value: 3600},
    {month: 'Jun', value: 4800},
  ];

  return (
    <LinearGradient
      colors={['#0F172A', '#4d8961ff', '#506f5aff']} 
      style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          
          <View style={styles.header}>
            <Text style={styles.greeting}>Buenos días</Text>
            <Text style={styles.dateText}>{getCurrentDate()}</Text>
          </View>

          <BalanceCard balance={15847.32} />
          <QuickActions />
          <ChartCard data={chartData} title="Resumen mensual" />
          <TransactionList transactions={mockTransactions} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.03,
    paddingBottom: height * 0.02,
  },
  greeting: {
    fontSize: width * 0.07,
    color: '#fff',
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  dateText: {
    fontSize: width * 0.04,
    color: '#b8b9c0ff',
    fontWeight: '500',
    marginTop: 5,
    textTransform: 'capitalize',
  },
});

export default DashboardScreen;