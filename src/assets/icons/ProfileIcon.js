import React from 'react';

export default function ProfileIcon(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} viewBox='0 0 18 20.052'>
			<defs>
				<style dangerouslySetInnerHTML={{ __html: `.a13{fill:none;stroke:${props.color ? props.color : '#fff'};stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}` }} />
			</defs>
			<g transform='translate(-44.5 -1044.513)'>
				<path className='a13' d='M20.5,21.517V19.512a4.006,4.006,0,0,0-4-4.012h-8a4.006,4.006,0,0,0-4,4.012v2.006' transform='translate(41 1042.047)' />
				<ellipse className='a13' cx={4} cy='4.012' rx={4} ry='4.012' transform='translate(49.5 1045.513)' />
			</g>
		</svg>
	);
}
