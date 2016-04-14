import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import { renderRoutes } from '../imports/startup/client/routes.jsx';


Meteor.startup(() => {
	render(renderRoutes(),document.getElementById('app'));
});