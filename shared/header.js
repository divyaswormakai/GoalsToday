import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Header({title, navigation}) {
	const openSettings = () => {
		navigation.navigate('Settings');
	};
	return (
		<View style={styles.header}>
			<View style={styles.titleView}>
				<Text style={styles.headerText}>{title}</Text>
			</View>
			<View style={styles.iconView}>
				<Button title="settings" onPress={openSettings} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#eee',
		width: '100%',
	},
	titleView: {
		backgroundColor: 'red',
	},
	iconView: {
		backgroundColor: 'blue',
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#333',
		letterSpacing: 1,
	},
});
