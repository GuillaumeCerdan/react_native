import React from 'react';
import Storage from 'react-native-storage';
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
  initialRouteName: "Home" 
});

const AppContainer = createAppContainer(AppNavigator);

storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync : {

  }
});

global.storage = storage;

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      isOnBoardingPassed: false
    }
  }

  render() {
    return <AppContainer />;
  }

  async componentDidMount() {

    await this.retrieveData("isOnBoardingPassed").then(()=> {

      alert('this.state.isOnBoardingPassed : ' + this.state.isOnBoardingPassed);
      
      if (this.state.isOnBoardingPassed == true) {
        alert("yaaa");
      } else {
        alert('aaay');
      }
      
    });

    //AppNavigator.initialRouteName = "Home";

  }

  retrieveData = async (key) => {

    global.storage.load({
      key: key 
    }).then(ret => {
      this.setState({
        isOnBoardingPassed: JSON.stringify(ret)
      }, function(){
  
      });
    }).catch(err => {
      console.warn(err.message);
    })
    
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

