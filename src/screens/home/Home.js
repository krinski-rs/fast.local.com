import React from 'react';
//import PropTypes from 'prop-types';
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

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AppDrawerNavItem from '../message/AppDrawerNavItem';

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
	},
	table: {
		minWidth: 650
	}
};

class Home extends React.Component {
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
		const date = new Date();
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
				      		{ "Home" }
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
					<List>
						<AppDrawerNavItem key={"app_drawer_nav_item_0"}
							depth={ 0 }
							title={"Home"}
							href={"/home"}
							path={'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'}
						/>
						<AppDrawerNavItem key={"app_drawer_nav_item_1"}
							depth={ 0 }
							title={"POP"}
							href={"/pop"}
							path={'M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z'}
						/>
						<AppDrawerNavItem key={"app_drawer_nav_item_2"}
							depth={ 0 }
							title={"Switchs"}
							href={"/switchs"}
							path={'M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z'}
						/>
						<AppDrawerNavItem key={"app_drawer_nav_item_3"}
							depth={ 0 }
							title={"Vlan"}
							href={"/vlan"}
							path={'M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z'}
						/>
						<AppDrawerNavItem key={"app_drawer_nav_item_4"}
							depth={ 0 }
							title={"Serviço"}
							href={"/service"}
							path={'M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z'}
						/>
						<AppDrawerNavItem key={"app_drawer_nav_item_5"}
							depth={ 0 }
							title={"Modelo de Switch"}
							href={"/switchmodel"}
							path={'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'}
						/>
					</List>
			        <Divider />
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
			    </Drawer>
			    <main className={ this.props.classes.content }>
		        	<div className={ this.props.classes.appBarSpacer } />
			        <Container maxWidth="lg" className={ this.props.classes.container }>
		        		<Grid container spacing={3}>
			        		<Grid item xs={12} md={12} lg={12}>
			        			<Paper className={fixedHeightPaper}>
				        	        <Table className={this.props.classes.table} size="small">
				        	          <TableHead>
				        	            <TableRow>
				        	              <TableCell>Dessert (100g serving)</TableCell>
				        	              <TableCell align="right">Calories</TableCell>
				        	              <TableCell align="right">Fat&nbsp;(g)</TableCell>
				        	              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
				        	              <TableCell align="right">Protein&nbsp;(g)</TableCell>
				        	            </TableRow>
				        	          </TableHead>
				        	          <TableBody />
				        	        </Table>

			        			</Paper>
			        		</Grid>
			        	</Grid>
				    </Container>
					<Typography variant="body2" color="textSecondary" align="center">
						{'Copyright © '+date.getFullYear()+' All rights reserved  '}
						<Link color="inherit" href="http://www.vogeltelecom.com" rel="noopener" target="_blank">
							Vogel Telecom
						</Link>
						{' team.'}
					</Typography>
			    </main>
			</div>
		);
	}
}

export default withStyles(styles)(Home);
