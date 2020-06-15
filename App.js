import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import ActionBar from 'react-native-action-bar';

import BottomNavigation from './uicomponents/BottomNavigation';
import SplashScreen from './screens/SplashScreen';
import 'react-native-gesture-handler';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		/*this.setState({
			navigation: this.props.navigation
		});*/
	}

	render() {
		return ( 
			<SafeAreaView style={styles.mainView}>

			<ActionBar
				containerStyle={styles.actionBar}
				backgroundColor='#33cc33'
				title='APPLICATION CDA'
             />

				<BottomNavigation/>

			</SafeAreaView>
		);
	}

	async componentDidMount() {
		/*var result = await _retrieveData("onBoardingPassed");
		//if (!result) {
		alert(JSON.stringify(this.props.navigation));//.navigate('Filters');
			*/
		//} 

		//alert(JSON.stringify(this.props)); 
		//navigation.navigate('SplashScreen');

	}

}

/*const stack = createStackNavigator({
	Splash: {screen: SplashScreen}
})*/

const styles = StyleSheet.create({
	mainView: {
		flex: 1
	},
	actionBar: { 
		marginTop: 28,
		height: 45
	}
});