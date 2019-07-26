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

class ServiceCreate extends Component {
	constructor(props) {
		super(props);		
		this.state = {
			open: false,
			mensagem: '',
			error: false,
		};
		this.save = this.save.bind(this);
		this.closeNotifier = this.closeNotifier.bind(this);
	}
	
	closeNotifier(){
		this.setState(prevState => ({
			open: false,
			error: false,
			mensagem: '',
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
    	}, "http://fast.api.local.com/api/service/", null);
	    retorno.then((obj)=>{
		    if(obj.ok){
		    	obj.json().then((json)=>{
    				this.setState(prevState => ({
    					error: false,
    					open:true,
    					mensagem: "Service id '"+json.id+"' cadastrado com sucesso!!"
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
					<Grid container spacing={3} alignItems="center" justify="center">
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

export default withStyles(styles)(ServiceCreate);
