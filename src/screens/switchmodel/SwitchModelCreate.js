import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { requests, getData } from '../../components/util/request';
import { styles } from '../../css/base.js';
import { variantIcon } from '../../config/css/login';

class SwitchModelCreate extends Component {
	constructor(props) {
		super(props);		
		this.state = {
			open: false,
			mensagem: '',
			error: false,
			arrayBrand: [],
		};
		this.updateBrand = this.updateBrand.bind(this);
		this.save = this.save.bind(this);
		this.closeNotifier = this.closeNotifier.bind(this);
	}
	
	getBrands(){
	    requests(null, "GET", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://fast.api.local.com/api/switchmodel/brand", this.updateBrand);
	}

	updateBrand(arrayBrand){
		this.setState(prevState => ({
			arrayBrand: ((arrayBrand.length > 0) ? arrayBrand : [])
		}));
	}
	
	closeNotifier(){
		this.setState(prevState => ({
			open: false,
			error: false,
			mensagem: '',
		}));
	}
	
	componentDidMount() {
	    this.getBrands();
	}
	
	save(event){
		event.preventDefault();
		if (!event.target.checkValidity()) {
			this.setState({
				open: true,
				error: true,
				mensagem: "Os campos com * não podem estar vazio."
			});
			return false;
		}
		var data = getData(event);		
	    var retorno = requests(data, "POST", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://fast.api.local.com/api/switchmodel/", null);
	    retorno.then((obj)=>{
		    if(obj.ok){
		    	obj.json().then((json)=>{
    				this.setState(prevState => ({
    					error: false,
    					open:true,
    					mensagem: "SwitchModel id '"+json.id+"' cadastrado com sucesso!!"
    				}));
		    	});
		    }else{
		    	obj.json().then((json)=>{
    				this.setState(prevState => ({
    					error: true,
    					open:true,
    					mensagem: json.mensagem
    				}));
	    		});

		    }
	    }).catch((error) => {
	    	console.log("catch");
	    	console.log(error);
	    });
	}


	render() {
		const fixedHeightPaper = clsx(this.props.classes.paper, this.props.classes.fixedHeight);
		const ErrorIcon = variantIcon['error'];
		const CloseIcon = variantIcon['close'];
		return (
		    <form noValidate autoComplete="off" onSubmit={this.save} name="modelSwitchForm">			    	
	    		<Paper className={fixedHeightPaper}>
					<Grid container spacing={3} alignItems="center"
						  justify="center">
			    		<Grid item xs={6}>
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
			    		<Grid item xs={6}>
					        <TextField
								id="brand"
								name="brand"
								margin="dense"
								select
								fullWidth
					            required
								label="Select Brand"
								variant="outlined"
								SelectProps={{
									native: true
								}}
							>
		    	        	{
		    	    			this.state.arrayBrand.map(function(obj, idx){
		    	            		return (
		    	            			<option key={"brand_"+idx} value={obj}>{ obj }</option>
			        	        	)
		    	            	})
		    	        	}
				    		</TextField>
				        </Grid>
			    		<Grid item xs={4}>
				    		<TextField
					            margin="dense"
					            id="portFe"
					            name="portFe"
					            label="Nº de Portas FE"
					            type="text"
					            fullWidth
				    			variant="outlined"
					        />
				        </Grid>
			    		<Grid item xs={4}>
				    		<TextField
					            margin="dense"
					            id="portGe"
					            name="portGe"
					            label="Nº de Portas GE"
					            type="text"
					            fullWidth
				    			variant="outlined"
					        />
				        </Grid>
			    		<Grid item xs={4}>
				    		<TextField
					            margin="dense"
					            id="port10Ge"
					            name="port10Ge"
					            label="Nº de Portas 10GE"
					            type="text"
					            fullWidth
				    			variant="outlined"
					        />
				        </Grid>
			    		<Grid item xs={2}>
			    			<Button type="submit" color="primary">
			    				<SaveIcon className={clsx(this.props.classes.leftIcon, this.props.classes.iconSmall)} />
			    				Salvar
				    		</Button>
				        </Grid>
			        </Grid>
				</Paper>
				<Snackbar
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
					open={this.state.open}
					autoHideDuration={6000}
					onClose={this.closeNotifier}
				>
					<SnackbarContent
						className={clsx((!this.state.error ? this.props.classes.success : this.props.classes.error), this.props.classes.margin)}
						aria-describedby="client-snackbar"
						message={
							<span id="client-snackbar" className={this.props.classes.message}>
								<ErrorIcon className={clsx(this.props.classes.iconSmall, this.props.classes.iconVariant)} />
								{this.state.mensagem}
							</span>
						}
						action={[
							<IconButton key="close" aria-label="Close" color="inherit" onClick={this.closeNotifier}>
								<CloseIcon className={this.props.classes.iconSmall} />
							</IconButton>,
						]}
					/>
				</Snackbar>
			</form>
		);
	}
}

export default withStyles(styles)(SwitchModelCreate);
