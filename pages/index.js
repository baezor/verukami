import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import FixedFrame from '../components/FixedFrame';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: auto;
`

class Index extends React.Component {
  render() {
    return (      
      <Container>
        <FixedFrame/>
        <Intro />
        <Intro />
      </Container>
    )
  }
}
export default Index;