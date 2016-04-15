import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import BadgeExampleSimple from '../components/BadgeExampleSimple';
import DatePickerExampleSimple from '../components/DatePickerExampleSimple';
import CircularProgressExampleSimple from '../components/CircularProgressExampleSimple';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DarkRawTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

export default class MaterialUi extends Component {
	getChildContext() {
	    return {
	      muiTheme: getMuiTheme(DarkRawTheme),
	    };
	}

	render() {
		return (
			<div>
				<h1>material-ui 0.15.beta.1</h1>

				<p>Button</p>
				<RaisedButton label="New"/>
				
				<p>App Bar</p>
				<AppBar title="title"/>

				<p>Badge</p>
				<BadgeExampleSimple />
				
				<p>Date Picker</p>
				<DatePickerExampleSimple />

				<p>CircularProgressExampleSimple</p>
				<CircularProgressExampleSimple />
			</div>
		);
	}
};

//the key passed through context must be called "muiTheme"
MaterialUi.childContextTypes = {
	muiTheme: React.PropTypes.object,
}
