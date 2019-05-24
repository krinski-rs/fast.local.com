import React from 'react';
import { Redirect } from 'react-router-dom'
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

import CustomizedDialogs from '../message/CustomizedDialogs';

import { login, me, getCookie } from '../../components/util/auth';



function MadeWithLove() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Built with love by the '}
			<Link color="inherit" href="#">
				Material-UI
			</Link>
			{' team.'}
		</Typography>
	);
}

class Login extends React.Component {
	constructor(props){
		super(props);
	    this.handleSubmit = this.handleSubmit.bind(this);
		this.props.update({dialog:{open:false}});
	}
	
	componentDidMount() {
		if(this.props.user && this.props.user.logged && (this.props.user.cookie === getCookie())){
			this.renderRedirect();
		}else if(getCookie()){
			me(this.props.update);
		}

	}
	
	renderRedirect = () => {
		if (this.props.user.logged) {
			return <Redirect to='/home' />
		}
	}

	handleSubmit(event) {
		login(event, this.props.update);
		this.renderRedirect();
//		this.props.update({dialog:{open:true}});
		console.log(this.props);
	}
	
	render() {
		const state = this.props;
		return (
			<Container component="main" maxWidth="xs">
			{
				state.error ? <CustomizedDialogs update={ this.props.update }  appState={this.props.appState}/> : this.renderRedirect()
			}
			{
				state.error ? state.msg : this.renderRedirect()
			}
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
							autoComplete="current-password"
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
					<MadeWithLove />
				</Box>
			</Container>
    	);
	}
}

export default Login;
