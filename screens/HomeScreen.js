import React, { Component } from 'react';
import { Button, View, Text, FlatList,Modal,TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { _retrieveData } from "../utils/utils";


import mySharedService from "../shared/MySharedServices";
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allArretes: undefined,
      modalVisible: false,
      arreteTitle: '',
      arreteDate: '',
      arretePrefecture: '',
    } 

  }

  setModalVisible = (visible, data) => {
    this.setState({ modalVisible: visible });
    this.setState({ arreteTitle: data[0] });
    this.setState({ arreteDate: data[1] });
    this.setState({ arretePrefecture: data[2] });
  }

  hideModal = () => {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <View style={styles.view}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <ScrollView>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{this.state.arreteTitle}</Text>
                <Text style={styles.modalText}>{this.state.arreteDate}</Text>
                <Text style={styles.modalText}>{this.state.arretePrefecture}</Text>

                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    this.hideModal(false);
                  }}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </ScrollView>
        </Modal>

        <FlatList
          data={this.state.allArretes}

          renderItem={({ item }) => <Item openModal={this.setModalVisible} 
                                      data = {[
                                        item.name, 
                                        this.renderDate(item.date), 
                                        item.prefecture.name, 
                                        item.pinned
                                      ]} 
                                      style={styles.item} />
          }

          keyExtractor={({ id }, index) => id.toString()}
        />
      </View>
    )
  } 

  renderDate(str) {
    return str.split("T")[0];  
  }
 
  async componentDidMount() { 
 
    this.props.navigation.addListener('focus', () => {
      
      mySharedService.getAllArretesList().then((response) => response.json())
      .then(data => {
        // Remove le premier item
        data.shift();
        this.setState({
          allArretes: data,
        })
      });
		});

    var result = await _retrieveData("onBoardingPassed");
		if (!result) {
      //this.props.navigation.navigate("Splash");
    }
    console.log('coucou');
    mySharedService.getAllArretesList().then((response) => response.json())
    .then(data => {
      this.setState({
        allArretes: data,
      })
    });
 
  }

}


function Item ({ openModal, data }) {
  return (
    <TouchableWithoutFeedback onPress={() => openModal(true, data)}>
      <View style={styles.item}> 

        <View style={styles.layoutHorizontal}>
          <Text style={styles.title}>{data[0]}</Text>
          <TouchableOpacity>
           <MaterialCommunityIcons styles={styles.buttonPinned} name="pin-outline" size={25} />
          </TouchableOpacity>

        </View>

        <View style={styles.layoutHorizontal}>
          <Text>Ceci est la description de mon arrêté, qui n'est pas encore dans le json</Text>
        </View>
 
        <View style={styles.layoutHorizontal}>
          <Text style={styles.prefectures}>{data[3]}</Text>
          <Text style={styles.date}>{data[2]}</Text>
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