import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Login from './screens/login/Login';
import Home from './screens/home/Home';

function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route {...rest}
			render={ props =>
				rest.user.logged ? 
					( <Component {...rest} /> ) : 
					( <Redirect to={{ pathname: "/login", state: { from: props.location } }} /> )
			}
		/>
	);
}

class App extends Component {
	render() {
		const state = this.props.appState;
		return (
			<Router>
				<Switch>
					<Route exact={true} path='/' render={()=><Login {...state} update={this.props.setAppState} appState={this.props.appState} />} />
					<Route exact={true} path='/login' render={()=><Login {...state} update={this.props.setAppState} appState={this.props.appState} />} />
					<PrivateRoute path="/home" component={Home} update={this.props.setAppState} {...state}  />
				</Switch>
			</Router>
		);
	}
}

export default App;