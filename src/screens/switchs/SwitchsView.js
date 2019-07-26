import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { requests } from '../../components/util/request';
import { styles } from '../../css/base.js';
import { StyledTableCell, StyledTableRow } from '../../components/util/table';

class SwitchsView extends Component {
	constructor(props) {
		super(props);		
		this.state = {
			objSwitch: null,
		};
		this.updateSwitch = this.updateSwitch.bind(this);
	}
	
	componentDidMount() {
	    this.getSwitch();
	}
	
	getSwitch(){
	    requests(null, "GET", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://fast.api.local.com/api/switchs/"+this.props.computedMatch.params.id, this.updateSwitch);
	}

	updateSwitch(objSwitch){
		this.setState(prevState => ({
			objSwitch: (objSwitch.id ? objSwitch : null)
		}));
	}

	render() {
		const fixedHeightPaper = clsx(this.props.classes.paper, this.props.classes.fixedHeight);
		console.log(this.state.objSwitch);
		return (
	    		<Paper className={fixedHeightPaper}>
					<Grid container spacing={3} alignItems="center" justify="center">
			    		<Grid item xs={12} md={3}>
				    		<TextField
					            margin="dense"
					            id="name"
					            name="name"
					            label="Name"
					            type="text"
					            fullWidth
					            disabled
				    			variant="outlined"
				    			value={ this.state.objSwitch !== null ? this.state.objSwitch.name : ""}
					        />
					    </Grid>
				    	<Grid item xs={12} md={3}>
					        <TextField
								id="pop"
								name="pop"
						        margin="dense"
								fullWidth
					            disabled
								label="Select Pop"
								variant="outlined"
					    		value={ this.state.objSwitch !== null ? this.state.objSwitch.pop !== null ? this.state.objSwitch.pop.name: "" : ""}
							>
            					<option key={"pop_0"} value={ "" }>{ "" }</option>
				    		</TextField>
				        </Grid>
			    		<Grid item xs={12} md={3}>
					        <TextField
								id="switch_model"
								name="switch_model"
							    margin="dense"
								fullWidth
								disabled
								label="Model"
								variant="outlined"
					    		value={ this.state.objSwitch !== null ? this.state.objSwitch.switchModel !== null ? this.state.objSwitch.switchModel.brand+" - "+this.state.objSwitch.switchModel.name: "" : ""}
							>
				    		</TextField>
				        </Grid>
			    		<Grid item xs={12} md={3}>
					        <TextField
								id="vlan"
								name="vlan"
							    margin="dense"
								fullWidth
								disabled
								label="Admin Vlan"
								variant="outlined"
					    		value={ this.state.objSwitch !== null ? this.state.objSwitch.vlan !== null ? this.state.objSwitch.vlan.tagId : "" : ""}
							/>
				        </Grid>
			    		<Grid item xs={12} md={6}>
				    		<TextField
			            		margin="dense"
					            id="username"
					            name="username"
					            label="Username"
					            type="text"
					            fullWidth
					            disabled
				    			variant="outlined"
				    			value={ this.state.objSwitch !== null ? this.state.objSwitch.username !== null ? this.state.objSwitch.username : "" : ""}
					        />
				        </Grid>
			    		<Grid item xs={12} md={6}>
				    		<TextField
			            		margin="dense"
					            id="password"
					            name="password"
					            label="Password"
					            type="text"
					            fullWidth
					            disabled
				    			variant="outlined"
				    			value={ this.state.objSwitch !== null ? this.state.objSwitch.password !== null ? this.state.objSwitch.password : "" : ""}
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
					            disabled
				    			variant="outlined"
				    			value={ this.state.objSwitch !== null ? this.state.objSwitch.addressIpv4 !== null ? this.state.objSwitch.addressIpv4 : "" : ""}
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
					            disabled
				    			variant="outlined"
				    			value={ this.state.objSwitch !== null ? this.state.objSwitch.addressIpv6 !== null ? this.state.objSwitch.addressIpv6 : "" : ""}
					        />
				        </Grid>
			    		<Grid item xs={12} md={12}>
		        	        <Table className={this.props.classes.table} size="small">
		        	        	<TableHead>
		        	        		<TableRow>
		        	        			<StyledTableCell align="right">ID</StyledTableCell>
		        	        			<StyledTableCell align="right">Name</StyledTableCell>
		        	        			<StyledTableCell align="right">Description</StyledTableCell>
		        	        			<StyledTableCell align="right">Admin Status</StyledTableCell>
		        	        			<StyledTableCell align="right">Oper Status</StyledTableCell>
		        	        			<StyledTableCell align="right">Auto Negotiation</StyledTableCell>
		        	        			<StyledTableCell align="right">Speed</StyledTableCell>
		        	        			<StyledTableCell align="right">Duplex</StyledTableCell>
		        	        		</TableRow>
		        	        	</TableHead>
		        	        	<TableBody>
		        	        	{
		        	        		this.state.objSwitch ? this.state.objSwitch.port.map((obj, idx) => {
		        	            		return (
		        	            			<StyledTableRow key={"port_"+idx}>
				        	        			<StyledTableCell align="right">{ ("000000"+obj.id).slice(-6) }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.type+ ("00"+obj.numbering).slice(-2) }</StyledTableCell>
				        	        			<StyledTableCell align="right">&nbsp;</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.adminStatus ? obj.adminStatus : " " }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.operStatus ? obj.operStatus : " " }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.autoNeg !== null ? obj.autoNeg ? "ACTIVE" : "" : " " }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.speed ? obj.speed : " " }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.duplex ? obj.duplex : " " }</StyledTableCell>
				        	        		</StyledTableRow>
				        	        	)
		        	            	}) : <StyledTableRow key={"port_0"} colSpan={8}><StyledTableCell align="right">&nbsp;</StyledTableCell></StyledTableRow>
		        	        	}
		        	        	</TableBody>
		        	        </Table>
				        </Grid>
			        </Grid>
				</Paper>
		);
	}
}

export default withStyles(styles)(SwitchsView);
