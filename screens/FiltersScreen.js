import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Picker, CheckBox, SafeAreaView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FiltersScreen extends Component {

	constructor(props) {
		super(props);
	}

	goToHome = () => {
		this.props.navigation.navigate('Home');
	}

	render() {
		return (
			<SafeAreaView>
      			<ScrollView>
					<View style={styles.main_container}>

						<View style={styles.view}>
							<Text style={styles.title}>FILTRES</Text>
						</View>

						<View style={styles.view}>
							<TextInput
								style={ styles.input }
								onChangeText={text => console.log(text)}
								placeholderTextColor="#000"
								placeholder="Rechercher..." />
						</View>

						<View style={styles.view}>
							<Text style={styles.sub_title}>
								Préfectures
							</Text>
						</View>

						<View style={styles.view}>
							<View style={styles.input}>
								<Picker
									selectedValue="option0"
									style={ styles.input }
									onValueChange={(itemValue, itemIndex) => console.log(itemValue)}>

									<Picker.Item label="Choisir une préfecture" value="option0"/>
									<Picker.Item label="Ardèche" value="option1"/>
									<Picker.Item label="Var" value="option2"/>
									<Picker.Item label="Bouches-du-Rhône" value="option3"/>
									<Picker.Item label="Alpes-Maritimes" value="option4"/>

								</Picker>
							</View>
							
						</View>

						<View style={styles.view}>
							<Text style={styles.sub_title}>
								Tags
							</Text>
						</View>

						<View style={styles.parent_buttons}>
							<View style={styles.centered_flex}>
								<TouchableOpacity style={styles.button_toggled} onPress={() => alert('coucou')}>
									<Text style={styles.button_text_toggled}>Tag 1</Text>
								</TouchableOpacity>

								<TouchableOpacity style={styles.button_untoggled} onPress={() => alert('coucou')}>
									<Text style={styles.button_text_untoggled}>Tag 2</Text>
								</TouchableOpacity>

								<TouchableOpacity style={styles.button_toggled} onPress={() => alert('coucou')}>
									<Text style={styles.button_text_toggled}>Tag 3</Text>
								</TouchableOpacity>
							</View>

							<View style={styles.centered_flex}>
								<TouchableOpacity style={styles.button_untoggled} onPress={() => alert('coucou')}>
									<Text style={styles.button_text_untoggled}>Tag 4</Text>
								</TouchableOpacity>

								<TouchableOpacity style={styles.button_untoggled} onPress={() => alert('coucou')}>
									<Text style={styles.button_text_untoggled}>+</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.view}>
							<Text>Épinglés</Text>
							<CheckBox/>
						</View>

						<View style={styles.view}>
							<Text>Non lus</Text>
							<CheckBox/>
						</View>

						<View style={styles.centered_flex}>
							<TouchableOpacity style={styles.button_toggled_full} onPress={this.goToHome}>
								<Text style={styles.button_text_toggled}>Appliquer les filtres</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.centered_flex}>
							<TouchableOpacity style={styles.button_toggled_full}>
								<Text style={styles.button_text_toggled}>Réinitialiser les filtres</Text>
							</TouchableOpacity>
						</View>

					</View>
				</ScrollView>
			</SafeAreaView>
      		

		)
	}

	



}

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		fontSize: 20,
		color: "#000",
		flex: 1
	},
	sub_title: {
		fontSize: 18,
		color: "#000000",
		flex: 1
	},
	view: {
		height: 60, 
		backgroundColor: "#F3F3F3",
	},
	viewCentered: {
		height: 55, 
		backgroundColor: "#F3F3F3",
		textAlign: 'center'
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
		borderRadius: 8
	},
	button_toggled_full: {
		backgroundColor: "#788896",
		marginRight: 15,
		paddingHorizontal: 20,
		paddingVertical: 10,
		alignSelf: 'flex-start',    	
		textAlign: 'center',
		borderRadius: 8
	},
	button_text_toggled: {
		color: "#ffffff"
	},
	button_untoggled: {
		backgroundColor: "#ffffff",
		marginRight: 15,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 8
	},
	centered_flex: {
		flexDirection: "row",
		alignItems: "flex-start",
		alignContent: "space-between",
		justifyContent: 'center',
		marginTop: 10
	},
	parent_buttons: {
		flex: 1,
		height: 120
	},
	input: {
		height: 40,
		borderColor: '#D3D3D3', 
		borderWidth: 1,
		paddingHorizontal: 10,
		color: "#000000",
		borderRadius: 8
	},
	viewHorizontal: {
		height: 60, 
		backgroundColor: "#F3F3F3",
		flex: 1, 
		flexDirection: 'column'
	},
});