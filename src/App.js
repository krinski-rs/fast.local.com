import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Service from './screens/service/Service';
import SwitchModel from './screens/switchmodel/SwitchModel';
import Pop from './screens/pop/Pop';
import Switchs from './screens/switchs/Switchs';
import Vlan from './screens/vlan/Vlan';

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
					<PrivateRoute path="/home" component={Home} update={this.props.setAppState} {...state} />
					<PrivateRoute path="/service" component={Service} update={this.props.setAppState} {...state} />
					<PrivateRoute path="/switchmodel" component={SwitchModel} update={this.props.setAppState} {...state} />
					<PrivateRoute path="/pop" component={Pop} update={this.props.setAppState} {...state} />
					<PrivateRoute path="/switchs" component={Switchs} update={this.props.setAppState} {...state} />
					<PrivateRoute path="/vlan" component={Vlan} update={this.props.setAppState} {...state} />
				</Switch>
			</Router>
		);
	}
}

export default App;
