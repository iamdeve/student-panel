import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './views/Dashboard/Dashboard';
import Profile from './views/Profile/Profile';
import Chat from './views/Chat/Chat';
import Calendar from './views/Calendar/Calendar';
import NoticeBoard from './views/NoticeBoard/NoticeBoard';
const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Dashboard} />
			<Route exact path='/profile' component={Profile} />
			<Route exact path='/chat' component={Chat} />
			<Route exact path='/calendar' component={Calendar} />
			<Route exact path='/notice-board' component={NoticeBoard} />
		</Switch>
	);
};

export default Routes;
