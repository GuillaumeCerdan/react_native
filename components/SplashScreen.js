import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Splash Screen</Text>
        <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}/>
      </View>
    )
  }
}