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

class SwitchsCreate extends Component {
	constructor(props) {
		super(props);		
		this.state = {
			open: false,
			mensagem: '',
			error: false,
			arrayPop: [],
			arraySwitchModel: [],
			arrayVlan: [],
		};
		this.save = this.save.bind(this);
		this.closeNotifier = this.closeNotifier.bind(this);
		this.updatePops = this.updatePops.bind(this);
		this.updateModels = this.updateModels.bind(this);
		this.updateVlans = this.updateVlans.bind(this);
	}
	
	componentDidMount() {
	    this.getPops();
	    this.getModels();
	    this.getVlans();
	}
	
	closeNotifier(){
		this.setState(prevState => ({
			open: false,
			error: false,
			mensagem: '',
		}));
	}
	
	getPops(){
	    requests(null, "GET", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://fast.api.local.com/api/pop/?offset=0&limit=1500", this.updatePops);
	}
	
	updatePops(arrayPop){
		this.setState(prevState => ({
			arrayPop: (arrayPop.data && (arrayPop.data.length > 0) ? arrayPop.data : [])
		}));
	}
	
	getModels(){
	    requests(null, "GET", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://fast.api.local.com/api/switchmodel/?offset=0&limit=1500", this.updateModels);
	}

	updateModels(arraySwitchModel){
		this.setState(prevState => ({
			arraySwitchModel: ((arraySwitchModel.data.length > 0) ? arraySwitchModel.data : [])
		}));
	}
	
	getVlans(){
	    requests(null, "GET", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://fast.api.local.com/api/vlan/?offset=0&limit=15000", this.updateVlans);
	}

	updateVlans(arrayVlan){
		this.setState(prevState => ({
			arrayVlan: ((arrayVlan.data.length > 0) ? arrayVlan.data : [])
		}));
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
    	}, "http://fast.api.local.com/api/switchs/", null);
	    retorno.then((obj)=>{
		    if(obj.ok){
		    	obj.json().then((json)=>{
    				this.setState(prevState => ({
    					error: false,
    					open:true,
    					mensagem: "Switchs id '"+json.id+"' cadastrado com sucesso!!"
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
		    <form noValidate autoComplete="off" onSubmit={this.save} name="switchForm">			    	
	    		<Paper className={fixedHeightPaper}>
					<Grid container spacing={3} alignItems="center" justify="center">
			    		<Grid item xs={12} md={3}>
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
				    	<Grid item xs={12} md={3}>
					        <TextField
								id="pop"
								name="pop"
						        margin="dense"
								select
								fullWidth
					            required
								label="Select Pop"
								variant="outlined"
								SelectProps={{
									native: true,
								}}
							>
            					<option key={"pop_0"} value={0}>{ '-- Selecione --' }</option>
	        	        	{
	        	    			this.state.arrayPop.map(function(obj, idx){
	        	            		return (

	        	            				<option key={"pop_"+(idx+1)} value={obj.id}>{ obj.name }</option>
			        	        	)
	        	            	})
	        	        	}
				    		</TextField>
				        </Grid>
			    		<Grid item xs={12} md={3}>
					        <TextField
								id="switch_model"
								name="switch_model"
							    margin="dense"
								select
								fullWidth
					            required
								label="Select Model"
								variant="outlined"
								SelectProps={{
									native: true,
								}}
							>
	        	        	{
	        	    			this.state.arraySwitchModel.map(function(obj, idx){
	        	            		return (
	        	            			<option key={"model_"+idx} value={obj.id}>{ obj.brand + "-" +obj.name }</option>
			        	        	)
	        	            	})
	        	        	}
				    		</TextField>
				        </Grid>
			    		<Grid item xs={12} md={3}>
					        <TextField
								id="vlan"
								name="vlan"
							    margin="dense"
								select
								fullWidth
					            required
								label="Admin Vlan"
								variant="outlined"
								SelectProps={{
									native: true,
								}}
							>
	    						<option key={"vlan_0"} value={0}>{ '-- Selecione --' }</option>
	    					{
	        	    			this.state.arrayVlan.map(function(obj, idx){
	        	            		return (
	        	            			<option key={"vlan_"+idx} value={obj.id}>{ obj.tagId }</option>
			        	        	)
	        	            	})
	        	        	}
				    		</TextField>
				        </Grid>
			    		<Grid item xs={12} md={4}>
				    		<TextField
			            		margin="dense"
					            id="username"
					            name="username"
					            label="Username"
					            type="text"
					            fullWidth
				    			variant="outlined"
					        />
				        </Grid>
			    		<Grid item xs={12} md={4}>
				    		<TextField
			            		margin="dense"
					            id="password"
					            name="password"
					            label="Password"
					            type="password"
					            fullWidth
				    			variant="outlined"
					        />
				        </Grid>
			    		<Grid item xs={12} md={4}>
				    		<TextField
			            		margin="dense"
					            id="community"
					            name="community"
					            label="Community"
					            type="text"
					            fullWidth
				    			variant="outlined"
					        />
				        </Grid>
			    		<Grid item xs={12} md={6}>
				    		<TextField
			            		margin="dense"
					            id="address_ipv4"
					            name="address_ipv4"
					            label="Admin IPV4 Address"
					            type="text"
					            fullWidth
				    			variant="outlined"
					        />
				        </Grid>
			    		<Grid item xs={12} md={6}>
				    		<TextField
				            	margin="dense"
					            id="address_ipv6"
					            name="address_ipv6"
					            label="Admin IPV6 Address"
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

export default withStyles(styles)(SwitchsCreate);
