import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const ChartCard = ({data, title}) => {
  const maxValue = Math.max(...data.map(item => item.value));
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  const Bar = ({value, month}) => {
    const barHeight = (value / maxValue) * (height * 0.12);
    const percentage = ((value / totalValue) * 100).toFixed(1);
    
    return (
      <View style={styles.barContainer}>
        <View style={[styles.barBackground, {height: height * 0.12}]}>
          <LinearGradient
            colors={['#FFD700', '#dba035ff', '#FF8C00']}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            style={[
              styles.bar,
              {height: Math.max(barHeight, 8)},
            ]}
          />
        </View>
        <Text style={styles.monthLabel}>{month}</Text>
        <Text style={styles.percentageLabel}>{percentage}%</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.chartContainer}>
          {data.map((item, index) => (
            <Bar
              key={index}
              value={item.value}
              month={item.month}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.03,
  },
  card: {
    backgroundColor: 'rgba(39, 69, 49, 0.24)',
    borderRadius: 20,
    padding: width * 0.06,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: width * 0.045,
    color: '#FFFFFF',
    fontWeight: '700',
    marginBottom: 25,
    letterSpacing: -0.3,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: height * 0.15,
    paddingHorizontal: width * 0.02,
  },
  barContainer: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 2,
  },
  barBackground: {
    width: width * 0.08,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: width * 0.04,
    justifyContent: 'flex-end',
    marginBottom: 12,
    overflow: 'hidden',
  },
  bar: {
    width: width * 0.08,
    borderRadius: width * 0.04,
    minHeight: 8,
  },
  monthLabel: {
    fontSize: width * 0.03,
    color: '#f2f2f4ff',
    fontWeight: '500',
    marginBottom: 4,
  },
  percentageLabel: {
    fontSize: width * 0.025,
    color: '#FFD700',
    fontWeight: '600',
  },
});

export default ChartCard;