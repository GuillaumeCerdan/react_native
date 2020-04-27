import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from './components/HomeScreen';
import SplashScreen from './components/SplashScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Splash: {
    screen: SplashScreen
  }
}, {
  initialRouteName: "Splash"
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {

    if (retrieveData("isOnBoardingPassed") == "true") {
      AppNavigator.initialRouteName = "Home";
    }
 
    alert("retrieve data" + retrieveData("isOnBoardingPassed").value); 
 
    return <AppContainer />;

  }

  componentDidMount() {
    
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 

const retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      } else {
        return "b"; 
      }
    } catch (error) {
      return false;
      console.log(error);
    }
};



/*

const _setDataAndRedirect = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    this.props.navigation.navigate('Home');
  } catch (error) {
    console.log(error);
    this.props.navigation.navigate('Home');
  }
}

*/