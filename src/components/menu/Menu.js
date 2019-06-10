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

export default function Menu(props) {
	return (
		<List>
			<div>
				<ListItem button>
					<ListItemIcon>
						<RouterIcon />
					</ListItemIcon>
					<ListItemText primary="Switch" />
				</ListItem>
		        <ListItem button>
		        	<ListItemIcon>
		        		<DeviceHubIcon />
		        	</ListItemIcon>
		        	<ListItemText primary="VLans" />
		        </ListItem>
		        <ListItem button>
		        	<ListItemIcon>
		        		<SettingsIcon />
		        	</ListItemIcon>
		        	<ListItemText primary="Configurar" />
		        </ListItem>
		        <ListItem button>
		        	<ListItemIcon>
		        		<SettingsInputAntennaIcon />
		        	</ListItemIcon>
		        	<ListItemText primary="POP" />
		        </ListItem>
		        <ListItem button>
		        	<ListItemIcon>
		        		<DashboardIcon />
		        	</ListItemIcon>
		        	<ListItemText primary="Dashboard" />
		        </ListItem>
		    </div>	        
		</List>
	);
}