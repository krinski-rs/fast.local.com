import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { styles } from '../../components/util/config';
import { getCookie, renderRedirect } from '../../components/util/auth';
import { requests } from '../../components/util/request';

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


class ListService extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			openDialog: false,
			arrayService: [],
			error: false,
			message: null,
			variant: 'error',
			rowsPerPage: 15,
			total: 0,
			offset: 0
		};
		this.updateServiceTable = this.updateServiceTable.bind(this);
		this.openDialog = this.openDialog.bind(this);
		this.save = this.save.bind(this);
		this.list = this.list.bind(this);
		this.handleChangePage = this.handleChangePage.bind(this);
		this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
	}
	
	componentDidMount() {
		if(!this.props.user || !this.props.user.logged || (this.props.user.cookie !== getCookie())){
			renderRedirect();
		}
	    this.list();
	}
	
	list(offset = 0, limit = 15){
	    requests(null, "GET", {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}, "http://fast.api.local.com/api/service/?offset="+offset+"&limit="+limit, this.updateServiceTable);
	}
	
	updateServiceTable(arrayService){
		this.setState(prevState => ({
			arrayService: ((arrayService.data.length > 0) ? arrayService.data : []),
			total: arrayService.total,
			offset: arrayService.offset,
			rowsPerPage: arrayService.limit
		}));
	}
	
	handleChangePage(event, newPage) {
		this.list(newPage, this.state.rowsPerPage);
	}
	
	handleChangeRowsPerPage(event) {
		this.list(this.state.offset, parseInt(event.target.value, 10));
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
			this.setState({message: "O campo com * não pode estar vazio."});
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
		return (
    		<Grid container spacing={3}>
        		<Grid item xs={12} md={12} lg={12}>
        			<Paper className={fixedHeightPaper}>
	        	        <Table className={this.props.classes.table} size="small">
	        	        	<TableHead>
	        	        		<TableRow>
	        	        			<StyledTableCell align="right">IasdfasdD</StyledTableCell>
	        	        			<StyledTableCell align="right">Name</StyledTableCell>
	        	        			<StyledTableCell align="right">Active</StyledTableCell>
	        	        			<StyledTableCell align="right">Created At</StyledTableCell>
	        	        			<StyledTableCell align="right">Actions</StyledTableCell>
	        	        		</TableRow>
	        	        	</TableHead>
	        	        	<TableBody>
	        	        	{
	        	    			this.state.arrayService.map(function(obj, idx){
	        	    				let date = new Date(obj.createdAt);
	        	            		return (
	        	            			<StyledTableRow key={idx}>
			        	        			<StyledTableCell align="right">{obj.id}</StyledTableCell>
			        	        			<StyledTableCell align="right">{obj.name}</StyledTableCell>
			        	        			<StyledTableCell align="right">{obj.active?"Yes":"No"}</StyledTableCell>
			        	        			<StyledTableCell align="right">{date.toLocaleDateString()}</StyledTableCell>
			        	        			<StyledTableCell align="right">
			        	        			
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
	        	            			colSpan={5}
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

export default withStyles(styles)(ListService);
