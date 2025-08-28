import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

const BalanceCard = ({balance, isVisible = true}) => {
  const [showBalance, setShowBalance] = React.useState(isVisible);
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#2c5f46ff', '#051c07ff', '#088b29ff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Text style={styles.label}>Saldo Total</Text>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => setShowBalance(!showBalance)}
              activeOpacity={0.8}>
              <Icon
                name={showBalance ? "eye" : "eye-off"}
                size={18}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.balance}>
            {showBalance
              ? `$${balance.toLocaleString('es-ES', {minimumFractionDigits: 2})}`
              : '••••••••'
            }
          </Text>
          
          <View style={styles.cardFooter}>
            <View style={styles.changeContainer}>
              
            </View>
            
            <View style={styles.accountInfo}>
              <Text style={styles.accountType}>Cuenta Principal</Text>
              <Text style={styles.accountNumber}>•••• 4847</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.03,
  },
  card: {
    borderRadius: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  cardContent: {
    padding: width * 0.06,
    borderRadius: 22,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: width * 0.038,
    color: '#ffffffd6',
    fontWeight: '600',
  },
  iconContainer: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 10,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balance: {
    fontSize: width * 0.085,
    color: '#ffffffe6',
    fontWeight: '800',
    marginBottom: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  changeContainer: {
    flex: 1,
  },
  change: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  changeText: {
    fontSize: width * 0.03,
    color: '#ffffff',
    fontWeight: '700',
    marginLeft: 4,
  },
  period: {
    fontSize: width * 0.032,
    color: '#ffffffcc',
    fontWeight: '400',
  },
  accountInfo: {
    alignItems: 'flex-end',
  },
  accountType: {
    fontSize: width * 0.032,
    color: '#d9ebdfff',
    fontWeight: '500',
    marginBottom: 2,
  },
  accountNumber: {
    fontSize: width * 0.036,
    color: '#c9d8cdff',
    fontWeight: '500',
    letterSpacing: 1,
  },
});

export default BalanceCard;