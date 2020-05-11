import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {globalStyles} from '../globals/globalStyles';

export default function Settings() {
	return (
		<View style={globalStyles.container}>
			<Text>This is settings text</Text>
		</View>
	);
}
