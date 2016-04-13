import React, { Component } from 'react';

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
				<ul>{this.renderTasks()}</ul>
			</div>
		);
	}
}