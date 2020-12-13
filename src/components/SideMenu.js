import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';

import Profile from '../assets/profile.png';
import DashboardIcon from '../assets/icons/Dashboard';
import ProfileIcon from '../assets/icons/ProfileIcon';
import ChatIcon from '../assets/icons/ChatIcon';
import CalendarIcon from '../assets/icons/CalendarIcon';
import NoticeBoardIcon from '../assets/icons/NoticeBoardIcon';
import ClassRoutineIcon from '../assets/icons/ClassRoutineIcon';
import LiveClassIcon from '../assets/icons/LiveClassIcon';
import AttendanceIcon from '../assets/icons/AttendanceIcon';
import AssesmentsIcon from '../assets/icons/AssesmentsIcon';
import AssignmentsIcon from '../assets/icons/AssignmentsIcon';
import ResultsIcon from '../assets/icons/ResultsIcon';
import CourseIcon from '../assets/icons/CourseIcon';
import LecturesIcon from '../assets/icons/LecturesIcon';
import FeeCollectionIcon from '../assets/icons/FeeCollectionIcon';
import ScholarShipIcon from '../assets/icons/ScholarShipIcon';
import FAQIcon from '../assets/icons/FAQIcon';
import ChevronDown from '../assets/chevron-down.svg';
import ChevronRight from '../assets/chevron-right.svg';
import SvgIcon from './SvgIcon';

const SideMenu = (props) => {
	const classes = useStyles();
	const history = useHistory();

	const [showMenu, setShowMenu] = React.useState(true);
	const [open, setOpen] = React.useState(false);
	const [hover, setHover] = React.useState('');

	const handleClick = () => {
		setOpen(!open);
	};
	const handleMouseEnter = (link) => {
		setHover(`/${link}`);
	};
	const handleMouseLeave = () => {
		setHover('');
	};
	const handleRoute = (route) => {
		if (history.location.pathname === `/${route}`) return;
		setHover('');
		history.push(route);
	};

	const menutItems = [
		{
			id: 1,
			label: 'Dashboard',
			icon: <DashboardIcon />,
			notifications: 3,
			notificationColor: '#DB1974',
			link: '',
		},
		{
			id: 2,
			label: 'Profile',
			icon: <ProfileIcon />,
			notifications: 0,
			link: 'profile',
		},
		{
			id: 3,
			label: 'Chat',
			icon: <ChatIcon />,
			notifications: 0,
			link: 'chat',
		},
		{
			id: 4,
			label: 'Calendar',
			icon: <CalendarIcon />,
			notifications: 0,
			link: 'calendar',
		},
		{
			id: 5,
			label: 'Notice Board',
			icon: <NoticeBoardIcon />,
			notifications: 3,
			notificationColor: '#598500',
			link: 'notice-board',
		},
		{
			id: 6,
			label: 'Class Routine',
			icon: <ClassRoutineIcon />,
			notifications: 0,
			link: 'class-routine',
		},
		{
			id: 7,
			label: 'Live Class',
			icon: <LiveClassIcon />,
			notifications: 0,
			link: 'live-class',
		},
		{
			id: 8,
			label: 'Attendence',
			icon: <AttendanceIcon />,
			notifications: 21,
			notificationColor: '#7467F0',
			link: 'attendance',
		},
		{
			id: 9,
			label: 'Assessments',
			icon: <AssesmentsIcon />,
			notifications: 0,
			link: 'assessments',
		},
		{
			id: 10,
			label: 'Assignments',
			icon: <AssignmentsIcon />,
			notifications: 2,
			notificationColor: '#DB1974',
			link: 'assignment',
		},
		{
			id: 11,
			label: 'Results',
			icon: <ResultsIcon />,
			notifications: 0,
			link: 'results',
			expandable: true,
		},
		{
			id: 12,
			label: 'Course',
			icon: <CourseIcon />,
			notifications: 0,
			link: 'course',
		},
		{
			id: 13,
			label: 'Lectures',
			icon: <LecturesIcon />,
			notifications: 0,
			link: 'lecture',
		},
		{
			id: 14,
			label: 'Fee Collection',
			icon: <FeeCollectionIcon />,
			notifications: 0,
			link: 'fee-collection',
		},
		{
			id: 15,
			label: 'Scholership',
			icon: <ScholarShipIcon />,
			notifications: 0,
			link: 'scholarship',
		},

		{
			id: 16,
			label: 'FAQ',
			icon: <FAQIcon />,
			notifications: 0,
			link: 'faq',
		},
	];
	return (
		<List component='nav' className={classes.sideMenu} disablePadding>
			<ListItem
				onClick={() => {
					setShowMenu(!showMenu);
				}}
				button
				className={[classes.menuItem, classes.firstMenuItem].join(' ')}>
				<div>
					<img className={classes.ProfileImg} src={Profile} alt='user' />
					<span>John Doe</span>
				</div>
				{showMenu ? <SvgIcon icon={ChevronDown} iconStyle={{ width: '15px', height: '15px' }} /> : <SvgIcon icon={ChevronRight} iconStyle={{ width: '15px', height: '15px' }} />}
			</ListItem>
			{showMenu &&
				menutItems.map((menu, id) =>
					!menu.expandable ? (
						<ListItem
							onClick={() => {
								handleRoute(menu.link);
							}}
							key={id}
							onMouseLeave={handleMouseLeave}
							onMouseEnter={() => handleMouseEnter(menu.link)}
							button
							className={[classes.menuItem, history.location.pathname === `/${menu.link}` ? classes.MenuActive : ''].join(' ')}>
							<ListItemIcon className={classes.menuItemIcon}>{React.cloneElement(menu.icon, { color: hover === `/${menu.link}` || history.location.pathname === `/${menu.link}` ? '#00C3B3' : '#fff' })}</ListItemIcon>
							<ListItemText className={classes.menuItemText} primary={menu.label} />
							{menu.notifications > 0 ? (
								<span style={{ background: menu.notificationColor }} className={classes.NItem}>
									{menu.notifications}
								</span>
							) : (
								''
							)}
						</ListItem>
					) : (
						<>
							<ListItem key={id} onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter(menu.link)} button onClick={handleClick} className={classes.menuItem}>
								<ListItemIcon className={classes.menuItemIcon}>{React.cloneElement(menu.icon, { color: hover === `/${menu.link}` ? '#00C3B3' : '#fff' })}</ListItemIcon>
								<ListItemText className={classes.menuItemText} primary={menu.label} />
								{open ? <SvgIcon icon={ChevronDown} iconStyle={{ width: '15px', height: '15px' }} /> : <SvgIcon icon={ChevronRight} iconStyle={{ width: '15px', height: '15px' }} />}
							</ListItem>
							<Collapse in={open} timeout='auto' unmountOnExit>
								<Divider />
								<List component='div' disablePadding>
									<ListItem button className={classes.menuItem}>
										<ListItemText inset primary='Nested Page 1' />
									</ListItem>
									<ListItem button className={classes.menuItem}>
										<ListItemText inset primary='Nested Page 2' />
									</ListItem>
								</List>
							</Collapse>
						</>
					),
				)}
		</List>
	);
};

