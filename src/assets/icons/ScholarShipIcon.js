import React from 'react';

export default function ScholarShipIcon(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} viewBox='0 0 14.462 24.032' >
			<defs>
				<style dangerouslySetInnerHTML={{ __html: `.a15,.b15,.e15{fill:none;}.a15,.b15{stroke:${props.color ? `${props.color} !important` : '#fff'};}.a15{stroke-width:2px;}.c15{fill:${props.color ? `${props.color} !important` : '#fff'};}.d15{stroke:none;}` }} />
			</defs>
			<g transform='translate(14.462 24.033) rotate(-180)'>
				<g className='a15' transform='translate(0 0.001)'>
					<rect className='d15' width='9.157' height='24.032' rx={3} />
					<rect className='e15' x={1} y={1} width='7.157' height='22.032' rx={2} />
				</g>
				<path className='b15' d='M0,9.381a5.668,5.668,0,0,1,7.782,0c.219,0,0-8.113,0-8.113A6.757,6.757,0,0,0,0,1.267S0,9.381,0,9.381Z' transform='translate(0.591 7.214)' />
				<path className='c15' d='M0,6.264l5.878-.029L3.18,3.375,5.879,0H.031Z' transform='translate(8.583 9.213)' />
				<rect className='c15' width='9.155' height='4.723' rx='2.361' transform='translate(0 19.31)' />
			</g>
		</svg>
	);
}
