import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import { login, me } from '../../components/util/auth';
import { useStyleLogin1, useStyleLogin2, variantIcon } from '../../config/css/login';
import history from '../../components/util/history';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			open: false,
			mensagem: "",
		}
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.closeNotifier = this.closeNotifier.bind(this);
	}
	
	componentDidMount(){
		var retorno = me(this.props.update);
		retorno.then(obj => {
			if(!obj.auth || !obj.user || obj.auth.error || !obj.user.logged){
				this.setState(prevState => ({
					open: obj.auth.error,
					mensagem: obj.auth.msg,
				}));
			}
			return obj;
		}).then(obj => {
			if(!obj.auth.error && obj.user.logged){
				this.setState(prevState => ({
					open: false,
					mensagem: '',
				}));
				history.push('/');
			}
		});
	}
	
	closeNotifier(){
		this.setState(prevState => ({
			open: false,
			mensagem: '',
		}));
	}
	
	handleSubmit(event) {
		var retorno = login(event, this.props.update);
		retorno.then(obj => {
			if(obj.auth.error || !obj.user.logged){
				this.setState(prevState => ({
					open: obj.auth.error,
					mensagem: obj.auth.msg,
				}));
			}
			return obj;
		}).then(obj => {
			if(!obj.auth.error && obj.user.logged){
				this.setState(prevState => ({
					open: false,
					mensagem: '',
				}));
				history.push('/');
			}
		});
	}
	
	render() {
		const ErrorIcon = variantIcon['error'];
		const CloseIcon = variantIcon['close'];
		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div style={{ marginTop: 64, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
					<Avatar style={{margin: 8, backgroundColor: 'red'}}>
						<LockOutlinedIcon />
			        </Avatar>
			        <Typography component="h1" variant="h5">
			        	Login
			        </Typography>
			        <form style={{
					    width: '100%', // Fix IE 11 issue.
					    marginTop: 1,
					  }} noValidate onSubmit={this.handleSubmit}>
			        	<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Email Address"
							name="username"
							autoComplete="username"
						    autoFocus
					    />
					    <TextField
						    variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							style={{marginTop: 24, marginRight: 0, marginBottom: 16}}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
			        </form>
				</div>
				<Box mt={5}>
					<Typography variant="body2" color="textSecondary" align="center">
						{'Built with love by the '}
						<Link color="inherit" href="#">
							Material-UI
						</Link>
						{' team.'}
					</Typography>
				</Box>
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
						className={clsx(this.props.classes["error"], this.props.classes.margin)}
						aria-describedby="client-snackbar"
						message={
							<span id="client-snackbar" className={this.props.classes.message}>
								<ErrorIcon className={clsx(this.props.classes.icon, this.props.classes.iconVariant)} />
								{this.state.mensagem}
							</span>
						}
						action={[
							<IconButton key="close" aria-label="Close" color="inherit" onClick={this.closeNotifier}>
								<CloseIcon className={this.props.classes.icon} />
							</IconButton>,
						]}
					/>
				</Snackbar>
			</Container>
    	);
	}
}

export default withStyles(useStyleLogin1, useStyleLogin2)(Login);
