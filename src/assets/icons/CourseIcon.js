import React from 'react';

export default function CourseIcon(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} viewBox='0 0 20.128 24.872' >
			<defs>
				<style dangerouslySetInnerHTML={{ __html: `.a7{fill:none;stroke:${props.color ? props.color : '#fff'};stroke-width:2px;}.b7{fill:${props.color ? props.color : '#fff'};}` }} />
			</defs>
			<g transform='translate(-71.5 -821.5)'>
				<path className='a7' d='M22.114,6H8.014A2.324,2.324,0,0,0,6,8.541V26.33a2.324,2.324,0,0,0,2.014,2.541h14.1a2.324,2.324,0,0,0,2.014-2.541V8.541A2.324,2.324,0,0,0,22.114,6Z' transform='translate(66.5 816.5)' />
				<path className='b7' d='M8.342,6H6.358c-.157,0-.157,19.537,0,19.537H8.342C8.5,25.537,8.5,6,8.342,6Z' transform='translate(97.449 832.795) rotate(90)' />
				<path className='b7' d='M9.281,6H6.41c-.227,0-.227,21.627,0,21.627H9.281C9.508,27.627,9.508,6,9.281,6Z' transform='translate(66.835 817.376)' />
			</g>
		</svg>
	);
}
