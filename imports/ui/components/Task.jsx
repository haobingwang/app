import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Task extends Component {
	render(){
		return <li>{this.props.task}</li>
	}
}

