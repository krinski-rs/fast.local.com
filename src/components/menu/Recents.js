import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';

//const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

export default function Recents(props) {
	return (
		<List>
			<div>
				<ListSubheader inset>Mais Recentes</ListSubheader>
				<ListItem button>
					<ListItemIcon>
						<AssignmentIcon />
					</ListItemIcon>
					<ListItemText primary="Current month" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<AssignmentIcon />
					</ListItemIcon>
					<ListItemText primary="Last quarter" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<AssignmentIcon />
					</ListItemIcon>
					<ListItemText primary="Year-end sale" />
				</ListItem>
			</div>
		</List>
	);
}