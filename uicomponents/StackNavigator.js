import * as React from 'react';
//import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FiltersScreen from '../screens/FiltersScreen';
import SplashScreen from '../screens/SplashScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DetailScreen from '../screens/DetailScreen';


const Tab = createMaterialBottomTabNavigator();

export default class StackNavigator extends React.Component {
    
    render() { 
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                    name="DetailScreen"
                    component={DetailScreen}
                    options={{ title: 'Welcome' }}
                    />
                </Stack.Navigator>
                <Tab.Navigator
                    activeColor="#ffffff"
                    inactiveColor="#000000"
                    barStyle={{ backgroundColor: '#788896' }}>

                    <Tab.Screen
                        name="Home"
                        component={HomeScreen} 
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={25} />
                            )
                        }} />
                    <Tab.Screen 
                        name="Filters" 
                        component={FiltersScreen}
                        options={{
                            tabBarLabel: 'Filters',
                            tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="filter" color={color} size={25} />
                            )
                        }} />
                    <Tab.Screen 
                        name="Settings" 
                        component={SettingsScreen} 
                        options={{
                            tabBarLabel: 'Settings',
                            tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="cogs" color={color} size={25} />
                            )
                        }}/>

                    <Tab.Screen 
                        name="Splash" 
                        component={SplashScreen} 
                        options={{
                            tabBarVisible: false
                        }}/>

                </Tab.Navigator>

                

            </NavigationContainer>
		);
    }
}