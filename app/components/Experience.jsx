import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';
import HomeExperienceCard from './HomeExperienceCard';
import SearchBar from './SearchBar';
var ParseComponent = ParseReact.Component(React);

export default class Experience extends ParseComponent {
  mixins: [ParseReact.Mixin] // Enable query subscriptions

  // getInitialState is not used in React ES6 components. Hardcode it in the constructor.
  constructor() {
    super();
  }

  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  observe(nextProps, nextState) {
    return {
      events: (new Parse.Query("Event").equalTo("experience", this.props.params.experienceId )),
      experience: (new Parse.Query("Experience").equalTo("objectId", this.props.params.experienceId))
    };
  }

  render() {

    let { experienceId } = this.props.params;
    console.log("DATA " + JSON.stringify(this.data) + " data? " + this.data.toString() );
    console.log("Experience " + this.data.experienced + " exp[0] " + this.data.experience[0] + JSON.stringify(this.data.experience));

    var photoUrl = "";
    var title = "";
    if (this.data.experience && this.data.experience.length > 0) {
      photoUrl = this.data.experience[0].photo._url;
      title = this.data.experience[0].name;
    }

    var imgStyle = {
      backgroundImage: 'url(' + photoUrl + ')',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        backgroundBlendMode: 'darken',
        backgroundColor: 'rgba(29, 116, 0, .5)',
        objectFit: 'cover',
    };

    return(
      <div className="experience">

        <div id="experience-jumbo-div">
          <img style={ imgStyle }></img>
          <div id="title-container"><h1>{ title }</h1></div>
          <div className="user-pics"></div>
        </div>

        <SearchBar style={{ position: 'absolute', top: '0px', left: '0px' }} />
      </div>
    );
  }

}
