import React, { Component } from 'react';
import {
	Switch
} from "react-router-dom";
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';

import { styles } from '../../css/base.js';
import AppDrawerNavItem from '../../components/util/AppDrawerNavItem';
import Footer from '../../components/util/Footer';
import { PrivateRoute } from '../../components/util/auth';
import SwitchModelCreate from './SwitchModelCreate';
import SwitchModelList from './SwitchModelList';

class SwitchModel extends Component {
	constructor(props) {
		super(props);		
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
	}
	
	handleDrawerOpen(event) {
		event.preventDefault();
		this.props.update(prevState => ({
			menuClick: !prevState.menuClick
		}));
	}
	
	render() {
		return (
			<div className={ this.props.classes.root }>
				<CssBaseline />
				<AppBar
					position="absolute"
					className={
						clsx(this.props.classes.appBar, this.props.appState.menuClick && this.props.classes.appBarShift)
					}
				>
		      		<Toolbar className={ this.props.classes.toolbar }>
			      		<IconButton
				            edge="start"
				            color="inherit"
				            aria-label="Open drawer"
				            onClick={this.handleDrawerOpen}
				            className={ clsx(this.props.classes.menuButton, this.props.appState.menuClick && this.props.classes.menuButtonHidden) }
			        	>
							<SvgIcon titleAccess="ope/close">
								<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
							</SvgIcon>
			      		</IconButton>
						<Typography component="h1" variant="h6" color="inherit" noWrap className={ this.props.classes.title }>
				      		{ "SwitchModel" }
			      		</Typography>
			      		<IconButton color="inherit">
				      		<Badge badgeContent={0} color="secondary">
								<SvgIcon titleAccess="alert">
									<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
								</SvgIcon>
				      		</Badge>
			      		</IconButton>
			      		<IconButton color="inherit">
							<SvgIcon titleAccess="logoff">
								<path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>
							</SvgIcon>
			      		</IconButton>
		      		</Toolbar>
				</AppBar>
				<Drawer
			    	variant="permanent"
			    	classes={
			    		{
			    			paper: clsx(this.props.classes.drawerPaper, !this.props.appState.menuClick && this.props.classes.drawerPaperClose)
			    		}
			    	}
			    	open={ this.props.menuClick }
			    >
			    	<div className={ this.props.classes.toolbarIcon }>
			    		<IconButton onClick={ this.handleDrawerOpen }>
							<SvgIcon titleAccess="close">
								<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
							</SvgIcon>
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
						<AppDrawerNavItem key={"app_drawer_nav_item_1_1"}
							depth={ 1 }
							title={"Listagem"}
							href={"/switchmodel"}
							path={'M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z'}
						/>
						<AppDrawerNavItem key={"app_drawer_nav_item_1_2"}
							depth={ 1 }
							title={"Cadastro"}
							href={"/switchmodel/create"}
							path={'M19,11H15V15H13V11H9V9H13V5H15V9H19M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6Z'}
						/>
					</List>
				</Drawer>
			    <main className={ this.props.classes.content }>
	        		<div className={ this.props.classes.appBarSpacer } />
			        <Container maxWidth="lg" className={ this.props.classes.container }>
							<Switch>
								<PrivateRoute path="/switchmodel/create" component={SwitchModelCreate} appState={ this.props.appState } update={ this.props.setAppState } />
								<PrivateRoute path="/switchmodel" component={SwitchModelList} appState={ this.props.appState } update={ this.props.setAppState } />
							</Switch>
			        </Container>
					<Footer />
			    </main>
			</div>
		);
	}
}

export default withStyles(styles)(SwitchModel);
