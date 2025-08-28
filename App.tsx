import React, { useState } from 'react';
import {NavigationContainer, NavigationState} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import DashboardScreen from './src/screens/DashboardScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PortfolioScreen from './src/screens/PortfolioScreen';
import LoadingScreen from './src/components/LoadingScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('Dashboard');
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const onStateChange = (state: NavigationState | undefined) => {
    if (state) {
      const routeName = state.routes[state.index].name;
  
      if (isFirstLoad) {
        setCurrentRoute(routeName);
        setIsFirstLoad(false);
        return;
      }

      if (routeName !== currentRoute) {
        setIsLoading(true);
        setCurrentRoute(routeName);
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }
    }
  };

  return (
    <>
      <NavigationContainer onStateChange={onStateChange}>
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
              let iconName = 'circle';
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

      {isLoading && <LoadingScreen />}
    </>
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