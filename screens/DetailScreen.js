import * as React from 'react';

import { Button, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class DetailScreen extends React.Component {
    render() {
        return(
            <View style={styles.mainContainer}>
                
                <View style={styles.view}>
                    <View style={styles.layoutHorizontal}>
                        <Text>NOM DE L'ARRETE</Text>
                        <TouchableOpacity onPress={() => alert('coucou')} style={styles.buttonPinned}>
                            <MaterialCommunityIcons name="pin-outline" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonToggled}> 
                            <Text style={styles.buttonTextToggled}>VOIR LE PDF</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.view}>
                    <View style={styles.layoutHorizontal}>
                        <TouchableOpacity style={styles.buttonToggled}>
                            <Text style={styles.buttonTextToggled}>PARTAGER</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonToggled}>
                            <Text style={styles.buttonTextToggled}>SIGNALER</Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.textCenter}>
                                DATE
                            </Text>
                            <Text style={styles.textCenter}>
                                Préfecture
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.view}>
                    <Text>
                        Ceci est la description la plus loooooongue au monde, Ceci est la description la plus loooooongue au monde, Ceci est la description la plus loooooongue au monde, Ceci est la description la plus loooooongue au monde, Ceci est la description la plus loooooongue au monde
                    </Text>
                    <TouchableOpacity>
                        <Text>
                            VOIR PLUS
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainContainer: {
		padding: 10,
		marginHorizontal: 20,
		marginVertical: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
	},
    view: {
      flex: 1, 
      paddingTop:0,
      backgroundColor: "#F3F3F3",
      alignSelf: 'stretch',
      justifyContent: 'center'
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
      alignContent: 'center',
      justifyContent: 'space-between'
    },
    buttonPinned: {
        backgroundColor: "#fff",
        padding: 5,
        height: 35,
        width: 35
    },
    buttonToggled: {
		backgroundColor: "#788896",
		marginRight: 15,
		paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonTextToggled: {
		color: "#ffffff"
	},
});