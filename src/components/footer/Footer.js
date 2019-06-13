import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Footer extends React.Component {
	render() {
		const date = new Date();
		return (
			<Typography variant="body2" color="textSecondary" align="center">
				{'Copyright © '+date.getFullYear()+' All rights reserved  '}
				<Link color="inherit" href="http://www.vogeltelecom.com" rel="noopener" target="_blank">
					Vogel Telecom
				</Link>
				{' team.'}
			</Typography>
		);
	}
}
export default Footer;
