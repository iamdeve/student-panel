import React from 'react';

export default function ChatIcon(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} viewBox='0 0 20 20.052' >
			<defs>
				<style dangerouslySetInnerHTML={{ __html: `.a5{fill:none;stroke:${props.color ? props.color : '#fff'};stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}` }} />
			</defs>
			<path className='a5' d='M21.5,15.535a2,2,0,0,1-2,2.006H7.5l-4,4.012V5.506A2,2,0,0,1,5.5,3.5h14a2,2,0,0,1,2,2.006Z' transform='translate(-2.5 -2.5)' />
		</svg>
	);
}
