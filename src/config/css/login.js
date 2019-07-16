
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Close';

import { amber, green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const variantIcon = {
	success: CheckCircleIcon,
	warning: WarningIcon,
	error: ErrorIcon,
	info: InfoIcon,
	close: CloseIcon,
};

const theme = createMuiTheme({
	  palette: {
	    type: 'dark',
	  },
	});

export const useStyleLogin1 = {
	success: {
		backgroundColor: green[600],
	},
	error: {
		backgroundColor: theme.palette.error.dark,
	},
	info: {
		backgroundColor: theme.palette.primary.main,
	},
	warning: {
		backgroundColor: amber[700],
	},
	icon: {
		fontSize: 20,
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing(1),
	},
	message: {
		display: 'flex',
		alignItems: 'center',
	},
};

export const useStyleLogin2 = {
	margin: {
		margin: theme.spacing(1),
	},
};
