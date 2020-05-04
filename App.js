import React from 'react';
import Storage from 'react-native-storage';
import { StyleSheet, Text, View, AsyncStorage, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import { _retrieveData } from "./utils/utils";

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

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allArretes: undefined
    }
  }

  render() {
    return(
      <View style={styles.view}>
        <FlatList
          data={this.state.allArretes}
          renderItem={({item}) => <Item title={item.name} date={item.date} arrete={item.arrete} style={styles.item}/>}
          keyExtractor={({id}, index) => id}
        />
        <TouchableOpacity
          title="Press me"
          color="#66CDAA"
          onPress={this.alertMe}
          activeOpacity={0.9}
          style={styles.button}><Text style={styles.textButton}>TEST BOUTON</Text></TouchableOpacity>
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

    fetch("http://www.getup.agency/dev/react/api.php")
      .then((response) => response.json())
      .then(data => {
        this.setState({
          allArretes: data
        }, function(){
    
        });
      })
      .catch(function (error) {
        alert('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      });      
      
  }

}

function Item({ title, date, prefecture, arrete }) {
  return (
    <TouchableWithoutFeedback onPress={() => alert(title)}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.smallText}>{date}</Text>
        <Text style={styles.arrete}>{arrete}{arrete}{arrete}</Text>
        <Text style={styles.prefecture}>{prefecture}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});