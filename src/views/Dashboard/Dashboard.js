import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
import { Line, Bar, Doughnut } from 'react-chartjs-2';

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
										<sapn className={classes.HeaderIcon}>
											<SvgIcon icon={RefreshIcon} />
										</sapn>
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
							<Paper className={classes.paper}>
								<div className={classes.Cardheader}>
									<div className={classes.CardTitle}>Attendance</div>
									<div className={classes.HeaderIcons}>
										<span className={classes.HeaderIcon}>
											<SvgIcon icon={MinimizeIcon} />
										</span>
										<sapn className={classes.HeaderIcon}>
											<SvgIcon icon={RefreshIcon} />
										</sapn>
										<span className={classes.HeaderIcon}>
											<SvgIcon icon={CancelIcon} />
										</span>
									</div>
								</div>
								<div className={classes.CardChart}>
									<Doughnut
										height={400}
										data={{
											labels: ['Presents', 'Absents', 'Leaves'],
											datasets: [
												{
													label: 'First dataset',
													data: [70, 10, 20],
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
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper}>
								<div className={classes.Cardheader}>
									<div className={classes.CardTitle}>Event Calendar</div>
									<div className={classes.HeaderIcons}>
										<span className={classes.HeaderIcon}>
											<SvgIcon icon={MinimizeIcon} />
										</span>
										<sapn className={classes.HeaderIcon}>
											<SvgIcon icon={RefreshIcon} />
										</sapn>
										<span className={classes.HeaderIcon}>
											<SvgIcon icon={CancelIcon} />
										</span>
									</div>
								</div>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
