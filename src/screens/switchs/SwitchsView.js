import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import SvgIcon from '@material-ui/core/SvgIcon';
//import IconButton from '@material-ui/core/IconButton';
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
			    		<Grid item xs={12} md={4}>
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
			    		<Grid item xs={12} md={4}>
				    		<TextField
			            		margin="dense"
					            id="password"
					            name="password"
					            label="Password"
					            type="password"
					            fullWidth
					            disabled
				    			variant="outlined"
				    			value={ this.state.objSwitch !== null ? this.state.objSwitch.password !== null ? this.state.objSwitch.password : "" : ""}
					        />
				        </Grid>
			    		<Grid item xs={12} md={4}>
				    		<TextField
			            		margin="dense"
					            id="community"
					            name="community"
					            label="community"
					            type="text"
					            fullWidth
					            disabled
				    			variant="outlined"
				    			value={ this.state.objSwitch !== null ? this.state.objSwitch.community !== null ? this.state.objSwitch.community : "" : ""}
					        />
				        </Grid>
			    		<Grid item xs={12} md={4}>
				    		<TextField
			            		margin="dense"
					            id="status"
					            name="status"
					            label="Status"
					            type="text"
					            fullWidth
					            disabled
				    			variant="outlined"
				    			value={ this.state.objSwitch !== null ? this.state.objSwitch.active === true ? "Enabled" : "disabled" : ""}
					        />
				        </Grid>
			    		<Grid item xs={12} md={4}>
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
			    		<Grid item xs={12} md={4}>
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
			    		{/*<Grid item xs={12} md={12}>
							<IconButton key="status" aria-label="Status" color="primary">
								<SvgIcon titleAccess="Status Porta">
									<path d="M12,4C15.64,4 18.67,6.59 19.35,10.04C21.95,10.22 24,12.36 24,15A5,5 0 0,1 19,20H6A6,6 0 0,1 0,14C0,10.91 2.34,8.36 5.35,8.04C6.6,5.64 9.11,4 12,4M7.5,9.69C6.06,11.5 6.2,14.06 7.82,15.68C8.66,16.5 9.81,17 11,17V18.86L13.83,16.04L11,13.21V15C10.34,15 9.7,14.74 9.23,14.27C8.39,13.43 8.26,12.11 8.92,11.12L7.5,9.69M9.17,8.97L10.62,10.42L12,11.79V10C12.66,10 13.3,10.26 13.77,10.73C14.61,11.57 14.74,12.89 14.08,13.88L15.5,15.31C16.94,13.5 16.8,10.94 15.18,9.32C14.34,8.5 13.19,8 12,8V6.14L9.17,8.97Z"/>
								</SvgIcon>
							</IconButton>
							<IconButton key="vlan" aria-label="Vlan" color="primary">
								<SvgIcon titleAccess="Status Vlan">
									<path d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M3,13V18L3,20H10V18H5V13H3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M14,15H20V19H14V15Z"/>
								</SvgIcon>
							</IconButton>
				        </Grid>*/}
			    		<Grid item xs={12} md={12}>
		        	        <Table className={this.props.classes.table} size="small">
		        	        	<TableHead>
	        	        			<TableRow>
	        	        				<StyledTableCell  colSpan={7} align="center">Ports</StyledTableCell>
		        	        		</TableRow>
		        	        		<TableRow>
		        	        			<StyledTableCell align="right">Port</StyledTableCell>
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
				        	        			<StyledTableCell align="right">{ obj.type+ ("00"+obj.numbering).slice(-2) }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.destiny ? obj.destiny : "-" }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.adminStatus ? obj.adminStatus : "-" }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.operStatus ? obj.operStatus : "-" }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.autoNeg !== null ? obj.autoNeg ? "ACTIVE" : "-" : "-" }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.speed ? obj.speed : "-" }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.duplex ? obj.duplex : "-" }</StyledTableCell>
				        	        		</StyledTableRow>
				        	        	)
		        	            	}) : <StyledTableRow key={"port_0"} colSpan={8}><StyledTableCell align="right">&nbsp;</StyledTableCell></StyledTableRow>
		        	        	}
		        	        	</TableBody>
		        	        </Table>
				        </Grid>
			    		<Grid item xs={12} md={12}>
		        	        <Table className={this.props.classes.table} size="small">
		        	        	<TableHead>
	        	        			<TableRow>
	        	        				<StyledTableCell  colSpan={7} align="center">Vlans</StyledTableCell>
		        	        		</TableRow>
		        	        		<TableRow>
		        	        			<StyledTableCell align="right">Port</StyledTableCell>
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
				        	        			<StyledTableCell align="right">{ obj.type+ ("00"+obj.numbering).slice(-2) }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.destiny ? obj.destiny : "-" }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.adminStatus ? obj.adminStatus : "-" }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.operStatus ? obj.operStatus : "-" }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.autoNeg !== null ? obj.autoNeg ? "ACTIVE" : "-" : "-" }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.speed ? obj.speed : "-" }</StyledTableCell>
				        	        			<StyledTableCell align="right">{ obj.duplex ? obj.duplex : "-" }</StyledTableCell>
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
