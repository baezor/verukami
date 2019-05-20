import React from "react"
import styled from '@emotion/styled';
import Title from './IntroTitle';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  background-color: ${ props => props.theme.colors.background };
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center; 
  flex-direction: column;
  justify-content: center;
`
const Lead = styled.p`
  max-width: 938px;
  padding: 0 15px;
  width: 100%;
  font-size: 2.8rem;
  line-height: 1.5;
  color: white;
  text-align: center;
`

class Intro extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      title: 'ベルカミ',
      lead: `I’m Verónica, a digital product 
      designer & art director. My goal is help 
      to build & launch great products.`
    }

  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Title content={this.state.title}></Title>
          <Lead>{this.state.lead}</Lead>
        </Wrapper>
      </Container>
    );
  }
}
export default Intro;
