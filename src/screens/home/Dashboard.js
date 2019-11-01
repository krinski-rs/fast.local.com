import React from "react";
import { withStyles } from '@material-ui/core/styles';

import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { useStyles } from "../../assets/jss/base";

class Dashboard extends React.Component
{
	render() {
        const fixedHeightPaper = clsx(this.props.classes.paper, this.props.classes.fixedHeight);
		return (
			<Grid container spacing={3}>
				<Grid item xs={12} md={8} lg={9}>
					<Paper className={fixedHeightPaper}>
					</Paper>
				</Grid>
				<Grid item xs={12} md={4} lg={3}>
					<Paper className={fixedHeightPaper}>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper className={this.props.classes.paper}>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object
};

export default withStyles(useStyles)(Dashboard);
