import React from 'react';

import {
	Router,
	Switch,
	Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';

import { useStyles } from "./assets/jss/base";

import Dashboard from "./screens/home/Dashboard";
var hist = createBrowserHistory();

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
class App extends React.Component
{
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
        return (
            <div className={this.props.classes.root}>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(this.props.classes.appBar, this.state.open && this.props.classes.appBarShift)}>
                    <Toolbar className={this.props.classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={clsx(this.props.classes.menuButton, this.state.open && this.props.classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={this.props.classes.title}>
                            Dashboard
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
                    classes={{
                        paper: clsx(this.props.classes.drawerPaper, !this.state.open && this.props.classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={this.props.classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerOpen}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <SvgIcon>
                                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <SvgIcon>
                                    <path d="M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z" />
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primary="Switchs" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <SvgIcon>
                                    <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" />
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primary="Vlans" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <SvgIcon>
                                    <path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z" />
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primary="Pops" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListSubheader inset>Saved reports</ListSubheader>
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
                    </List>
                </Drawer>
                <main className={this.props.classes.content}>
                    <div className={this.props.classes.appBarSpacer} />
                    <Container maxWidth="lg" className={this.props.classes.container}>
                        <Router history={hist}>
                            <Switch>
                                <Route exact={true} path="/" component={Dashboard} />
                            </Switch>
                        </Router>
                    </Container>
                    <Copyright />
                </main>
            </div>
        );
    }
}
export default withStyles(useStyles)(App);
