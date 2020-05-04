import * as React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { _retrieveData } from "./utils/utils";
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import FiltersScreen from './components/FiltersScreen';

const Tab = createMaterialBottomTabNavigator();

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          activeColor="#ffffff"
          inactiveColor="#000000"
          barStyle={{ backgroundColor: '#788896' }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Filters" component={FiltersScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
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
