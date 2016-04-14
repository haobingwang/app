import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';
import BadgeExampleSimple from '../components/BadgeExampleSimple';
import DatePickerExampleSimple from '../components/DatePickerExampleSimple';

import Task from '../components/Task.jsx';

export default class TodoList extends Component {
	getTasks() {
		return [
			{id:1,text:'This is task1'},
			{id:2,text:'This is task2'},
			{id:3,text:'This is task3'},
		];
	}
	renderTasks(){
		return this.getTasks().map((task) => {
			return <Task key={task.id} task={task.text} />
		});
	}

	render() {
		return (
			<div>
				<h1>Todo List</h1>
				<RaisedButton label="New" />
				<ul>{this.renderTasks()}</ul>

				<AppBar
					title="Title"
				/>

				<DatePickerExampleSimple />

			    <BadgeExampleSimple />

			</div>
		);
	}
}