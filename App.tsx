import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, StatusBar, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type TabParamList = {
  Dashboard: undefined;
  Portfolio: undefined;
  Profile: undefined;
};

const DashboardScreen: React.FC = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Dashboard</Text>
    <Text style={styles.subtitle}>Coming soon...</Text>
  </View>
);

const PortfolioScreen: React.FC = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Portfolio</Text>
    <Text style={styles.subtitle}>Coming soon...</Text>
  </View>
);

const ProfileScreen: React.FC = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Profile</Text>
    <Text style={styles.subtitle}>Coming soon...</Text>
  </View>
);

const Tab = createBottomTabNavigator<TabParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#00d4ff',
          tabBarInactiveTintColor: '#8892b0',
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string;
            
            if (route.name === 'Dashboard') {
              iconName = focused ? 'grid' : 'grid-outline';
            } else if (route.name === 'Portfolio') {
              iconName = focused ? 'pie-chart' : 'pie-chart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else {
              iconName = 'help-outline';
            }
            
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Portfolio" component={PortfolioScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#8892b0',
  },
  tabBar: {
    backgroundColor: '#16213e',
    borderTopWidth: 0,
    height: 60,
  },
});

export default App;