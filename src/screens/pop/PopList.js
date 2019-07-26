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

import { StyledTableCell, StyledTableRow } from '../../components/util/table';
import { styles } from '../../css/base.js';
import { requests } from '../../components/util/request';

class PopList extends Component {
	constructor(props) {
		super(props);		
		this.state = {
			openDialog: false,
			arrayPop: [],
			error: false,
			message: null,
			variant: 'error',
			rowsPerPage: 15,
			total: 0,
			offset: 0
		};
		this.updatePopTable = this.updatePopTable.bind(this);
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
    	}, "http://fast.api.local.com/api/pop/?offset="+offset+"&limit="+limit, this.updatePopTable);
	}
	
	updatePopTable(arrayPop){
		this.setState(prevState => ({
			arrayPop: ((arrayPop.data.length > 0) ? arrayPop.data : []),
			total: arrayPop.total,
			offset: arrayPop.offset,
			rowsPerPage: arrayPop.limit
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
	        	        			<StyledTableCell align="right">Active</StyledTableCell>
	        	        			<StyledTableCell align="right">Created At</StyledTableCell>
	        	        			<StyledTableCell align="right">Actions</StyledTableCell>
	        	        		</TableRow>
	        	        	</TableHead>
	        	        	<TableBody>
	        	        	{
	        	    			this.state.arrayPop.map(function(obj, idx){
	        	    				let date = new Date(obj.createdAt);
	        	            		return (
	        	            			<StyledTableRow key={idx}>
			        	        			<StyledTableCell align="right">{obj.id}</StyledTableCell>
			        	        			<StyledTableCell align="right">{obj.name}</StyledTableCell>
			        	        			<StyledTableCell align="right">{obj.active?"Yes":"No"}</StyledTableCell>
			        	        			<StyledTableCell align="right">{date.toLocaleDateString()}</StyledTableCell>
			        	        			<StyledTableCell align="right">&nbsp;</StyledTableCell>
			        	        		</StyledTableRow>
			        	        	)
	        	            	})
	        	        	}
	        	        	</TableBody>
	        	            <TableFooter>
	        	            	<TableRow>
	        	            		<TablePagination
	        	            			rowsPerPageOptions={[15,50,100]}
	        	            			colSpan={6}
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

export default withStyles(styles)(PopList);
