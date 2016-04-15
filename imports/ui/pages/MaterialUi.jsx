import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import BadgeExampleSimple from '../components/BadgeExampleSimple';
import DatePickerExampleSimple from '../components/DatePickerExampleSimple';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DarkRawTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const MaterialUi = React.createClass({
	//the key passed through context must be called "muiTheme"
	childContextTypes : {
		muiTheme: React.PropTypes.object,
	},

	getChildContext() {
	    return {
	      muiTheme: getMuiTheme(DarkRawTheme),
	    };
	},

	render() {
		return (
			<div>
				<h1>material-ui 0.15.beta.1</h1>

				<RaisedButton label="New"/>

				<AppBar title="title"/>

				<BadgeExampleSimple />

				<DatePickerExampleSimple />
			</div>
		);
	},
});

export default MaterialUi;
