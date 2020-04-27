import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


export default class SplashScreen extends Component {
  /*goToHome(){
    const {navigate} = this.props.navigation;
    navigate('Home')
  }*/
  render() {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Onboarding
         // onDone={this.goToHome}
          onSkip={() => this.props.navigation.navigate('Home')}
          pages={[
            {
              backgroundColor: 'blue',
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
              backgroundColor: 'orange',
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
              backgroundColor: 'red',
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
          ]}
        />

      </View>
    )
  }
}