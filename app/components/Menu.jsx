import React from 'react';


export default class Menu extends React.Component {

  componentDidMount(){
    /* Listen for a transition! */
    var transitionEvent = this.whichTransitionEvent();
    transitionEvent && window.addEventListener(transitionEvent, function() {
      console.log('Transitions complete!');
      document.getElementById('block1').id="blockTemp";
      document.getElementById('block3').id="block1";
      document.getElementById('blockTemp').id="block3";
    });
  }


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

  // Check for transition events
  whichTransitionEvent(){
      var t;
      var el = document.createElement('fakeelement');
      var transitions = {
        'transition':'transitionend',
        'OTransition':'oTransitionEnd',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
      }

      for(t in transitions){
          if( el.style[t] !== undefined ){
              return transitions[t];
          }
      }
  }

}


