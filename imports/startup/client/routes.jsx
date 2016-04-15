import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route componets
import App from '../../ui/pages/App.jsx';
import SignIn from '../../ui/pages/SignIn.jsx';
import Calculator from '../../ui/pages/Calculator.jsx';
import Blog from '../../ui/pages/Blog.jsx';
import TodoList from '../../ui/pages/TodoList.jsx';
import MaterialUi from '../../ui/pages/MaterialUi.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';

export const renderRoutes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={App} />
			<Route path="signin" component={SignIn}/>
			<Route path="calcu" component={Calculator}/>
			<Route path="blog" component={Blog}/>
			<Route path="todo" component={TodoList}/>
			<Route path="ui" component={MaterialUi}/>
			<Route path="*" component={NotFoundPage}/>
		{/*</Route>*/}
	</Router>
);