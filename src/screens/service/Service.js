import React from 'react';
import {
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import List from '@material-ui/core/List';

import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SaveIcon from '@material-ui/icons/Save';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import { getCookie, renderRedirect } from '../../components/util/auth';
import { requests } from '../../components/util/request';
import { styles } from '../../components/util/config';

import { amber, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import AppDrawerNavItem from '../message/AppDrawerNavItem';
import ListService from './ListService';
import AddService from './AddService';

const variantIcon = {
	success: CheckCircleIcon,
	warning: WarningIcon,
	error: ErrorIcon,
	info: InfoIcon
};

const useStyles1 = makeStyles(theme => ({
	success: {
		backgroundColor: green[600]
	},
	error: {
		backgroundColor: theme.palette.error.dark
	},
	info: {
		backgroundColor: theme.palette.primary.main
	},
	warning: {
		backgroundColor: amber[700]
	},
	icon: {
		fontSize: 20
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing(1)
	},
	message: {
		display: 'flex',
		alignItems: 'center'
	}
}));

function MySnackbarContentWrapper(props) {
	const classes = useStyles1();
	const { className, message, onClose, variant, ...other } = props;
	const Icon = variantIcon[variant];
	
	return (
		<SnackbarContent
			className={clsx(classes[variant], className)}
			aria-describedby="client-snackbar"
			message={
				<span id="client-snackbar" className={classes.message}>
					<Icon className={clsx(classes.icon, classes.iconVariant)} />
					{message}
				</span>
			}
			action={[
				<IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
					<CloseIcon className={classes.icon} />
				</IconButton>
			]}
			{...other}
		/>
	);
}

function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route {...rest}
			render={ props =>
				rest.user.logged ? 
					( <Component {...rest} /> ) : 
					( <Redirect to={{ pathname: "/login", state: { from: props.location } }} /> )
			}
		/>
	);
}

