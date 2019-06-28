import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const theme = createMuiTheme({
	palette: { 
		background: {
			"default": "#000000"
		}
	}
});

export const styles = {
	root: {
	    display: 'flex'
	},
	toolbar: {
		paddingRight: 24
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	menuButtonHidden: {
		display: 'none'
	},
	title: {
		flexGrow: 1
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9)
		}
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto'
	},
	container: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(2)
	},
	paper: {
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
		minHeight: "440px"

	},
	fixedHeight: {
		height: 240
	},
	table: {
		minWidth: 650
	},
	addButton: {
		margin: theme.spacing(1),
		float: "right"
	},
	leftIcon: {
		marginRight: theme.spacing(1)
	},
	iconSmall: {
		fontSize: 20
	},
	formulario: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 250
	}
};

export const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);
