import React from 'react';
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
import Fab from '@material-ui/core/Fab';

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
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import PaletteIcon from '@material-ui/icons/Palette';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';


import { AdapterLink, styles } from '../../components/util/config';
import { getCookie, renderRedirect } from '../../components/util/auth';
import { requests } from '../../components/util/request';

import { amber, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

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

const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white
	},
	body: {
		fontSize: 14
	},
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default
		}
	}
}))(TableRow);



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

class Service extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			openDialog: false,
			arrayService: [],
			error: false,
			message: null,
			variant: 'error'
		};
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.updateServiceTable = this.updateServiceTable.bind(this);
		this.openDialog = this.openDialog.bind(this);
		this.save = this.save.bind(this);
		this.list = this.list.bind(this);
		this.errorClose = this.errorClose.bind(this);
	}
	
	handleDrawerOpen(event) {
		event.preventDefault();
		this.props.update(prevState => ({
			menuClick: !prevState.menuClick
		}));
	}
	
	errorClose(event){
		event.preventDefault();
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
	    requests(null, "GET", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://fast.api.local.com/api/service/", this.updateServiceTable);
	}
	
	list(){
	    requests(null, "GET", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://fast.api.local.com/api/service/", this.updateServiceTable);
	}
	
	updateServiceTable(arrayService){
		this.setState(prevState => ({
			arrayService: ((arrayService.length > 0) ? arrayService : [])
		}));
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
			this.setState({message: "O campo não pode estar vazio."});
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
		const fixedHeightPaper = clsx(this.props.classes.paper, this.props.classes.fixedHeight);
		const date = new Date();
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
					<div>
						<Link component={AdapterLink} color="inherit" to="/home">
							<ListItem button>
								<ListItemIcon>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText primary="Home" />
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
						<Link component={AdapterLink} color="inherit" to="/switchmodel">
					        <ListItem button>
					        	<ListItemIcon>
					        		<PaletteIcon />
					        	</ListItemIcon>
					        	<ListItemText primary="Modelo de Switch" />
					        </ListItem>
			        	</Link>
				    </div>	        
				</List>
			    </Drawer>
			    <main className={ this.props.classes.content }>
		        	<div className={ this.props.classes.appBarSpacer } />
			        <Container maxWidth="lg" className={ this.props.classes.container }>
	        			<Fab
	        				size="small"
		        			color="primary"
		        			aria-label="Add"
		        			className={this.props.classes.addButton}
	        				title="Adicionar Serviço"
	        				onClick={this.openDialog}
	        			>
	        				<AddIcon />
	        			</Fab>
		        		<Grid container spacing={3}>
			        		<Grid item xs={12} md={12} lg={12}>
			        			<Paper className={fixedHeightPaper}>
				        	        <Table className={this.props.classes.table} size="small">
				        	        	<TableHead>
				        	        		<TableRow>
				        	        			<StyledTableCell align="right">ID</StyledTableCell>
				        	        			<StyledTableCell align="right">Name</StyledTableCell>
				        	        			<StyledTableCell align="right">Active</StyledTableCell>
				        	        			<StyledTableCell align="right">Created At</StyledTableCell>
				        	        			<StyledTableCell align="right">Actions</StyledTableCell>
				        	        		</TableRow>
				        	        	</TableHead>
				        	        	<TableBody>
				        	        	{
				        	    			this.state.arrayService.map(function(obj, idx){
				        	            		return (
				        	            			<StyledTableRow key={idx}>
						        	        			<StyledTableCell align="right">{obj.id}</StyledTableCell>
						        	        			<StyledTableCell align="right">{obj.name}</StyledTableCell>
						        	        			<StyledTableCell align="right">{obj.active?"Yes":"No"}</StyledTableCell>
						        	        			<StyledTableCell align="right">{obj.createdAt}</StyledTableCell>
						        	        			<StyledTableCell align="right">
						        	        			
						        	        			</StyledTableCell>
						        	        		</StyledTableRow>
						        	        	)
				        	            	})
				        	        	}
				        	        	</TableBody>
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
					<Dialog open={this.state.openDialog} onClose={this.openDialog} aria-labelledby="form-dialog-title">
				    	<DialogTitle id="form-dialog-title">Novo Serviço</DialogTitle>
					    <form className={ this.props.classes.formulario } noValidate autoComplete="off" onSubmit={this.save}>			    	
					    	<DialogContent>
					    		<DialogContentText>
					    			Preencha os campos abaixo e click em "Salvar" para inserir
					    			um novo Serviço.<br/>
					    			Os campos com * são obrigatórios.
					    		</DialogContentText>
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

