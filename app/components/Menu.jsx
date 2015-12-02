import React from 'react';


export default class Menu extends React.Component {


  render() {

    return (
          <div className="row">
            <div className="block">
                <i className="hovicon effect-1 sub-a" onClick={this.toggleAnimation.bind(this)} >Erfara</i>
                <div id="block1" style={{marginLeft: "120%"}}>
                </div>
                <div id="block2" style={{marginLeft: "120%"}}>
                </div>
                <div id="block3" style={{marginLeft: "120%"}}>
                </div>
            </div>
          </div>
    );

  }

  toggleAnimation() {
    //find elements and toggle classNames between onScreen/Offscreen

    for(var i = 1; i<=3; i++){
      var block = document.getElementById("block"+i);
      // check margin-left of block and toggle them
      if(block.style.marginLeft === "120%"){
        block.style.marginLeft = "40%";
      } else {
        block.style.marginLeft = "120%";
      }
    }

  }

}


