import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Overview from './screens/Overview';
import Single from './screens/Single';
import Settings from './screens/Settings';
import Header from './shared/header';

const App = createStackNavigator({
	HomeScreen: {
		screen: Overview,
		navigationOptions: ({navigation}) => {
			return {
				headerTitle: () => (
					<Header navigation={navigation} title="Goals Today!!! " />
				),
				headerStyle: {backgroundColor: '#3a59b7'},
				headerTintColor: '#ffffff',
			};
		},
	},
	Single: {
		screen: Single,
		navigationOptions: {
			title: 'Single',
			headerStyle: {backgroundColor: '#3a59b7'},
			headerTintColor: '#ffffff',
		},
	},
	Settings: {
		screen: Settings,
		navigationOptions: {
			title: 'Settings',
			headerStyle: {backgroundColor: '#3a59b7'},
			headerTintColor: '#ffffff',
		},
	},
});

export default createAppContainer(App);
