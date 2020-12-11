import React from 'react';

export default function LecturesIcon(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} viewBox='0 0 29.745 24.47'>
			<defs>
				<style dangerouslySetInnerHTML={{ __html: `.a10,.b10{fill:none;stroke:${props.color ? `${props.color} !important` : '#fff'};stroke-width:2px;}.a10{stroke-linecap:square;stroke-linejoin:bevel;}` }} />
			</defs>
			<g transform='translate(22158.881 12559.737)'>
				<path className='a10' d='M-22145.488-12530.868v11.719h18.885v-11.184' transform='translate(-7.719 -17.118)' />
				<g transform='translate(-22157.881 -12558.738)'>
					<path
						className='b10'
						d='M13.9,14.626a1.7,1.7,0,0,1-.73-.152L1,8.953A1.71,1.71,0,0,1,.985,5.847L13.15.164A1.706,1.706,0,0,1,13.872,0h0a.848.848,0,0,1,.383.044,1.728,1.728,0,0,1,.339.117l.439.205c1.258.563,4.223,1.972,11.727,5.478a1.71,1.71,0,0,1-.017,3.105c-7.4,3.36-10.389,4.736-11.672,5.3l-.494.224a1.709,1.709,0,0,1-.341.113.72.72,0,0,1-.23.042C13.971,14.629,13.939,14.627,13.9,14.626Z'
						transform='translate(0 0)'
					/>
				</g>
			</g>
		</svg>
	);
}
