import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
	width: 20px;
	height: 20px;
`;

function SvgIcon(props) {
	return <Img src={props.icon} style={props.iconStyle} alt='icon' />;
}

export default SvgIcon;
