import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},

	goalCard: {
		borderWidth: 1,
		borderRadius: 5,
		flex: 1,
		borderStyle: 'solid',
		padding: 10,
	},

	modalContent: {
		flex: 1,
		padding: 20,
	},

	formInput: {
		borderWidth: 2,
		borderColor: '#ddd',
		padding: 10,
		fontSize: 18,
		borderRadius: 6,
	},

	errorTxt: {
		color: 'red',
	},

	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
