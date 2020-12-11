import React from 'react';

export default function CalendarIcon(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} viewBox='0 0 18 19.829'>
			<defs>
				<style dangerouslySetInnerHTML={{ __html: `.a4{fill:none;stroke:${props.color ? props.color : '#fff'};stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}` }} />
			</defs>
			<g transform='translate(-45 -554.507)'>
				<rect className='a4' width={16} height='16.046' rx={2} transform='translate(46 557.29)' />
				<line className='a4' y2='3.566' transform='translate(57.556 555.507)' />
				<line className='a4' y2='3.566' transform='translate(50.444 555.507)' />
				<line className='a4' x2={16} transform='translate(46 562.639)' />
			</g>
		</svg>
	);
}
