import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import customData from './data.json';

/*import {
  createBottomTabNavigator,
} from 'react-navigation-tabs';*/

import DetailArretScreen from './DetailArret';


export default class HomeScreen extends React.Component {


  constructor(props){
    super(props);
    this.state = { 
      isLoading: true
    }
  }

  componentDidMount(){

    /*return fetch('./data.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
      })
      .catch((error) =>{
        console.error(error);
      });*/

      this.setState({
        isLoading: false,
        dataSource: customData,
      }, function(){
  
      });
      
  }
 
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 30}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.view}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Item title={item.nom} date={item.date} prefecture={item.prefecture} arrete={item.arrete} style={styles.item}/>}
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
  }

  // On a pas besoin d'initialiser la variable ???
  alertMe = function() {
    alert("coucou");
  }

}


// Pour le bouton sur iOS il faut utiliser TouchableOpacity

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
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textTransform: "uppercase"
  },
  red: {
    color: 'red',
  },
  item: {
    flex: 1,
    padding: 20
  },
  view: {
    flex: 1, 
    paddingTop:28,
    backgroundColor: "#F3F3F3"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20, 
    color: "#000"
  },
  prefecture: {
    padding: 4,
    fontWeight: "bold",
    backgroundColor: "#1FCDA3",
    alignSelf: "flex-start",
    marginTop: 10
  },
  button: {
    backgroundColor: "#1FCDA3",
    padding: 20
  },
  textButton: {
    color: "#ffffff",
    textAlign: "center"
  },
  arrete: {
    paddingTop: 5
  },
  smallText: {
    
  }
});