const drawerWidth = 350;

const useStyles = makeStyles((theme) =>
	createStyles({
		firstMenuItem: {
			margin: '2rem 0',
			display: 'flex',
			justifyContent: 'space-between',
			'& div': {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				'& span': {
					margin: '0 1rem',
					font: 'normal normal normal 20px/19px Montserrat',
				},
			},
		},
		ProfileImg: {
			width: '85px',
			height: '85px',
			borderRadius: '50%',
			border: '2px solid #ddd',
		},
		sideMenu: {
			width: '100%',
			height: '100rem',
		},
		menuItemText: {
			'& span': {
				font: 'normal normal 300 16px/36px Montserrat',
			},
		},

		navList: {
			width: drawerWidth,
		},
		menuItem: {
			width: drawerWidth,
			paddingTop: 0,
			paddingBottom: 0,
			'&:hover': {
				background: 'rgba(0,0,0,.2)',
				'& div > span': {
					color: '#00C3B3',
				},
			},
		},
		MenuActive: {
			background: 'rgba(0,0,0,.2)',
			'& div > span': {
				color: '#00C3B3',
			},
		},
		menuItemIcon: {
			minWidth: '35px',
			color: '#97c05c',
		},
		NItem: {
			width: '25px',
			height: '25px',
			font: 'normal normal bold 14px/28px Montserrat',
			borderRadius: '50%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	}),
);

export default SideMenu;
