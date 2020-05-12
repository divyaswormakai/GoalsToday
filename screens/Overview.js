import React, {useState, useEffect} from 'react';
import {
	Text,
	View,
	Button,
	FlatList,
	TouchableOpacity,
	Modal,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import {globalStyles} from '../globals/globalStyles';
import GoalCard from '../shared/goalCard';
import AddForm from '../shared/addForm';

import Realm from 'realm';
// import BackgroundTimer from 'react-native-background-timer';
import BackgroundJob from 'react-native-background-job';

const goalSchema = {
	name: 'Goals',
	primaryKey: 'id',
	properties: {
		id: {type: 'int', default: 0},
		title: 'string',
		description: 'string',
	},
};

const realm = new Realm({
	path: 'User.realm',
	schema: [goalSchema],
});

const backgroundJob = {
	jobKey: 'addGoalKey',
	job: () => console.log('Running in background'),
};

BackgroundJob.register(backgroundJob);

var backgroundSched = {jobKey: 'addGoalKey', timeout: 300000, period: 5000};
export default function Overview({navigation}) {
	const [modalOpen, setModalOpen] = useState(false);
	const [goals, setGoals] = useState([]);

	useEffect(() => {
		ViewAllGoals();
		// BackgroundTimer.runBackgroundTimer(() => {
		// 	AddGoal({title: 'From countdown', description: 'blah blah'});
		// 	console.log('Adding from countdown');
		// }, 5000);

		let i = 0;
		BackgroundJob.schedule(backgroundSched)
			.then(() => {
				AddGoal({
					title: 'From countdown numbered' + i.toString(),
					description: 'blah blah',
				});
				console.log('Adding from countdown');
				i += 1;
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const ViewAllGoals = () => {
		const realmGoals = realm.objects('Goals');
		console.log('Viewing all goals');
		setGoals(realmGoals);
	};
	const AddGoal = ({title, description}) => {
		console.log(title, description);
		realm.write(() => {
			let ID =
				realm.objects('Goals').sorted('id', true).length > 0
					? realm.objects('Goals').sorted('id', true)[0].id + 1
					: 1;
			realm.create('Goals', {
				id: ID,
				title: title,
				description: description,
			});
			console.log('Added new goal');
		});
		setModalOpen(false);
		ViewAllGoals();
	};

	const DeleteGoal = ({id}) => {
		realm.write(() => {
			if (realm.objects('Goals').filtered('id=' + id).length > 0) {
				realm.delete(realm.objects('Goals').filtered('id=' + id));
				ViewAllGoals();
			}
		});
	};

	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.headerText}>Your Goals For Today</Text>
			{goals.length > 0 ? (
				<FlatList
					data={goals}
					renderItem={({item}, ind) => (
						<View key={ind}>
							<TouchableOpacity
								onPress={() => navigation.navigate('Single', item)}>
								<GoalCard goalContent={item} />
							</TouchableOpacity>
							<Button title="Delete" onPress={() => DeleteGoal(item)} />
						</View>
					)}
				/>
			) : (
				<Text>You should set your goals</Text>
			)}
			<Button title="Add" onPress={() => setModalOpen(true)} />
			<Modal visible={modalOpen} animationType="slide">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={globalStyles.modalContent}>
						<Button title="Close " onPress={() => setModalOpen(false)} />
						<AddForm AddGoal={AddGoal} />
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		</View>
	);
}
