import React from 'react';

export default function Dashboard(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} viewBox='0 0 18 19.829'>
			<defs>
				<style dangerouslySetInnerHTML={{ __html: `.a01{fill:none;stroke:${props.color ? props.color : '#fff'};stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}` }} />
			</defs>
			<g transform='translate(1 1)'>
				<path className='a01' d='M3.5,8.74l8-6.24,8,6.24v9.806a1.78,1.78,0,0,1-1.778,1.783H5.278A1.78,1.78,0,0,1,3.5,18.546Z' transform='translate(-3.5 -2.5)' />
				<path className='a01' d='M9.5,21.414V12.5h5.333v8.914' transform='translate(-4.167 -3.586)' />
			</g>
		</svg>
	);
}
