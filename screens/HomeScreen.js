import React, { Component } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import mySharedService from "../shared/MySharedServices";

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allArretes: undefined
    }
  }

  render() {
    return (
      <View style={styles.view}>
        <FlatList
          data={this.state.allArretes}
          renderItem={({ item }) => <Item title={item.name} date={this.renderDate(item.date)} prefecture={item.prefecture.name} pinned={item.pinned} style={styles.item} />}
          keyExtractor={({ id }, index) => id.toString()}
        />
      </View>
    )
  }

  renderDate(str) {
    return str.split("T")[0];
  }
 
  async componentDidMount() {

    mySharedService.getAllArretesList().then((response) => response.json())
    .then(data => {
      this.setState({
        allArretes: data,
      })
    });
    
  }
}

function Item({ title, date, prefecture, pinned }) {
  return (
    <TouchableWithoutFeedback onPress={() => alert(title)}>
      <View style={styles.item}>

        <View style={styles.layoutHorizontal}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={() => alert('coucou')}>
           <MaterialCommunityIcons styles={styles.buttonPinned} name="pin-outline" size={25} />
          </TouchableOpacity>
          
        </View>

        <View style={styles.layoutHorizontal}>
          <Text>Ceci est la description de mon arrêté, qui n'est pas encore dans le json</Text>
        </View>
 
        <View style={styles.layoutHorizontal}>
          <Text style={styles.prefectures}>{prefecture}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 6,
    color: "#20232a",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  view: {
    flex: 1, 
    paddingTop:0,
    backgroundColor: "#F3F3F3"
  },
  buttonPinned: {
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20, 
    color: "#000",
    flex: 2
  },
  prefectures: {
    fontSize: 18,
    color: "#000",
    flex: 2
  },
  layoutHorizontal: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-start",
    alignContent: "space-between",
    justifyContent: 'center'
  },
  date: {
    fontSize: 14
  }
});