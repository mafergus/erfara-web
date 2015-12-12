import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);
import UserBubble from './UserBubble';

export default class CardEventHorizontal extends ParseComponent {
  
  //Props - is passed a full experience JSON object

  constructor() {
    super();

    this.state = {
      stateExpObj: undefined
    }
  }

  componentDidMount(){
    var _this = this;
    var query = new Parse.Query('Experience');
    query.get(this.props.experience.objectId,{
      success: function(exp){
        _this.setState({ stateExpObj: exp});
      },
      error: function(error){
        console.log(error.message);
      }
    });

  }

  observe(nextProps, nextState){
    var _this = this;
    var stateExpObj = nextState.stateExpObj;
    var expertQuery = new Parse.Query(Parse.User).containedIn("exp_sharing", [stateExpObj]).limit(1);
    if (stateExpObj){
      return {
      // THIS IS A PLACEHOLDER RETURNING A RANDOM USER ASSOCIATED WITH THAT SKILL
      topExpert: expertQuery
      }
    } else{
      return {
      }
    }

  }

  render() {

    return(
      <div className="card-experience-horizontal">
        <div className="photo-div">
          <img className="photo" src={this.props.experience.photo._url} alt="Photo"/>
        </div>
        <div className="stripe">
        </div>
        <div className="info">
          <div className="title">
            <h1>{this.props.experience.name}</h1>
            <div className="numExperts">
              {this.getNumExperts()}
            </div>
          </div>

          <div className="topExpert">
            {this.getTopExpert()}
            {this.renderExpertBubble()}
          </div>
        </div>
      </div>
    );
  }

  getNumExperts(){
    return(
      <div>
        todo:getNumExperts
      </div>
    );
  }

  getTopExpert(){
    return(
      <div>
        todo:getTopExpert
      </div>
    );
  }

  renderExpertBubble(){
    if(this.data.topExpert){
      return(
        <UserBubble owner={this.data.topExpert[0]} text="yes" />
      );  
    }
  }

};
