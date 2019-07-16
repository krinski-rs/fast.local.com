import React, { Component } from 'react';
import {
	Router,
	Switch,
	Route,
} from "react-router-dom";
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import { PrivateRoute } from './components/util/auth';
import history from './components/util/history';

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route
						exact={true}
						path='/login'
						render={
							props => (
								<Login appState={ this.props.appState } update={ this.props.setAppState } />
							)
						}
					/>
					<PrivateRoute exact={true} path="/" component={Home} update={this.props.setAppState}  appState={this.props.appState} />
				</Switch>
			</Router>
		);
	}
}

export default App;
