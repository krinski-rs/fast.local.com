import React, { Component } from 'react';
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

class Switchs extends Component {
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
				      		{ "Switchs" }
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
							href={"/"}
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
				</Drawer>
			    <main className={ this.props.classes.content }>
	        		<div className={ this.props.classes.appBarSpacer } />
			        <Container maxWidth="lg" className={ this.props.classes.container }>
			        </Container>
					<Footer />
			    </main>
			</div>
		);
	}
}

export default withStyles(styles)(Switchs);
