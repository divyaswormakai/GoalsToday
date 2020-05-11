import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {globalStyles} from '../globals/globalStyles';
import TimePicker from 'react-native-24h-timepicker';

export default function Settings() {
	const [time, setTime] = useState('');
	let timePicker = null;
	const onCancel = () => {
		timePicker.close();
	};

	const onConfirm = (hour, minute) => {
		console.log('TIMEEE');
		console.log(typeof hour, minute);
		setTime(hour + ':' + minute);
		timePicker.close();
	};

	return (
		<View style={globalStyles.container}>
			<Text>This is settings text</Text>
			<Button title="OpenClock" onPress={() => timePicker.open()} />
			<Text>{time}</Text>
			<TimePicker
				ref={ref => {
					timePicker = ref;
				}}
				onCancel={() => onCancel()}
				onConfirm={(hour, minute) => onConfirm(hour, minute)}
			/>
		</View>
	);
}
