import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default class SettingsScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View >

          <Text style={styles.title}>REGLAGE</Text>
        </View>

        <View >
          <Text style={styles.sub_title}>ajouter un mot clef</Text>

          <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)} />
            <TouchableOpacity style={styles.button_toggled} onPress={() => alert('coucou')}>
							<Text style={styles.button_text_toggled}>ajouter</Text>
						</TouchableOpacity>
        </View>
        <View>
        <Text style={styles.sub_title}>scraper</Text>

          <TouchableOpacity style={styles.button_toggled} onPress={() => alert('coucou')}>
							<Text style={styles.button_text_toggled}>Relancer le scrapper</Text>
						</TouchableOpacity>
        </View>
        <View>
          
							<Text style={styles.sub_title}>LOGS</Text>
              <Text style={styles.log_viewer}>debug ....</Text>
						
        </View>
      </View>
    )
  }

  componentDidMount() {

  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "#000"
  },
  sub_title: {
    fontSize: 18,
    color: "#000000"
  },
  view: {
    height: 60,
    backgroundColor: "#F3F3F3",
  },
  main_container: {
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1
  },
  button_toggled: {
    backgroundColor: "#788896",
    marginRight: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical:10,
    borderRadius:7
  },
  button_text_toggled: {
    color: "#ffffff"
  },
  button_untoggled: {
    backgroundColor: "#ffffff",
    marginRight: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius:7
  },
  button_text_toggled: {
    color: "#fff"
  },
  centered_flex: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "space-between",
    justifyContent: 'center',
    marginTop: 15
  },
  parent_buttons: {
    flex: 3
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
  },
  log_viewer:{
    fontSize:12,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:5,
    padding: 3
  }
});
