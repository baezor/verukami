import React from 'react';
import textBG from './assets/radial-gradient.png';
import styled from '@emotion/styled';

const Button = styled.a`
	display: block;
	position: relative;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background: linear-gradient(246.8deg, #F7BFFD 0%, #DACEFF 33.66%, #C1DBFF 63.75%, #AAE9EF 100%);
`

const Inner = styled.div`
	position: absolute;
	top: 2px;
	left: 2px;
	right: 2px;
	bottom: 2px;
	text-align: center;
	background: #F5F7F7;
	border-radius: 50%;
	display: flex;
	align-items: center;
`

const Content = styled.span`
	font-family: Work Sans, sans-serif;
	font-style: normal;
	font-weight: normal;
	text-align: center;
	letter-spacing: 0.02em;
	line-height: 1.6rem;
	font-size: 1.4rem;
	background: url(${textBG}) no-repeat center;
	background-size: cover;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

class ButtonCircle extends React.Component {
	render(){
		return (
			<Button href={'#case-study'}>
				<Inner>
					<Content>READ <span className="bold">MORE</span></Content>
				</Inner>
			</Button>
		)
	}
}

export default ButtonCircle;