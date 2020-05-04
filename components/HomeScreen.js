import React, { Component } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import mySS from "../shared/MySharedServices";

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
          renderItem={({ item }) => <Item title={item.name} date={item.date} arrete={item.arrete} style={styles.item} />}
          keyExtractor={({ id }, index) => id.toString()}
        />
      </View>
    )
  }

  async componentDidMount() {

    // mySS ==> MySharedServices
    mySS.getArretesList().then((response) => response.json())
    .then(data => {
      this.setState({
        allArretes: data,
      })
    });
    
  }
}

function Item({ title, date, arrete }) {
  return (
    <TouchableWithoutFeedback onPress={() => alert(title)}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.smallText}>{date}</Text>
        <Text style={styles.arrete}>{arrete}{arrete}{arrete}</Text>
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