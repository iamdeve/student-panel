import React from 'react';

export default function LiveClassIcon(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} viewBox='0 0 23.841 15.326' >
			<defs>
				<style dangerouslySetInnerHTML={{ __html: `.a11{fill:${props.color ? props.color : '#fff'};}` }} />
			</defs>
			<g transform='translate(0 -85.333)'>
				<g transform='translate(0 85.333)'>
					<g transform='translate(0 0)'>
						<path
							className='a11'
							d='M23.437,87.163a.852.852,0,0,0-.828-.037l-5.58,2.79V87.887a2.554,2.554,0,0,0-2.554-2.554H2.554A2.554,2.554,0,0,0,0,87.887V98.1a2.554,2.554,0,0,0,2.554,2.554h11.92A2.554,2.554,0,0,0,17.029,98.1V96.077l5.58,2.794a.851.851,0,0,0,1.232-.766V87.887A.851.851,0,0,0,23.437,87.163ZM15.326,98.1a.851.851,0,0,1-.851.851H2.554A.851.851,0,0,1,1.7,98.1V87.887a.851.851,0,0,1,.851-.851h11.92a.851.851,0,0,1,.851.851Zm6.812-1.378-5.109-2.554V91.819l5.109-2.554Z'
							transform='translate(0 -85.333)'
						/>
					</g>
				</g>
				<g transform='translate(5.109 89.59)'>
					<g transform='translate(0 0)'>
						<path className='a11' d='M105.806,170.667a3.406,3.406,0,1,0,3.406,3.406A3.406,3.406,0,0,0,105.806,170.667Zm0,5.109a1.7,1.7,0,1,1,1.7-1.7A1.7,1.7,0,0,1,105.806,175.776Z' transform='translate(-102.4 -170.667)' />
					</g>
				</g>
			</g>
		</svg>
	);
}
