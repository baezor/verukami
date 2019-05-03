import React from 'react';

class WorkPreview extends React.Component {
  render(){
    return (
      <section class="block block--work">
      <div class="block-wrapper">
        <div class="block-content">
            <div class="block-float-title">WORK</div>
            <div class="block-image block-image--left">
              <img src="img/demo.png" alt="Nebvla: HR Dashboard design" />
            </div>
            <div class="block-meta block-meta--right">
              <span class="meta-title">Product Design</span>
              <h2>Nebvla: <br/>HR dashboard design</h2>
              <a class="btn btn-circle" href=""><div class="btn-circle__inner"><span>READ <span class="bold">MORE</span></span></div></a>
            </div>
          </div>
      </div>
    </section>

    )
  }
}
export default WorkPreview;