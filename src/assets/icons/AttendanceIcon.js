import React from 'react';

export default function AttendanceIcon(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} viewBox='0 0 20.414 19.102'>
			<defs>
				<style dangerouslySetInnerHTML={{ __html: `.a3{fill:none;stroke:${props.color ? props.color : '#fff'};stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}` }} />
			</defs>
			<g transform='translate(-42.5 -989.51)'>
				<path className='a3' d='M9.5,11.151,12.342,14l9.474-9.5' transform='translate(39.684 986.96)' />
				<path className='a3' d='M20.553,12.051V18.7a1.9,1.9,0,0,1-1.895,1.9H5.395A1.9,1.9,0,0,1,3.5,18.7V5.4A1.9,1.9,0,0,1,5.395,3.5H15.816' transform='translate(40 987.01)' />
			</g>
		</svg>
	);
}
