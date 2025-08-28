import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import DashboardScreen from './src/screens/DashboardScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PortfolioScreen from './src/screens/PortfolioScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#e0b310ff',
          tabBarInactiveTintColor: '#488445ff',
          tabBarShowLabel: true,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({color, size}) => {
            let iconName: string = 'circle'; 
            if (route.name === 'Dashboard') {
              iconName = 'home';
            } else if (route.name === 'Portfolio') {
              iconName = 'pie-chart';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{tabBarLabel: 'Inicio'}}
        />
        <Tab.Screen
          name="Portfolio"
          component={PortfolioScreen}
          options={{tabBarLabel: 'Portafolio'}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{tabBarLabel: 'Perfil'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0f2a18ff',
    borderTopWidth: 1,
    borderTopColor: '#1e3b29ff',
    height: 70,
    paddingBottom: 10,
    paddingTop: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
});

export default App;