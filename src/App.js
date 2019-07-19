import React, { Component } from 'react';
import {
	Router,
	Switch,
	Route,
} from "react-router-dom";
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import SwitchModel from './screens/switchmodel/SwitchModel';
import Pop from './screens/pop/Pop';
import Service from './screens/service/Service';
import Switchs from './screens/switchs/Switchs';
import Vlan from './screens/vlan/Vlan';
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
					<PrivateRoute path="/home" component={Home} update={this.props.setAppState}  appState={this.props.appState} />
					<PrivateRoute path="/switchmodel" component={SwitchModel} update={this.props.setAppState}  appState={this.props.appState} />
					<PrivateRoute path="/pop" component={Pop} update={this.props.setAppState}  appState={this.props.appState} />
					<PrivateRoute path="/service" component={Service} update={this.props.setAppState}  appState={this.props.appState} />
					<PrivateRoute path="/switchs" component={Switchs} update={this.props.setAppState}  appState={this.props.appState} />
					<PrivateRoute path="/vlan" component={Vlan} update={this.props.setAppState}  appState={this.props.appState} />
					<Route
						exact={true}
						path='*'
						render={
							props => (
								<Login appState={ this.props.appState } update={ this.props.setAppState } />
							)
						}
					/>
				</Switch>
			</Router>
		);
	}
}

export default App;
