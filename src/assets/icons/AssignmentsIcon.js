import React from 'react';

export default function AssignmentsIcon(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} viewBox='0 0 20.128 20.128'>
			<defs>
				<style dangerouslySetInnerHTML={{ __html: `.a2{fill:none;stroke:${props.color ? props.color : '#fff'};stroke-width:2px;}.b2{fill:${props.color ? props.color : '#fff'};}` }} />
			</defs>
			<g transform='translate(-71.5 -821.5)'>
				<path className='a2' d='M22.114,6H8.014A2.014,2.014,0,0,0,6,8.014v14.1a2.014,2.014,0,0,0,2.014,2.014h14.1a2.014,2.014,0,0,0,2.014-2.014V8.014A2.014,2.014,0,0,0,22.114,6Z' transform='translate(66.5 816.5)' />
				<g transform='translate(76.676 838.26) rotate(-90)'>
					<rect className='b2' width='2.32' height='11.03' rx={1} transform='translate(9.234 -0.373)' />
					<rect className='b2' width='2.32' height='11.03' rx={1} transform='translate(5.234 -0.373)' />
					<rect className='b2' width='2.32' height='11.03' rx={1} transform='translate(1.234 -0.373)' />
				</g>
			</g>
		</svg>
	);
}
