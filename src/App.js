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
					<PrivateRoute exact={true} path="/" component={Home} update={this.props.setAppState}  appState={this.props.appState} />
					<PrivateRoute exact={true} path="/switchmodel" component={SwitchModel} update={this.props.setAppState}  appState={this.props.appState} />
					<PrivateRoute exact={true} path="/pop" component={Pop} update={this.props.setAppState}  appState={this.props.appState} />
					<PrivateRoute exact={true} path="/service" component={Service} update={this.props.setAppState}  appState={this.props.appState} />
					<PrivateRoute exact={true} path="/switchs" component={Switchs} update={this.props.setAppState}  appState={this.props.appState} />
					<PrivateRoute exact={true} path="/vlan" component={Vlan} update={this.props.setAppState}  appState={this.props.appState} />
				</Switch>
			</Router>
		);
	}
}

export default App;
