import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import WorkPreview from '../components/WorkPreview';
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
        <WorkPreview layout={'textFirst'} />
        <WorkPreview layout={'MediaFirst'} />
        <Intro />
      </Container>
    )
  }
}
export default Index;