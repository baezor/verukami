import React from 'react';
import styled from '@emotion/styled';
import demo from './assets/demo.png';
import ButtonCircle from './ButtonCircle';




const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Preview  = styled.div`
  width: 100%;
  max-width: 70%;
  margin: 0 auto;
  height: auto;
  display: flex;
`
const Image = styled.div(
  {
    flex: '0 1 50%'
  },
  props => ({ order: props.order })
)

const Content = styled.div(
  {
    flex: '1 0 50%',
    padding: '100px 40px'
  },
  props => ({ order: props.order })
)

class WorkPreview extends React.Component {
  render(){
    const { layout } = this.props;
    return (
      <Container>
        <Preview>
          <Image order={ (layout == 'textFirst') ? 1 : 2 }> 
            <img className="img-responsive" src={demo} alt={'Work Preview'}  />
          </Image>
          <Content order={ (layout == 'textFirst') ? 2 : 1 }>
            <span className="meta-title">Product Design</span>
            <h2>Nebvla: <br/>HR dashboard design</h2>
            <ButtonCircle />
          </Content>
        </Preview>
      </Container>
    )
  }
}
export default WorkPreview;