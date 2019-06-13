import React from 'react';
//import { Route, Redirect, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuBar from '../../components/menu/Menu';
import RecentsBar from '../../components/menu/Recents';
import Footer from '../../components/footer/Footer';

import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const drawerWidth = 240;
const theme = createMuiTheme({
	palette: { 
		background: {
			"default": "#000000"
		}
	}
});

const styles = {
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
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240
	}
};

class Base extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			open: true
		};
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
	}
	
	handleDrawerOpen(event) {
		event.preventDefault();
		this.setState(prevState => ({
			open: !prevState.open
		}));
	}
	
	render() {
		const fixedHeightPaper = clsx(this.props.classes.paper, this.props.classes.fixedHeight);
		return (
			<div className={ this.props.classes.root }>
				<CssBaseline />
			      <AppBar position="absolute" className={ clsx(this.props.classes.appBar, this.state.open && this.props.classes.appBarShift) }>
			      	<Toolbar className={this.props.classes.toolbar}>
			      		<IconButton
				            edge="start"
				            color="inherit"
				            aria-label="Open drawer"
				            onClick={this.handleDrawerOpen}
				            className={ clsx(this.props.classes.menuButton, this.state.open && this.props.classes.menuButtonHidden) }
			        	>
			      			<MenuIcon />
			      		</IconButton>
			      		<Typography component="h1" variant="h6" color="inherit" noWrap className={ this.props.classes.title }>
				      		{ this.props.title }
			      		</Typography>
			      		<IconButton color="inherit">
				      		<Badge badgeContent={4} color="secondary">
					      		<NotificationsIcon />
				      		</Badge>
			      		</IconButton>
			      	</Toolbar>
			    </AppBar>
			    <Drawer
			    	variant="permanent"
			    	classes={
			    		{
			    			paper: clsx(this.props.classes.drawerPaper, !this.state.open && this.props.classes.drawerPaperClose)
			    		}
			    	}
			    	open={ this.state.open }
			    >
			    	<div className={ this.props.classes.toolbarIcon }>
			    		<IconButton onClick={ this.handleDrawerOpen }>
			    			<ChevronLeftIcon />
			    		</IconButton>
			    	</div>
			        <Divider />
			        <MenuBar />
			        <Divider />
			        <RecentsBar />
			    </Drawer>
			    <main className={ this.props.classes.content }>
		        	<div className={ this.props.classes.appBarSpacer } />
			        <Container maxWidth="lg" className={ this.props.classes.container }>
		        		<Grid container spacing={3}>
			        		<Grid item xs={12} md={8} lg={9}>
			        			<Paper className={fixedHeightPaper}>
			        				<React.Fragment>
			        					{ "kfkfkfkfkfk" }
			        				</React.Fragment>
			        			</Paper>
			        		</Grid>
			        		
			        		
			        		<Grid item xs={12} md={4} lg={3}>
			        			<Paper className={fixedHeightPaper}>
			        				<React.Fragment>
			        					<Typography component="h2" variant="h6" color="primary" gutterBottom>
			        						{"Recent Deposits"}
			        					</Typography>
			        					<Typography component="p" variant="h4">
			        						$3,024.00
			        					</Typography>
			        					<Typography color="textSecondary" className={this.props.classes.depositContext}>
			        						on 15 March, 2019
			        					</Typography>
			        					<div>
			        						<Link color="primary" href="#">
			        							View balance
			        						</Link>
			        					</div>
			        				</React.Fragment>
			        			</Paper>
			        		</Grid>
		        		</Grid>
				    </Container>
			    	<Footer />
			    </main>
			</div>
		);
	}
}

Base.propTypes = {
	title: PropTypes.string.isRequired
};

export default withStyles(styles)(Base);
