import React from 'react';
import Storage from 'react-native-storage';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import { _retrieveData } from "./utils/utils";

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './components/HomeScreen';
import SplashScreen from './components/SplashScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Splash: {
    screen: SplashScreen
  }
});
 
const AppContainer = createAppContainer(AppNavigator);
const Tab = createMaterialBottomTabNavigator();

export default class App extends React.Component {

  constructor(props) {
    super(props); 
  }

  render() {
    return(
      <View>

        <View>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </View>
    );
    // return <AppContainer />;
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});