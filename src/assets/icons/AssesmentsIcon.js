import React from 'react';

export default function AssesmentsIcon(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} viewBox='0 0 20 20.052'>
			<defs>
				<style dangerouslySetInnerHTML={{ __html: `.a1{fill:none;stroke:${props.color? props.color : '#fff'};stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}.b1{fill:${props.color? `${props.color}`:'#fff'};}` }} />
			</defs>
			<g transform='translate(-42.5 -934.5)'>
				<ellipse className='a1' cx={9} cy='9.026' rx={9} ry='9.026' transform='translate(43.5 935.5)' />
				<g transform='translate(-17.618 -18.664)'>
					<path className='a1' d='M9.5,9.26A2.334,2.334,0,0,1,12.14,7.5c1.269.218,1.762,1.356,1.76,2.647,0,1.765-2.64,2.647-2.64,2.647v1.627' transform='translate(58.118 950.206)' />
					<circle className='b1' cx='1.067' cy='1.067' r='1.067' transform='translate(68.4 966.746)' />
				</g>
			</g>
		</svg>
	);
}
