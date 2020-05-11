import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {globalStyles} from '../globals/globalStyles';
import {Formik} from 'formik';
import * as yup from 'yup';

const addSchema = yup.object({
	title: yup
		.string()
		.trim()
		.required()
		.min(4),
});
export default function AddForm({AddGoal}) {
	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{title: '', description: ''}}
				validationSchema={addSchema}
				onSubmit={(values, actions) => {
					AddGoal(values);
				}}>
				{props => (
					<View>
						<TextInput
							placeholder="Goal title"
							style={globalStyles.formInput}
							onChangeText={props.handleChange('title')}
							value={props.values.title}
							onBlur={props.handleBlur('title')}
						/>
						<Text style={globalStyles.errorTxt}>
							{props.touched.title && props.errors.title}
						</Text>
						<TextInput
							multiline
							minHeight={100}
							placeholder="Goal Description"
							style={globalStyles.formInput}
							onChangeText={props.handleChange('description')}
							value={props.values.description}
						/>
						<Button
							title="Add to Goals"
							color="maroon"
							onPress={props.handleSubmit}
						/>
					</View>
				)}
			</Formik>
		</View>
	);
}
