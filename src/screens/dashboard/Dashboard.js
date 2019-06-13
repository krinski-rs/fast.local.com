import React from 'react';
//import { Route, Redirect, Switch } from 'react-router-dom'
//import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//import { getCookie } from '../../components/util/auth';
import MenuBar from '../../components/menu/Menu';
import RecentsBar from '../../components/menu/Recents';
import Footer from '../../components/footer/Footer';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	  root: {
	    display: 'flex',
	  },
	  toolbar: {
	    paddingRight: 24, // keep right padding when drawer closed
	  },
	  toolbarIcon: {
	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'flex-end',
	    padding: '0 8px',
	    ...theme.mixins.toolbar,
	  },
	  appBar: {
	    zIndex: theme.zIndex.drawer + 1,
	    transition: theme.transitions.create(['width', 'margin'], {
	      easing: theme.transitions.easing.sharp,
	      duration: theme.transitions.duration.leavingScreen,
	    }),
	  },
	  appBarShift: {
	    marginLeft: drawerWidth,
	    width: `calc(100% - ${drawerWidth}px)`,
	    transition: theme.transitions.create(['width', 'margin'], {
	      easing: theme.transitions.easing.sharp,
	      duration: theme.transitions.duration.enteringScreen,
	    }),
	  },
	  menuButton: {
	    marginRight: 36,
	  },
	  menuButtonHidden: {
	    display: 'none',
	  },
	  title: {
	    flexGrow: 1,
	  },
	  drawerPaper: {
	    position: 'relative',
	    whiteSpace: 'nowrap',
	    width: drawerWidth,
	    transition: theme.transitions.create('width', {
	      easing: theme.transitions.easing.sharp,
	      duration: theme.transitions.duration.enteringScreen,
	    }),
	  },
	  drawerPaperClose: {
	    overflowX: 'hidden',
	    transition: theme.transitions.create('width', {
	      easing: theme.transitions.easing.sharp,
	      duration: theme.transitions.duration.leavingScreen,
	    }),
	    width: theme.spacing(7),
	    [theme.breakpoints.up('sm')]: {
	      width: theme.spacing(9),
	    },
	  },
	  appBarSpacer: theme.mixins.toolbar,
	  content: {
	    flexGrow: 1,
	    height: '100vh',
	    overflow: 'auto',
	  },
	  container: {
	    paddingTop: theme.spacing(4),
	    paddingBottom: theme.spacing(4),
	  },
	  paper: {
	    padding: theme.spacing(2),
	    display: 'flex',
	    overflow: 'auto',
	    flexDirection: 'column',
	  },
	  fixedHeight: {
	    height: 240,
	  },
	}));
function createData(time, amount) {
	  return { time, amount };
	}

const data1 = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

export default function Dashboard(props) {
	  const classes = useStyles();
	  const [open, setOpen] = React.useState(true);
	  const handleDrawerOpen = () => {
	    setOpen(true);
	  };
	  const handleDrawerClose = () => {
	    setOpen(false);
	  };
	  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	  
	  return (
	    <div className={classes.root}>
	      <CssBaseline />
	      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
	        <Toolbar className={classes.toolbar}>
	          <IconButton
	            edge="start"
	            color="inherit"
	            aria-label="Open drawer"
	            onClick={handleDrawerOpen}
	            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
	          >
	            <MenuIcon />
	          </IconButton>
	          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
	          	Dashboard
	          </Typography>
	          <IconButton color="inherit">
	            <Badge badgeContent={4} color="secondary">
	              <NotificationsIcon />
	            </Badge>
	          </IconButton>
	        </Toolbar>
	      </AppBar>
	      <Drawer
	        variant="permanent"
	        classes={{
	          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
	        }}
	        open={open}
	      >
	        <div className={classes.toolbarIcon}>
	          <IconButton onClick={handleDrawerClose}>
	            <ChevronLeftIcon />
	          </IconButton>
	        </div>
	        <Divider />
	        
	        
	        <MenuBar />
	        
	        
	        <Divider />

	        <RecentsBar />
	        
	        </Drawer>
	      <main className={classes.content}>
	        <div className={classes.appBarSpacer} />
	        <Container maxWidth="lg" className={classes.container}>
	          <Grid container spacing={3}>
	            {/* Chart */}
	            <Grid item xs={12} md={8} lg={9}>
	              <Paper className={fixedHeightPaper}>
	                
	              
	              
	              <React.Fragment>
	              <Typography component="h2" variant="h6" color="primary" gutterBottom>
	              {"Today"}
	            </Typography>
	              <ResponsiveContainer>
	                <LineChart
	                  data={data1}
	                  margin={{
	                    top: 16,
	                    right: 16,
	                    bottom: 0,
	                    left: 24,
	                  }}
	                >
	                  <XAxis dataKey="time" />
	                  <YAxis>
	                    <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
	                      Sales ($)
	                    </Label>
	                  </YAxis>
	                  <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
	                </LineChart>
	              </ResponsiveContainer>
	            </React.Fragment>

	              
	              
	              
	              </Paper>
	            </Grid>
	            {/* Recent Deposits */}
	            <Grid item xs={12} md={4} lg={3}>
	              <Paper className={fixedHeightPaper}>
	                
	              
	              <React.Fragment>
	              <Typography component="h2" variant="h6" color="primary" gutterBottom>
	              {"Recent Deposits"}
	            </Typography>
	              <Typography component="p" variant="h4">
	                $3,024.00
	              </Typography>
	              <Typography color="textSecondary" className={classes.depositContext}>
	                on 15 March, 2019
	              </Typography>
	              <div>
	                <Link color="primary" href="#">
	                  View balance
	                </Link>
	              </div>
	            </React.Fragment>

	              
	              
	              
	              
	              </Paper>
	            </Grid>
	            {/* Recent Orders */}
	            <Grid item xs={12}>
	              <Paper className={classes.paper}>
	                
	              
	              
	              <React.Fragment>
	              <Typography component="h2" variant="h6" color="primary" gutterBottom>
	              {"Recent Orders"}
	            </Typography>

	              <Table size="small">
	                <TableHead>
	                  <TableRow>
	                    <TableCell>Date</TableCell>
	                    <TableCell>Name</TableCell>
	                    <TableCell>Ship To</TableCell>
	                    <TableCell>Payment Method</TableCell>
	                    <TableCell align="right">Sale Amount</TableCell>
	                  </TableRow>
	                </TableHead>
	                <TableBody>
	                  {rows.map(row => (
	                    <TableRow key={row.time + "__a"}>
	                      <TableCell>{row.date}</TableCell>
	                      <TableCell>{row.name}</TableCell>
	                      <TableCell>{row.shipTo}</TableCell>
	                      <TableCell>{row.paymentMethod}</TableCell>
	                      <TableCell align="right">{row.amount}</TableCell>
	                    </TableRow>
	                  ))}
	                </TableBody>
	              </Table>
	              <div className={classes.seeMore}>
	                <Link color="primary" href="#">
	                  See more orders
	                </Link>
	              </div>
	            </React.Fragment>
	              
	              
	              
	              
	              
	              </Paper>
	            </Grid>
	          </Grid>
	        </Container>
	        <Footer />
	      </main>
	    </div>
	  );
}

