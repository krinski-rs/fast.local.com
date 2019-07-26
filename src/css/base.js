import { createMuiTheme } from '@material-ui/core/styles';
import { amber, green, blue } from '@material-ui/core/colors';

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
		paddingBottom: theme.spacing(2),
		minHeight: 577
	},
	paper: {
	    padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
		minHeight: "440px"

	},
	fixedHeight: {
		minHeight: 480
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
	iconHover: {
	    margin: theme.spacing(1),
	    color: blue,
		fontSize: 20,
	    '&:hover': {
	      color: blue[800],
	      cursor: "pointer"
	    },
	},
	success: {
		backgroundColor: green[600],
	},
	error: {
		backgroundColor: theme.palette.error.dark,
	},
	info: {
		backgroundColor: theme.palette.primary.main,
	},
	warning: {
		backgroundColor: amber[700],
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing(1),
	},
	margin: {
		margin: theme.spacing(1),
	},
	message: {
		display: 'flex',
		alignItems: 'center',
	},

};
