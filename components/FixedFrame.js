import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  border: 46px solid ${ props => props.theme.fixedFrame };
`

class FixedFrame extends React.Component {
  render(){
    return <Container />
  }
}

export default FixedFrame;