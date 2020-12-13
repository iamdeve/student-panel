import React from 'react';
import { Grid, Paper, Card, CardHeader, CardContent, Avatar, Typography, Fab, Button } from '@material-ui/core/';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ReplyIcon from '@material-ui/icons/Reply';

import AttendenceIcon from '../../assets/dashboard_1.svg';
import CoursesIcon from '../../assets/dashboard_2.svg';
import PercentageIcon from '../../assets/dashboard_3.svg';
import MinimizeIcon from '../../assets/card_icons_1.svg';
import RefreshIcon from '../../assets/card_icons_2.svg';
import CancelIcon from '../../assets/card_icons_3.svg';
import CourseIcon from '../../assets/course_icon.svg';
import EventIcon from '../../assets/event_icon.svg';
import SvgIcon from '../../components/SvgIcon';
import classes from './Dashboard.module.css';
import Profile from '../../assets/profile.png';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import { Line, Bar, Doughnut } from 'react-chartjs-2';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment);

function precedingZero(date) {
	if (date && date > 0 && date < 10) {
		return `0${date}`;
	}else{
		return `${date}`
	}
}

function Dashboard() {
	const overviewData = [
		{
			icon: <SvgIcon icon={AttendenceIcon} iconStyle={{ height: '60px', width: '60px' }} />,
			title: 'Attendance percentage',
			percentage: 60,
			data: {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
				datasets: [
					{
						label: 'First dataset',
						data: [54, 43, 53, 65, 51, 60, 65],
						fill: true,
						backgroundColor: 'rgba(23,0,255, .2)',
						borderColor: '#6457E8',
					},
				],
			},
		},
		{
			icon: <SvgIcon icon={CoursesIcon} iconStyle={{ height: '60px', width: '60px' }} />,
			title: 'Number of courses',
			percentage: 60,
			data: {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
				datasets: [
					{
						label: 'First dataset',
						data: [54, 43, 53, 65, 51, 60, 65],
						fill: true,
						backgroundColor: 'rgba(255,102,0,0.2)',
						borderColor: '#FF761A',
					},
				],
			},
		},
		{
			icon: <SvgIcon icon={PercentageIcon} iconStyle={{ height: '60px', width: '60px' }} />,
			title: 'Total marks percentage',
			percentage: 80,
			data: {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
				datasets: [
					{
						label: 'First dataset',
						data: [54, 43, 53, 65, 51, 60, 65],
						fill: true,
						backgroundColor: 'rgba(0,195,179,0.2)',
						borderColor: '#00C3B3',
					},
				],
			},
		},
	];

	const alerts = [
		{
			username: 'Elizeu Dias',
			role: 'Admin',
			date: '19 Mar 2020',
			subject: 'Important Notice: Scheduled Maintenance of SMS',
			greeting: 'Dear SMS Users,',
			body:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore',
		},
		{
			username: 'Elizeu Dias',
			role: 'Admin',
			date: '19 Mar 2020',
			subject: 'Important Notice: Scheduled Maintenance of SMS',
			greeting: 'Dear SMS Users,',
			body:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore',
		},
		{
			username: 'Elizeu Dias',
			role: 'Admin',
			date: '19 Mar 2020',
			subject: 'Important Notice: Scheduled Maintenance of SMS',
			greeting: 'Dear SMS Users,',
			body:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore',
		},
	];
	let events = [
		{
			startDate: moment('2020-12-03').format('YYYY-MM-DD'),
			endDate: moment('2020-12-03').format('YYYY-MM-DD'),
			background: '#55CB02',
		},
		{
			startDate: moment('2020-12-13').format('YYYY-MM-DD'),
			endDate: moment('2020-12-13').format('YYYY-MM-DD'),
			background: '#36C3B3',
		},
		{
			startDate: moment('2020-12-29').format('YYYY-MM-DD'),
			endDate: moment('2020-12-29').format('YYYY-MM-DD'),
			background: '#B964C3',
		},
		// {
		// 	startDate: moment().add(2, 'days').format('YYYY-MM-DD'),
		// 	endDate: moment().add(4, 'days').format('YYYY-MM-DD'),
		// },
	];
	return (
		<div className={classes.dashboardWrapper}>
			<p className={classes.Title}>Student Dashboard</p>
			<div className={classes.OverView}>
				<div className={classes.root}>
					<Grid container spacing={2}>
						{overviewData.map((data, id) => (
							<Grid key={id} item xs={4}>
								<Paper className={classes.paper}>
									<div className={classes.OverviewIcon}>{data.icon}</div>
									<div className={classes.OverviewPerc}>{data.percentage}%</div>
									<div className={classes.OverviewTitle}>{data.title}</div>
									<div
										style={{
											width: '100%',
											position: 'relative',
											height: '80px',
										}}>
										<Line
											style={{}}
											width={100}
											height={50}
											data={data.data}
											options={{
												tooltips: {
													enabled: true,
												},
												legend: {
													display: false,
												},
												scales: {
													xAxes: [{ display: false }],
													yAxes: [{ display: false }],
												},
												maintainAspectRatio: false,
											}}
											legend={{ display: false }}
										/>
									</div>
								</Paper>
							</Grid>
						))}
					</Grid>
					<div className={classes.CustomGridContainer}>
						<div className={[classes.CustomGridItem, classes.Items1].join(' ')}>
							<Paper className={classes.paper}>
								<div className={classes.FirstCard}>
									<div className={classes.CourseIcon}>
										<SvgIcon icon={CourseIcon} iconStyle={{ height: '60px', width: '60px' }} />
									</div>
									<div className={classes.FirstCardTitle}>Next Class...</div>
									<div className={classes.FirstCardSubTitle}>Lorem ipsum dolor sit amet</div>
									<div className={classes.FirstCardClock}>1 : 45 : 00</div>
								</div>
							</Paper>
						</div>
						<div className={[classes.CustomGridItem, classes.Items2].join(' ')}>
							<Paper className={classes.paper}>
								<div className={classes.Cardheader}>
									<div className={classes.CardTitle}>Lorem Ipsum</div>
									<div className={classes.HeaderIcons}>
										<span className={classes.HeaderIcon}>
											<SvgIcon icon={MinimizeIcon} />
										</span>
										<span className={classes.HeaderIcon}>
											<SvgIcon icon={RefreshIcon} />
										</span>
										<span className={classes.HeaderIcon}>
											<SvgIcon icon={CancelIcon} />
										</span>
									</div>
								</div>
								<div className={classes.CardChart}>
									<Bar
										height={400}
										data={{
											labels: ['', 'Jun', '', 'Jul', '', 'Aug', '', 'Sep', '', 'Oct', '', 'Nov', '', 'Dec'],
											datasets: [
												{
													label: 'First dataset',
													data: [0, 54, 0, 43, 0, 73, 0, 65, 0, 51, 0, 60, 0, 65],
													fill: true,
													backgroundColor: '#00C3B3',
												},
											],
										}}
										options={{
											maintainAspectRatio: false,
										}}
										legend={{ display: false }}
									/>
								</div>
							</Paper>
						</div>
						<div className={[classes.CustomGridItem, classes.Items3].join(' ')}>
							<Paper className={classes.paper}>
								<div className={classes.LastCard}>
									<div className={classes.EventIcon}>
										<SvgIcon icon={EventIcon} iconStyle={{ height: '60px', width: '60px' }} />
									</div>
									<div className={classes.LastCardTitle}>Up coming event</div>
									<div className={classes.LastCardSubTitle}>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint possimus dignissimos perferendis iste explicabo odio perspiciatis numquam cupiditate provident omnis ipsam similique aut vitae, doloribus libero temporibus quisquam natus? Cum!
									</div>
								</div>
							</Paper>
						</div>
					</div>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<Paper>
								<div className={classes.Cardheader_2}>
									<div className={classes.CardTitle}>Attendance</div>
									<div className={classes.HeaderIcons}>
										<span className={classes.HeaderIcon}>
											<SvgIcon icon={MinimizeIcon} />
										</span>
										<span className={classes.HeaderIcon}>
											<SvgIcon icon={RefreshIcon} />
										</span>
										<span className={classes.HeaderIcon}>
											<SvgIcon icon={CancelIcon} />
										</span>
									</div>
								</div>
								<div className={classes.CardChart}>
									<Doughnut
										height={290}
										data={{
											labels: ['Presents', 'Absents', 'Leaves'],
											datasets: [
												{
													label: 'First dataset',
													data: [30, 20, 50],
													fill: true,
													backgroundColor: ['#FF761A', '#E91010', '#78C101'],
												},
											],
										}}
										options={{
											maintainAspectRatio: false,
										}}
										legend={{ display: false }}
									/>
								</div>
								<div className={classes.ChartLabels}>
									<span className={classes.Label}>
										<span style={{ background: '#78C101' }}></span>
										<span>Present</span>
										<span>70.00%</span>
									</span>
									<span className={classes.Label}>
										<span style={{ background: '#E91010' }}></span>
										<span>Absent</span>
										<span>10.00%</span>
									</span>
									<span className={classes.Label}>
										<span style={{ background: '#FF761A' }}></span>
										<span>Leave</span>
										<span>20.00%</span>
									</span>
								</div>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper>
								<div className={classes.Cardheader_2}>
									<div className={classes.CardTitle}>Event Calendar</div>
									<div className={classes.HeaderIcons}>
										<span className={classes.HeaderIcon}>
											<SvgIcon icon={MinimizeIcon} />
										</span>
										<span className={classes.HeaderIcon}>
											<SvgIcon icon={RefreshIcon} />
										</span>
										<span className={classes.HeaderIcon}>
											<SvgIcon icon={CancelIcon} />
										</span>
									</div>
								</div>
								<div className={classes.Calendar}>
									<Calendar
										localizer={localizer}
										events={events}
										startAccessor='start'
										endAccessor='end'
										id='99'
										defaultDate={moment().utcOffset('+5').toDate()}
										style={{ height: '20.4rem' }}
										components={{
											month: {
												dateHeader: ({ date, label }) => {
													// console.log(date, events.filter((d) => precedingZero(new Date(d.startDate).getDate()) === label)[0]);
													let bg = events.filter((d) => precedingZero(new Date(d.startDate).getDate()) === label)[0];
													let highlightDate = events.find((event) => moment(date).isBetween(moment(event.startDate), moment(event.endDate), null, '[]')) !== undefined;
													return (
														<span className={classes.EventDate} style={highlightDate ? { color: '#fff', background: bg?.background } : null}>
															{label}
														</span>
													);
												},
											},
											event: CustomEvents,
											toolbar: CustomToolBar,
											dateCellWrapper: ColoredDateCellWrapper,
										}}
									/>
								</div>
							</Paper>
						</Grid>
					</Grid>

					<Grid container style={{ marginTop: '1rem' }} spacing={0}>
						{alerts.map((alert, id) => (
							<div key={id} className={classes.AlertCard}>
								<Grid item xs={12}>
									<Card className={classes.Card}>
										<CardHeader
											avatar={
												<Avatar aria-label='recipe' className={classes.avatar}>
													<img className={classes.Avatar} src={Profile} alt='user' />
												</Avatar>
											}
											action={<span className={classes.AlertDate}>{alert.date}</span>}
											title={alert.username}
											subheader={alert.role}
										/>
										<CardContent>
											<Typography className={classes.AlertSubject} variant='body2' color='textPrimary' component='h4'>
												{alert.subject}
											</Typography>
											<Typography variant='body2' className={classes.AlertGreeting} color='textSecondary' component='p'>
												{alert.greeting}
											</Typography>
											<Typography variant='body2' className={classes.AlertBody} color='textSecondary' component='p'>
												{alert.body}
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<div className={classes.ActionIcons}>
									<Fab style={{ background: '#598500', color: '#fff' }} aria-label='add'>
										<VisibilityIcon />
									</Fab>
									<Fab style={{ background: '#DB0707', color: '#fff' }} aria-label='edit'>
										<DeleteOutlineIcon />
									</Fab>
									<Fab style={{ background: '#00C3B3', color: '#fff' }} aria-label='edit'>
										<ReplyIcon />
									</Fab>
								</div>
							</div>
						))}
					</Grid>
					<Grid container style={{ marginTop: '2rem' }}>
						<Grid item xs={12}>
							<Button className={[classes.BTN, classes.CustomBtnTeacher].join(' ')}>Teacher Panel</Button>
							<Button className={[classes.BTN, classes.CustomBtnSchool].join(' ')}>School Panel</Button>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}

const CustomToolBar = (toolbar) => {
	const goToBack = () => {
		let mDate = toolbar.date;
		let newDate = new Date(mDate.getFullYear(), mDate.getMonth() - 1, 1);
		toolbar.onNavigate('prev', newDate);
	};
	const goToNext = () => {
		let mDate = toolbar.date;
		let newDate = new Date(mDate.getFullYear(), mDate.getMonth() + 1, 1);
		toolbar.onNavigate('next', newDate);
	};
	return (
		<div className={classes.CustomToolBar}>
			<div
				className={classes.Prev}
				onClick={() => {
					goToBack();
				}}>
				<ChevronLeft />
			</div>
			<div className='title'>{toolbar.label}</div>
			<div
				className={classes.Next}
				onClick={() => {
					goToNext();
				}}>
				<ChevronRight />
			</div>
		</div>
	);
};
const ColoredDateCellWrapper = ({ children, value }) => {
	// console.log(`${new Date(value).getDate()}/${new Date(value).getMonth() + 1}/${new Date(value).getFullYear()}`, `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`);
	return React.cloneElement(React.Children.only(children), {
		style: {
			...children.style,
			// margin: '.4rem',
			// color: `${new Date(value).getDate()}/${new Date(value).getMonth() + 1}/${new Date(value).getFullYear()}` === `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}` ? '#fff !important' : '#000',
			// borderRadius: `${new Date(value).getDate()}/${new Date(value).getMonth() + 1}/${new Date(value).getFullYear()}` === `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}` ? '50%' : 'none',
			backgroundColor: `${new Date(value).getDate()}/${new Date(value).getMonth() + 1}/${new Date(value).getFullYear()}` === `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}` ? '#fff' : '#fff',
		},
	});
};

const CustomEvents = (event) => {
	return <div className='customEvent'>asdf</div>;
};

export default Dashboard;
