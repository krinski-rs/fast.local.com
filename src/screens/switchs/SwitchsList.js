import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import { Link as RouterLink } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';

import { StyledTableCell, StyledTableRow } from '../../components/util/table';
import { styles } from '../../css/base.js';
import { requests } from '../../components/util/request';

class SwitchsList extends Component {
	constructor(props) {
		super(props);		
		this.state = {
			openDialog: false,
			arraySwitchs: [],
			error: false,
			message: null,
			variant: 'error',
			rowsPerPage: 15,
			total: 0,
			offset: 0
		};
		this.updateSwitchsTable = this.updateSwitchsTable.bind(this);
		this.list = this.list.bind(this);
		this.handleChangePage = this.handleChangePage.bind(this);
		this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
	}
	
	componentDidMount() {
	    this.list();
	}

	handleChangePage(event, newPage) {
		this.list(newPage, this.state.rowsPerPage);
	}
	
	handleChangeRowsPerPage(event) {
		this.list(this.state.offset, parseInt(event.target.value, 10));
	}
	
	list(offset = 0, limit = 15){
	    requests(null, "GET", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://fast.api.local.com/api/switchs/?offset="+offset+"&limit="+limit, this.updateSwitchsTable);
	}
	
	updateSwitchsTable(arraySwitchs){
		this.setState(prevState => ({
			arraySwitchs: ((arraySwitchs.data.length > 0) ? arraySwitchs.data : []),
			total: arraySwitchs.total,
			offset: arraySwitchs.offset,
			rowsPerPage: arraySwitchs.limit
		}));
	}

	render() {
		const fixedHeightPaper = clsx(this.props.classes.paper, this.props.classes.fixedHeight);
		return (
			<Grid container spacing={3}>
        		<Grid item xs={12} md={12} lg={12}>
        			<Paper className={fixedHeightPaper}>
	        	        <Table className={this.props.classes.table} size="small">
	        	        	<TableHead>
	        	        		<TableRow>
	        	        			<StyledTableCell align="right">ID</StyledTableCell>
	        	        			<StyledTableCell align="right">Name</StyledTableCell>
	        	        			<StyledTableCell align="right">Modelo</StyledTableCell>
	        	        			<StyledTableCell align="right">POP</StyledTableCell>
	        	        			<StyledTableCell align="right">VLan</StyledTableCell>
	        	        			<StyledTableCell align="right">Active</StyledTableCell>
	        	        			<StyledTableCell align="right">Created At</StyledTableCell>
	        	        			<StyledTableCell align="right">Actions</StyledTableCell>
	        	        		</TableRow>
	        	        	</TableHead>
	        	        	<TableBody>
	        	        	{
	        	    			this.state.arraySwitchs.map((obj, idx) => {
	        	    				let date = new Date(obj.createdAt);
	        	            		return (
	        	            			<StyledTableRow key={idx}>
			        	        			<StyledTableCell align="right">{obj.id}</StyledTableCell>
			        	        			<StyledTableCell align="right">{obj.name}</StyledTableCell>
			        	        			<StyledTableCell align="right">{ obj.switchModel ? obj.switchModel.brand+" - " + obj.switchModel.name : "" }</StyledTableCell>
			        	        			<StyledTableCell align="right">{ obj.pop ? obj.pop.name : "" }</StyledTableCell>
			        	        			<StyledTableCell align="right">{ obj.vlan ? obj.vlan.tagId : "" }</StyledTableCell>
			        	        			<StyledTableCell align="right">{obj.active?"Yes":"No"}</StyledTableCell>
			        	        			<StyledTableCell align="right">{date.toLocaleDateString()}</StyledTableCell>
			        	        			<StyledTableCell align="right">
			        	        				<RouterLink to={"/switchs/" + obj.id} style={{color: "black"}}>
					    							<SvgIcon titleAccess="View" className={this.props.classes.iconHover}>
					    								<path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
					    							</SvgIcon>
				    							</RouterLink>
				    							<SvgIcon titleAccess="Edit" className={this.props.classes.iconHover}>
				    								<path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
				    							</SvgIcon>
				    							<SvgIcon titleAccess="Disable" className={this.props.classes.iconHover}>
				    								<path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/>
				    							</SvgIcon>
				    							<SvgIcon titleAccess="Remove" className={this.props.classes.iconHover}>
				    								<path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
				    							</SvgIcon>
			        	        			</StyledTableCell>
			        	        		</StyledTableRow>
			        	        	)
	        	            	})
	        	        	}
	        	        	</TableBody>
	        	            <TableFooter>
	        	            	<TableRow>
	        	            		<TablePagination
	        	            			rowsPerPageOptions={[15,50,100]}
	        	            			colSpan={8}
	        	            			count={this.state.total}
	        	            			rowsPerPage={this.state.rowsPerPage}
	        	            			page={this.state.offset}
	        	            			labelRowsPerPage={'Limit'}
	        	            			SelectProps={{
	        	            				inputProps: { 'aria-label': 'Limit' },
	        	            				native: true,
	        	            			}}
	        	            			onChangePage={this.handleChangePage}
	        	            			onChangeRowsPerPage={this.handleChangeRowsPerPage}
	        	            		/>
	        	            	</TableRow>
	        	        	</TableFooter>
	        	        </Table>
        			</Paper>
        		</Grid>
        	</Grid>
		);
	}
}

export default withStyles(styles)(SwitchsList);
