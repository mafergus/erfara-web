import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);
import UserBubble from './UserBubble';

export default class CardEventHorizontal extends ParseComponent {
  
  //Props - is passed a full experience Parse JSON object

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
        console.log("setState success ", exp);
      },
      error: function(error){
        console.log(error.message);
      }
    });

  }

  observe(nextProps, nextState){
    var _this = this;
    console.log("card_exp_horiz observe state obj" , nextState.stateExpObj);
    var stateExpObj = nextState.stateExpObj;

    var expertQuery = new Parse.Query(Parse.User).containedIn("exp_sharing", [stateExpObj]).limit(1);

    if (stateExpObj){
      console.log("observe ran query");
      return {
      // really requires a query looking for the top expert.
      // THIS IS A PLACEHOLDER RETURNING A RANDOM USER ASSOCIATED WITH THAT SKILL
      topExpert: expertQuery
      }
    } else{
      console.log("no state obj yet, no queries");
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
          </div>
          <div className="numExperts">
            {this.getNumExperts()}
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
    console.log("card_exp_horiz expert query" ,this.data.topExpert);
    console.log("parse errors: ", this.queryErrors());
    if(this.data.topExpert){
      return(
        <UserBubble owner={this.data.topExpert[0]} text="yes" />
      );  
    }
  }

};
