import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

class Footer extends Component {	
	render() {
		const date = new Date();
		return (
			<Box mx="auto" bgcolor="background.paper">
				<Typography variant="body2" color="textSecondary" align="center">
					{'Copyright © '+date.getFullYear()+' All rights reserved  '}
					<Link color="inherit" href="http://www.vogeltelecom.com" rel="noopener" target="_blank">
						Vogel Telecom
					</Link>
					{' team.'}
				</Typography>
			</Box>
		);
	}
}

export default Footer;
