import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../globals/globalStyles';

export default function GoalCard({goalContent}) {
	return (
		<View style={globalStyles.goalCard}>
			<Text>Title: {goalContent.title}</Text>
			<Text>Description: {goalContent.description}</Text>
		</View>
	);
}
