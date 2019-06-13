import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RouterIcon from '@material-ui/icons/Router';
import HomeIcon from '@material-ui/icons/Home';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

class Menu extends React.Component {
	
	render() {
		return (
			<List>
				<div>
					<Link component={AdapterLink} color="inherit" to="/home">
						<ListItem button>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItem>
		        	</Link>
					<Link component={AdapterLink} color="inherit" to="/switch">
						<ListItem button>
							<ListItemIcon>
								<RouterIcon />
							</ListItemIcon>
							<ListItemText primary="Switch" />
						</ListItem>
		        	</Link>
					<Link component={AdapterLink} color="inherit" to="/vlan">
				        <ListItem button>
				        	<ListItemIcon>
				        		<DeviceHubIcon />
				        	</ListItemIcon>
				        	<ListItemText primary="VLans" />
				        </ListItem>
		        	</Link>
					<Link component={AdapterLink} color="inherit" to="/pop">
				        <ListItem button>
				        	<ListItemIcon>
				        		<SettingsInputAntennaIcon />
				        	</ListItemIcon>
				        	<ListItemText primary="POP" />
				        </ListItem>
		        	</Link>
					<Link component={AdapterLink} color="inherit" to="/dashboard">
				        <ListItem button>
				        	<ListItemIcon>
				        		<DashboardIcon />
				        	</ListItemIcon>
				        	<ListItemText primary="Dashboard" />
				        </ListItem>
		        	</Link>
					<Link component={AdapterLink} color="inherit" to="/config">
				        <ListItem button>
				        	<ListItemIcon>
				        		<SettingsIcon />
				        	</ListItemIcon>
				        	<ListItemText primary="Configurar" />
				        </ListItem>
		        	</Link>
			    </div>	        
			</List>
		);
	}
}

export default Menu;
