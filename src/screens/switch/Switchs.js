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

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RouterIcon from '@material-ui/icons/Router';
import HomeIcon from '@material-ui/icons/Home';
import TuneIcon from '@material-ui/icons/Tune';
import PaletteIcon from '@material-ui/icons/Palette';

import { AdapterLink, styles } from '../../components/util/config';
import { getCookie, renderRedirect } from '../../components/util/auth';
import { requests } from '../../components/util/request';


class Switchs extends React.Component {
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
	
//	componentDidMount() {
//		if(!this.props.user || !this.props.user.logged || (this.props.user.cookie !== getCookie())){
//			renderRedirect();
//		}
//	    requests(null, "POST", {
//    		"Content-Type": "application/json",
//    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
//    	}, "http://fast.api.local.com/api/pessoas/pessoa/");
//	}
	
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
				      		{ "Switch" }
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
					        	<ListItemText primary="VLan" />
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
						<Link component={AdapterLink} color="inherit" to="/service">
					        <ListItem button>
					        	<ListItemIcon>
					        		<SettingsIcon />
					        	</ListItemIcon>
					        	<ListItemText primary="Serviço" />
					        </ListItem>
			        	</Link>
						<Link component={AdapterLink} color="inherit" to="/model">
					        <ListItem button>
					        	<ListItemIcon>
					        		<PaletteIcon />
					        	</ListItemIcon>
					        	<ListItemText primary="Modelo de Switch" />
					        </ListItem>
			        	</Link>
						<Link component={AdapterLink} color="inherit" to="/config">
					        <ListItem button>
					        	<ListItemIcon>
					        		<TuneIcon />
					        	</ListItemIcon>
					        	<ListItemText primary="Configuração" />
					        </ListItem>
			        	</Link>
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

export default withStyles(styles)(Switchs);
