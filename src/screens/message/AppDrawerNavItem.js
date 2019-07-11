import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
//import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
//import { red } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';

const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const theme = createMuiTheme({
	palette: { 
		background: {
			"default": "#000000"
		}
	}
});


const useStyles = {
	item: {
		display: 'block',
		paddingTop: 0,
		paddingBottom: 0,
	},
	itemLeaf: {
		display: 'flex',
		paddingTop: 0,
		paddingBottom: 0,
	},
	button: {
		letterSpacing: 0,
		justifyContent: 'flex-start',
		textTransform: 'none',
		width: '100%',
	},
	buttonLeaf: {
		letterSpacing: 0,
		justifyContent: 'flex-start',
		textTransform: 'none',
		width: '100%',
		float: "left",
		fontWeight: theme.typography.fontWeightRegular,
		'&.depth-0': {
			fontWeight: theme.typography.fontWeightMedium,
		},
	},
	active: {
		color: theme.palette.primary.main,
		fontWeight: theme.typography.fontWeightMedium,
	},
};

class AppDrawerNavItem  extends React.Component
{
	constructor(props) {
		super(props);		
		this.state = {
			open: false
		};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
		console.log('click');
		console.log(event.target);
		event.preventDefault();
		this.setState(prevState => ({
			open: !prevState.open
		}));
	}
	
	render() {
		
		const style = {
			paddingLeft: 8 * (3 + 2 * this.props.depth),
		};

		if (this.props.href) {
			return (
				<Link component={AdapterLink} color="inherit" to={this.props.href} className={clsx(this.props.classes.buttonLeaf, `depth-${this.props.depth}`)}>
					<ListItem button style={style}>
					{
						this.props.path ? (
								<ListItemIcon>
								<SvgIcon titleAccess={this.props.title}>
									<path d={this.props.path}/>
								</SvgIcon>
							</ListItemIcon>

						) : null
					}
						<ListItemText primary={this.props.title} />
					</ListItem>
				</Link>
			);
		} else {
			return (
				<ListItem className={this.props.classes.item} disableGutters >
					<ListItem selected={this.state.open}
						button
						classes={{
							root: this.props.classes.button,
						}}
						style={style}
						onClick={this.handleClick}
					>
						<ListItemIcon>
							<SvgIcon titleAccess={this.props.title}>
								<path d={this.props.path}/>
							</SvgIcon>
						</ListItemIcon>
						<ListItemText primary={this.props.title} />
					</ListItem>
					<Collapse in={this.state.open} timeout="auto" unmountOnExit>
						{this.props.children}
					</Collapse>
				</ListItem>
			);
		}
	}
}

AppDrawerNavItem.propTypes = {
	children: PropTypes.node,
	depth: PropTypes.number.isRequired,
	href: PropTypes.string,
	onClick: PropTypes.func,
	openImmediately: PropTypes.bool,
	title: PropTypes.string.isRequired,
	topLevel: PropTypes.bool,
};
/*



function AppDrawerNavItem(props) {
	const {
		children,
		depth,
		path,
		href,
		onClick,
		openImmediately = false,
		topLevel = false,
		title,
		...other
	} = props;
	const classes = useStyles();
	//  const classes2 = useStyles2();
	const [open, setOpen] = React.useState(openImmediately);
	
	const handleClick = () => {
		console.log('click');
		setOpen(oldOpen => !oldOpen);
	};
	
	const style = {
		paddingLeft: 8 * (3 + 2 * depth),
	};
	
	if (href) {
		return (
			<Link component={AdapterLink} color="inherit" to={href} className={clsx(classes.buttonLeaf, `depth-${depth}`)}>
				<ListItem button style={style}>
				{
					path ? (
							<ListItemIcon>
							<SvgIcon titleAccess={title}>
								<path d={path}/>
							</SvgIcon>
						</ListItemIcon>

					) : null
				}
					<ListItemText primary={title} />
				</ListItem>
			</Link>
		);
	}
	
	return (
		<ListItem className={classes.item} disableGutters {...other} onClick={handleClick}>
			<ListItem selected={open}
				button
				classes={{
					root: classes.button,
				}}
				style={style}
			>
				<ListItemIcon>
					<SvgIcon titleAccess={title}>
						<path d={path}/>
					</SvgIcon>
				</ListItemIcon>
				<ListItemText primary={title} />
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				{children}
			</Collapse>
		</ListItem>
	);
}

AppDrawerNavItem.propTypes = {
  children: PropTypes.node,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  openImmediately: PropTypes.bool,
  title: PropTypes.string.isRequired,
  topLevel: PropTypes.bool,
};
*/
export default  withStyles(useStyles)(AppDrawerNavItem);
