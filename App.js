import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import ActionBar from 'react-native-action-bar';

import { _retrieveData } from "./utils/utils";
import BottomNavigation from './uicomponents/BottomNavigation';
import SplashScreen from './screens/SplashScreen';

export default class App extends React.Component {

	render() {
		return ( 
			<SafeAreaView style={styles.mainView}>

				<ActionBar 
					style={styles.actionBar}
					title={'Application CDA'} />

				{/* uicomponents/BottomNavigation */}
				<BottomNavigation/>

			</SafeAreaView>
		);
	}

	async componentDidMount() {
		var result = await _retrieveData("onBoardingPassed");
		if (!result) {
			// const {navigate} = this.props.navigation;
			// navigate("Splash");
		}

		//alert(JSON.stringify(this.props)); 
		//navigation.navigate('SplashScreen');

	}

}

/*const stack = createStackNavigator({
	Splash: {screen: SplashScreen}
})*/

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