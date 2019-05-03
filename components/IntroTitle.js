import React from 'react';
import styled from '@emotion/styled';
import textBG from './assets/radial-gradient.png';

const H1 = styled.h1`
  font-size: 14.4rem;
  margin: 10rem 0 14rem 0;
  position: relative;
  z-index: 2;
  font-weight: 500;
  font-family: Noto Sans JP;
  display: block;
  font-style: normal;
  background: url(${textBG}) no-repeat center;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

class Title extends React.Component {
  render(){
    const { content } = this.props
    return(
      <H1>{content}</H1>

    )
  }
}

export default Title;