class Service extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			openDialog: false,
			arrayService: [],
			error: false,
			message: null,
			variant: 'error',
			rowsPerPage: 15,
			total: 0,
			offset: 0
		};
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.updateServiceTable = this.updateServiceTable.bind(this);
		this.openDialog = this.openDialog.bind(this);
		this.save = this.save.bind(this);
		this.list = this.list.bind(this);
		this.errorClose = this.errorClose.bind(this);
		this.handleChangePage = this.handleChangePage.bind(this);
		this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
	}
	
	handleDrawerOpen(event) {
		event.preventDefault();
		this.props.update(prevState => ({
			menuClick: !prevState.menuClick
		}));
	}
	
	errorClose(event){
		this.setState(prevState => ({
			error: false,
			message: null,
			variant: "error"
		}));
	}
	
	componentDidMount() {
		if(!this.props.user || !this.props.user.logged || (this.props.user.cookie !== getCookie())){
			renderRedirect();
		}
//	    this.list();
	}
	
	list(offset = 0, limit = 15){
	    requests(null, "GET", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://fast.api.local.com/api/service/?offset="+offset+"&limit="+limit, this.updateServiceTable);
	}
	
	updateServiceTable(arrayService){
		this.setState(prevState => ({
			arrayService: ((arrayService.data.length > 0) ? arrayService.data : []),
			total: arrayService.total,
			offset: arrayService.offset,
			rowsPerPage: arrayService.limit
		}));
	}
	
	handleChangePage(event, newPage) {
		this.list(newPage, this.state.rowsPerPage);
	}
	
	handleChangeRowsPerPage(event) {
		this.list(this.state.offset, parseInt(event.target.value, 10));
	}

	openDialog(event){
		event.preventDefault();
		this.setState(prevState => ({
			openDialog: !prevState.openDialog,
			error: false,
			message: null
		}));
	}
	
	save(event){
		event.preventDefault();
		if (!event.target.checkValidity()) {
			this.setState({error: true});
			this.setState({message: "O campo com * não pode estar vazio."});
			return false;
		}
		
	    var current, entries, item, key, output, value;
	    output = {};
	    entries = new FormData( event.target ).entries();
	    /*
	     * Iterar sobre valores e atribuir ao item.
	     */

	    item = entries.next().value;
	    while( item ) {
	    	/*
	    	 * atribuir a variáveis para tornar o código mais legível.
	    	 */
	    	key = item[0];
	    	value = item[1];
	    	/*
	    	 * Verifique se a chave já existe
	    	 */
	    	if(Object.prototype.hasOwnProperty.call( output, key)){
	    		current = output[ key ];
	    		if( !Array.isArray( current ) ){
	    			/*
	    			 * Se não for um array, converta-o para um array.
	    			 */
	    			current = output[ key ] = [ current ];
	    		}
	    		/*
	    		 * Adicona o novo valor ao array.
	    		 */
	    		current.push( value );
	    	}else{
	    		output[ key ] = value;
	    	}
	    	
	    	item = entries.next().value;
	    }
		
	    var retorno = requests(output, "POST", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://fast.api.local.com/api/service/", this.list);

	    retorno = Promise.resolve(retorno);
	    retorno = retorno.then((obj) => {
		    if(!obj.hasOwnProperty('id') || !(parseInt(obj.id, 10) > 0)){
				this.setState(prevState => ({
					error: true,
					message: obj.mensagem
				}));
		    } else {
				this.setState(prevState => ({
					openDialog: false,
					error: true,
					message: "Serviço cadastrado com sucesso!!!!",
					variant: "success"
				}));
		    }
	    });
	    return retorno;
	}
	
	render() {
		const date = new Date();
		const state = this.props.appState;
		return (
			<div className={ this.props.classes.root }>
				<CssBaseline />
			      <AppBar position="absolute" className={ clsx(this.props.classes.appBar, this.props.menuClick && this.props.classes.appBarShift) }>
			      	<Toolbar className={this.props.classes.toolbar}>
			      		<IconButton
				            edge="start"
				            color="inherit"
				            aria-label="Open drawer"
				            onClick={this.handleDrawerOpen}
				            className={ clsx(this.props.classes.menuButton, this.props.menuClick && this.props.classes.menuButtonHidden) }
			        	>
			      			<MenuIcon />
			      		</IconButton>
			      		<Typography component="h1" variant="h6" color="inherit" noWrap className={ this.props.classes.title }>
				      		{ "Serviço" }
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
			    			paper: clsx(this.props.classes.drawerPaper, !this.props.menuClick && this.props.classes.drawerPaperClose)
			    		}
			    	}
			    	open={ this.props.menuClick }
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
							title={"Listagem"}
							href={"/service"}
							path={'M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z'}
						/>
						<AppDrawerNavItem key={"app_drawer_nav_item_2"}
							depth={ 0 }
							title={"Cadastro"}
							href={"/service/cadastro"}
							path={'M19,11H15V15H13V11H9V9H13V5H15V9H19M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6Z'}
						/>
					</List>
			    </Drawer>
			    <main className={ this.props.classes.content }>
		        	<div className={ this.props.classes.appBarSpacer } />
			        <Container maxWidth="lg" className={ this.props.classes.container }>
						<Route>
							<Switch>
								<PrivateRoute path="/service/cadastro" component={AddService} update={this.props.setAppState} {...state} />
								<PrivateRoute path="/" component={ListService} update={this.props.setAppState} {...state} />
							</Switch>
						</Route>
				    </Container>
					<Typography variant="body2" color="textSecondary" align="center">
						{'Copyright © '+date.getFullYear()+' All rights reserved  '}
						<Link color="inherit" href="http://www.vogeltelecom.com" rel="noopener" target="_blank">
							Vogel Telecom
						</Link>
						{' team.'}
					</Typography>
					<Dialog open={this.state.openDialog} onClose={this.openDialog} aria-labelledby="form-dialog-title" maxWidth="xs" scroll="paper">
				    	<DialogTitle id="form-dialog-title">Novo Serviço</DialogTitle>
					    <form noValidate autoComplete="off" onSubmit={this.save}>			    	
					    	<DialogContent>
					    		<DialogContentText>
					    			Preencha os campos abaixo e click em "Salvar" para inserir
					    			um novo Serviço.<br/>
					    			Os campos com * são obrigatórios.
					    		</DialogContentText>
							    <Grid container spacing={3}>
						    		<Grid item xs={12}>
							    		<TextField
							    			autoFocus
								            margin="dense"
								            id="name"
								            name="name"
								            label="Name"
								            type="text"
								            fullWidth
								            required
								            error={ this.state.error }
							    			variant="outlined"
								        />
								    </Grid>
							    </Grid>
							</DialogContent>
					    	<DialogActions>
					    		<Button onClick={this.openDialog} color="primary">
					    			Cancelar
					    		</Button>
				    			<Button type="submit" color="primary">
				    				<SaveIcon className={clsx(this.props.classes.leftIcon, this.props.classes.iconSmall)} />
				    				Salvar
					    		</Button>
					    	</DialogActions>
				    	</form>
				    </Dialog>
			    	<Snackbar
			    		anchorOrigin={{
			    			vertical: 'bottom',
			    			horizontal: 'left'
			    		}}
			    		open={this.state.error}
			    		autoHideDuration={6000}
			        	onClose={this.errorClose}
			    	>
				        <MySnackbarContentWrapper
				        	variant={this.state.variant}
				        	className={this.props.classes.leftIcon}
				        	message={this.state.message}
				        	onClose={this.errorClose}
				        />
			    	</Snackbar>
			    </main>
			    
			</div>
		);
	}
}

export default withStyles(styles)(Service);
