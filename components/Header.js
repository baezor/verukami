import React from 'react';
import styled from '@emotion/styled';
import SwitchTheme from './SwitchTheme';

const Container = styled.header`
  position: relative;
  z-index: 99;
  width: 100%;
  height: 100px;
  background-color: ${ props => props.theme.colors.primary };
`

class Header extends React.Component {
  render(){
    return(
      <Container>
       <h1>Header</h1>
       <SwitchTheme />
      </Container>
    )
  }
}

export default Header;