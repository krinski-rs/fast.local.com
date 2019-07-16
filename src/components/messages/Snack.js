import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const styles= {
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

class Snack extends React.Component
{
	render() {
		const variantIcon = {
		  success: CheckCircleIcon,
		  warning: WarningIcon,
		  error: ErrorIcon,
		  info: InfoIcon,
		};
		const Icon = variantIcon[this.props.variant];
		return (
			<SnackbarContent
				className={clsx(this.props.classes[this.props.variant], this.props.classes.margin)}
				aria-describedby="client-snackbar"
				message={
					<span id="client-snackbar" className={this.props.classes.message}>
						<Icon className={clsx(this.props.classes.icon, this.props.classes.iconVariant)} />
						{this.props.message}
					</span>
				}
				action={
					[
						<IconButton key="close" aria-label="Close" color="inherit" onClick={this.props.onClose}>
							<CloseIcon className={this.props.classes.icon} />
						</IconButton>,
					]
				}
				{...this.props.other}
			/>
		);
	}
}

Snack.propTypes = {
	className: PropTypes.string,
	message: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
	variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
	anchorOrigin: PropTypes.object,
	autoHideDuration: PropTypes.number,
	other: PropTypes.node
};

Snack.defaultProps = {
	variant: 'success',
	anchorOrigin: {
		vertical: 'top',
		horizontal: 'center',
	},
	autoHideDuration: 6000,
};

export default withStyles(styles)(Snack);

