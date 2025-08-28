import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

const TransactionList = ({transactions}) => {
  const getTransactionIcon = (iconName) => {
    const iconMap = {
      laptop: 'monitor', 
      coffee: 'coffee',
      'dollar-sign': 'dollar-sign',
      payment: 'credit-card',
      shopping: 'shopping-cart',
      gas: 'truck',
      food: 'coffee',
      entertainment: 'play'
    };
    return iconMap[iconName] || 'circle';
  };

  const getIconColors = (type) => {
    return type === 'income' 
      ? { bg: 'rgba(45, 81, 39, 0.6)', icon: '#ffffff' } 
      : { bg: '#F59E0B', icon: '#ffffff' };
  };

  const TransactionItem = ({transaction}) => {
    const colors = getIconColors(transaction.type);
    
    return (
      <TouchableOpacity style={styles.transactionItem} activeOpacity={0.8}>
        <View style={styles.itemContainer}>
          <View style={[
            styles.iconContainer,
            { backgroundColor: colors.bg }
          ]}>
            <Icon
              name={getTransactionIcon(transaction.icon)}
              size={20}
              color={colors.icon}
            />
          </View>
          
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>{transaction.title}</Text>
            <Text style={styles.transactionDate}>{transaction.date}</Text>
          </View>
          
          <Text style={[
            styles.transactionAmount,
            {
              color: transaction.type === 'income' ? 'rgba(238, 246, 237, 1)' : '#F59E0B',
            },
          ]}>
            {transaction.type === 'income' ? '+' : '-'}$
            {Math.abs(transaction.amount).toLocaleString('es-ES', {
              minimumFractionDigits: 2
            })}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Transacciones recientes</Text>
        <TouchableOpacity
          style={styles.seeAllButton}
          activeOpacity={0.8}>
          <Text style={styles.seeAll}>Ver todo</Text>
        </TouchableOpacity>
      </View>
      
      {transactions.map(transaction => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.02,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: width * 0.045,
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  seeAllButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'rgba(56, 95, 67, 0.57)',
    borderRadius: 10,
  },
  seeAll: {
    fontSize: width * 0.035,
    color: '#e2efe5ff',
    fontWeight: '600',
  },
  transactionItem: {
    marginBottom: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: width * 0.04,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
  },
  iconContainer: {
    width: width * 0.11,
    height: width * 0.11,
    borderRadius: width * 0.055,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: width * 0.04,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: width * 0.032,
    color: '#eff1f5ff',
    fontWeight: '400',
  },
  transactionAmount: {
    fontSize: width * 0.04,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
});

export default TransactionList;