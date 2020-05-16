import React from 'react';
import BackgroundJob from 'react-native-background-job';

export default function BGJob() {
	var backgroundSched = {
		jobKey: 'addGoalKey',
		timeout: 300000,
		period: 5000,
		override: true,
		allowExecutionInForeground: true,
	};

	const backgroundJob = {
		jobKey: 'addGoalKey',
		job: () => {
			let i = 0;
			// AddGoal({
			// 	title: 'From countdown numbered' + i.toString(),
			// 	description: 'blah blah',
			// });
			i += 1;
			console.log('From background job');
		},
	};

	BackgroundJob.register(backgroundJob);

	BackgroundJob.schedule(backgroundSched)
		.then(() => {
			console.log('Created schedule');
		})
		.catch(err => {
			console.log(err);
		});
}
