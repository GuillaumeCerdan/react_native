import React, { Component } from 'react';
import Storage from 'react-native-storage';
import { Button, View, Text, AsyncStorage } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

 


export default class SplashScreen extends Component {

  goToHome = async () => {

    const {navigate} = this.props.navigation;

    try {
      global.storage.save({
        key: 'isOnBoardingPassed',
        data: true,
        expires: 1000 * 3600
    });
      //navigate('Home');
    } catch (error) {
      alert(error);
      //navigate('Home'); 
    }


    global.storage.load({
      key: "isOnBoardingPassed" 
    }).then(ret => {
      if (ret == true) {
        alert("yaaa")
      } else {
        alert("aaay");
      }
    });

    

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