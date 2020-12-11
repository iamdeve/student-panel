import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SideMenu from './SideMenu';

import SvgIcon from '../components/SvgIcon';
import MenuIcon from '../assets/menu.svg';
import NotificationIcon from '../assets/nav_icon_1.svg';
import MessageIcon from '../assets/nav_icon_2.svg';
import MailIcon from '../assets/nav_icon_3.svg';
import CalendarIcon from '../assets/nav_icon_4.svg';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		position:'absolute'
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		background: '#192D3E',
		color: '#fff',
		overflow: 'hidden',
		position: 'relative',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-start',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	MenuItem: {
		'& button': {
			marginLeft: '.2rem !important',
		},
	},
}));

export default function PersistentDrawerLeft(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const handleDrawer = () => {
		setOpen(!open);
	};
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				// position='fixed'
				color='default'
				style={{ background: '#fff' }}
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}>
				<Toolbar>
					<IconButton color='inherit' aria-label='open drawer' onClick={handleDrawer} edge='start' className={clsx(classes.menuButton)}>
						<SvgIcon icon={MenuIcon} />
					</IconButton>
					<div style={{ flexGrow: 1 }}></div>
					<div className={classes.MenuItem}>
						<IconButton color='inherit' aria-label='open drawer' edge='start'>
							<SvgIcon icon={NotificationIcon} iconStyle={{ height: '25px' }} />
						</IconButton>
						<IconButton color='inherit' aria-label='open drawer' edge='start'>
							<SvgIcon icon={MessageIcon} />
						</IconButton>
						<IconButton color='inherit' aria-label='open drawer' edge='start'>
							<SvgIcon icon={MailIcon} />
						</IconButton>
						<IconButton color='inherit' aria-label='open drawer' edge='start'>
							<SvgIcon icon={CalendarIcon} />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}>
				<div className={classes.drawerHeader}>
					<h3>INDEX.</h3>
				</div>
				<SideMenu />
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}>
				<div className={classes.drawerHeader} />
				{props.children}
			</main>
		</div>
	);
}
