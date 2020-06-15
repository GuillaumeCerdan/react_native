import React, { Component } from 'react';
import { Button, View, Text, FlatList,Modal,TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { _retrieveData } from "../utils/utils";


import mySharedService from "../shared/MySharedServices";

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allArretes: undefined,
      modalVisible: false
    }

  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  render() {
    const { modalVisible } = this.state;

    return (
      <View style={styles.view}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

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

    var result = await _retrieveData("onBoardingPassed");
		if (!result) {
      //this.props.navigation.navigate("Splash");
    }
 
    mySharedService.getAllArretesList().then((response) => response.json())
    .then(data => {
      this.setState({
        allArretes: data,
      })
    });
 
  }
}
function OpenSplash({ screenName }) {
  const navigation = useNavigation();
  navigation.navigate(screenName)
 
}
function Item({ title, date, prefecture, pinned, modalVisible }) {
  return (
    <TouchableWithoutFeedback onPress={() => this.setModalVisible(!modalVisible)}>
      <View style={styles.item}>

        <View style={styles.layoutHorizontal}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={() => this.OpenSplash('Splash')}>
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
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});