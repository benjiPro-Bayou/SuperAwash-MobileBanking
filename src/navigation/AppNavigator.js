import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, MessageSquare, CreditCard, Layers, Settings as SettingsIcon } from 'lucide-react-native';

import { COLORS } from '../constants/theme';
import HomeScreen from '../screens/HomeScreen';
import ChatListScreen from '../screens/ChatListScreen';
import ChatDetailScreen from '../screens/ChatDetailScreen';
import CardsScreen from '../screens/CardsScreen';
import MiniAppsScreen from '../screens/MiniAppsScreen';
import TransferScreen from '../screens/TransferScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EcommerceScreen from '../screens/miniapps/EcommerceScreen';
import RideScreen from '../screens/miniapps/RideScreen';
import TravelScreen from '../screens/miniapps/TravelScreen';
import CinemaScreen from '../screens/miniapps/CinemaScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: COLORS.secondary,
      tabBarInactiveTintColor: COLORS.textSecondary,
      tabBarStyle: {
        backgroundColor: COLORS.surface,
        borderTopWidth: 0,
        elevation: 10,
        height: 65,
        paddingBottom: 10,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: '500',
        marginTop: -5,
      }
    }}
  >
    <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        tabBarIcon: ({ color }) => <Home color={color} size={24} />
      }}
    />
    <Tab.Screen 
      name="Services" 
      component={MiniAppsScreen} 
      options={{
        tabBarIcon: ({ color }) => <Layers color={color} size={24} />
      }}
    />
    <Tab.Screen 
      name="Chat" 
      component={ChatListScreen} 
      options={{
        tabBarIcon: ({ color }) => <MessageSquare color={color} size={24} />
      }}
    />
    <Tab.Screen 
      name="Cards" 
      component={CardsScreen} 
      options={{
        tabBarIcon: ({ color }) => <CreditCard color={color} size={24} />
      }}
    />
    <Tab.Screen 
      name="Settings" 
      component={SettingsScreen} 
      options={{
        tabBarIcon: ({ color }) => <SettingsIcon color={color} size={24} />
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
        <Stack.Screen name="Transfer" component={TransferScreen} />
        {/* Mini Apps Routes */}
        <Stack.Screen name="Ecommerce" component={EcommerceScreen} />
        <Stack.Screen name="Ride" component={RideScreen} />
        <Stack.Screen name="Travel" component={TravelScreen} />
        <Stack.Screen name="Cinema" component={CinemaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
