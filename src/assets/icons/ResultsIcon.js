import React from 'react';

export default function ResultsIcon(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} viewBox='0 0 20.128 20.128'>
			<defs>
				<style dangerouslySetInnerHTML={{ __html: `.a14{fill:none;stroke:${props.color ? props.color : '#fff'};stroke-width:2px;}.b14{fill:${props.color ? props.color : '#fff'};}` }} />
			</defs>
			<g transform='translate(-71.5 -821.5)'>
				<path className='a14' d='M22.114,6H8.014A2.014,2.014,0,0,0,6,8.014v14.1a2.014,2.014,0,0,0,2.014,2.014h14.1a2.014,2.014,0,0,0,2.014-2.014V8.014A2.014,2.014,0,0,0,22.114,6Z' transform='translate(66.5 816.5)' />
				<g transform='translate(75.732 826.655)'>
					<rect className='b14' width='3.315' height='6.966' rx={1} transform='translate(0 3.694)' />
					<rect className='b14' width='3.315' height='10.66' rx={1} transform='translate(4.617)' />
					<rect className='b14' width='3.315' height='4.033' rx={1} transform='translate(9.234 6.627)' />
				</g>
			</g>
		</svg>
	);
}
