import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ActionBar from 'react-native-action-bar';


import { _retrieveData } from "./utils/utils";
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import FiltersScreen from './components/FiltersScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export default class App extends React.Component {

	render() {
		return (
			<SafeAreaView style={styles.mainView}>

				<ActionBar 
					style={styles.actionBar}
					title={'Application CDA'} />

				<NavigationContainer>
					
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

					</Tab.Navigator>

					

				</NavigationContainer>
			</SafeAreaView>
		);
	}

	async componentDidMount() {
		var result = await _retrieveData("onBoardingPassed");
		if (!result) {
			// const {navigate} = this.props.navigation;
			// navigate("Splash");
		}

	}



}

const styles = StyleSheet.create({
	mainView: {
		flex: 1, 
		marginTop: 28
	},
	actionBar: { 
		flex: 1, 
		height: 28 
	}
});