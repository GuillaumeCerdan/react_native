import React, { Component } from 'react';
import { Button, View, Text, AsyncStorage } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


export default class SplashScreen extends Component {

  goToHome = async () => {

    const {navigate} = this.props.navigation;

    try {
      await AsyncStorage.setItem("isOnBoardingPassed", "true");
      navigate('Home');
    } catch (error) {  
      console.log(error);
      await AsyncStorage.setItem("isOnBoardingPassed", "false");
      navigate('Home');
    }

  }


  render() {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Onboarding
          onDone={this.goToHome}
          onSkip={this.goToHome}
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