import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

const PortfolioScreen = () => {
  const assets = [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      amount: 0.0234,
      value: 1245.67,
      change: 5.2,
      icon: 'circle',
      color: '#f7931a',
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      amount: 2.45,
      value: 4823.12,
      change: -2.8,
      icon: 'hexagon',
      color: '#002fe9ff',
    },
    {
      id: 3,
      name: 'Apple Stock',
      symbol: 'AAPL',
      amount: 15,
      value: 2678.50,
      change: 1.4,
      icon: 'smartphone',
      color: '#000000',
    },
    {
      id: 4,
      name: 'Tesla Stock',
      symbol: 'TSLA',
      amount: 8,
      value: 1832.40,
      change: 3.7,
      icon: 'zap',
      color: '#a20606d8',
    },
  ];

  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
  const totalChange = 2.3;

  const AssetItem = ({asset}) => (
    <TouchableOpacity style={styles.assetItem} activeOpacity={0.7}>
      <LinearGradient
        colors={['rgba(35, 106, 50, 0.3)', 'rgba(21, 44, 28, 0.63)']}
        style={styles.assetGradient}>

        <View style={styles.leftContainer}>
          <View style={[styles.assetIcon, {backgroundColor: asset.color + '20'}]}>
            <Icon name={asset.icon} size={18} color={asset.color} />
          </View>
          
          <View style={styles.assetDetails}>
            <Text style={styles.assetName}>{asset.name}</Text>
            <Text style={styles.assetSymbol}>{asset.amount} {asset.symbol}</Text>
          </View>
        </View>
        
        <View style={styles.assetValueContainer}>
          <Text style={styles.assetPrice}>
            ${asset.value.toLocaleString('es-ES', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </Text>
          <Text
            style={[
              styles.assetChange,
              {color: asset.change >= 0 ? '#e5e9e7ff' : '#F59E0B'},
            ]}>
            {asset.change >= 0 ? '+' : ''}{asset.change.toFixed(1)}%
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#0F172A', '#4d8961ff', '#506f5aff']}
      style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Portafolio</Text>
            <TouchableOpacity style={styles.addButton}>
              <LinearGradient
                colors={['#F59E0B', '#1a6c14ff']}
                style={styles.addGradient}>
                <Icon name="plus" size={20} color="white" />
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.totalValueCard}>
            <LinearGradient
              colors={['rgba(35, 117, 58, 0.98)', 'rgba(3, 17, 2, 0.96)']}
              style={styles.valueCard}>
              <View style={styles.valueGlass}>
                <Text style={styles.totalLabel}>Valor total del portafolio</Text>
                <Text style={styles.totalValue}>
                  ${totalValue.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </Text>
                <View style={styles.totalChangeContainer}>
                  <Icon 
                    name={totalChange >= 0 ? "trending-up" : "trending-down"} 
                    size={14} 
                    color={totalChange >= 0 ? "#F59E0B" : "#0a1607ff"} 
                  />
                  <Text style={[
                    styles.totalChangeText, 
                    {color: totalChange >= 0 ? "#F59E0B" : "#0a1607ff"}
                  ]}>
                    {totalChange >= 0 ? '+' : ''}{totalChange}% Hoy
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>

          <View style={styles.assetsSection}>
            <Text style={styles.sectionTitle}>Tus Activos</Text>
            {assets.map(asset => (
              <AssetItem key={asset.id} asset={asset} />
            ))}
          </View>
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
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  addButton: {
    width: 40,
    height: 40,
  },
  addGradient: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalValueCard: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  valueCard: {
    borderRadius: 20,
    padding: 1,
  },
  valueGlass: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 18,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 16,
    color: '#b8b9c0ff',
    fontWeight: '500',
    marginBottom: 8,
    textAlign: 'center',
  },
  totalValue: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: '700',
    marginBottom: 12,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  totalChangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalChangeText: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 5,
  },
  assetsSection: {
    paddingHorizontal: 20,
    
  },
  sectionTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  assetItem: {
    marginBottom: 15,
  },
  assetGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 2,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 16,
    padding: 8,
  },
  assetIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginleft: 22,
  },
  assetDetails: {
    flex: 1,
  },
  assetName: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
    marginBottom: 3,
  },
  assetSymbol: {
    fontSize: 12,
    color: '#dcdde6ff',
    fontWeight: '400',
  },
  assetValueContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    minWidth: 200, 
  },
  assetPrice: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
    marginBottom: 4, 
    marginRight: 12,
    textAlign: 'right',
  },
  assetChange: {
    fontSize: 12,
    marginRight: 12,
    fontWeight: '500',
    textAlign: 'right',
  },
});

export default PortfolioScreen;