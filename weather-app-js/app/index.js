import React from 'react';
import { render } from 'react-dom';
// ------------------Login pages-------------------//
import WeatherPage from './components/weather/weatherPage';
import LoginPage from './components/auth/Login';
import {
	Router,
	Route,
	hashHistory,
	IndexRoute
} from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/stores';
import AuthLayout from './components/layout/Auth'

render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={AuthLayout}>
		   	<IndexRoute path="login" component={LoginPage} />
				<Route path="weather" component={WeatherPage}/>
			</Route>
		</Router>
	</Provider>
), document.getElementById("app"));
