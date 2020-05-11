import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {globalStyles} from '../globals/globalStyles';

export default function Single({navigation}) {
	return (
		<View style={globalStyles.container}>
			<Text>Title:</Text>
			<Text>{navigation.getParam('title')}</Text>
			<Text>Description:</Text>
			<Text>{navigation.getParam('description')}</Text>
			<Button onPress={() => navigation.goBack()} title="Go Back" />
		</View>
	);
}
