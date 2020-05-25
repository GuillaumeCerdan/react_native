import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Picker, CheckBox } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FiltersScreen extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.main_container}>

				<View style={styles.view}>
					<Text style={styles.title}>FILTRES</Text>
				</View>

				<View style={styles.view}>
					<TextInput
						style={ styles.input }
						onChangeText={text => onChangeText(text)} />
				</View>

				<View style={styles.view}>
					<Text style={styles.sub_title}>
						Préfectures
        			</Text>
				</View>

				<View style={styles.view}>
					<Picker
						selectedValue="option1"
						style={ styles.input }
						onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>

						<Picker.Item label="Ardèche" value="option1"/>
						<Picker.Item label="Var" value="option2"/>
						<Picker.Item label="Bouches-du-Rhône" value="option3"/>
						<Picker.Item label="Alpes-Maritimes" value="option4"/>

					</Picker>
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
					<CheckBox
						title='Épinglés'/>
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
		paddingVertical: 10
	},
	button_text_toggled: {
		color: "#ffffff"
	},
	button_untoggled: {
		backgroundColor: "#ffffff",
		marginRight: 15,
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	button_text_toggled: {
		color: "#000000"
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
		borderWidth: 1
	}
});