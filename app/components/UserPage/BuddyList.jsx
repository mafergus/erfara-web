import React, { PropTypes } from "react";
import autoBind from "react-autobind";
import AttendeeListItem from "../EventPage/AttendeeListItem";
import { darkBlack, faintBlack } from "material-ui/styles/colors";
import PeopleList from "../PeopleList";

export default class BuddyList extends React.Component {

  static propTypes = {
    buddies: PropTypes.array,
    style: PropTypes.object,
  };

  constructor() {
    super();
    autoBind(this);
  }

  render() {
    const attendees = [1, 2, 3, 4, 5, 6];
    const style = {
      ...this.props.style,
      padding: "0 0 0 0",
      border: `1px solid ${faintBlack}`,
      borderRadius: "1%",
    }
    let items = [];
    attendees.forEach(item => {
      items.push(<AttendeeListItem
        key={items.length}
        name="Jimmy Joe" 
        location="San Jose, CA" 
        image="https://scontent.xx.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/11009152_10105063465546270_5215382255678934863_n.jpg?oh=cbe678dd34f8cbf8c185708831432710&oe=590A3F7C"
        />);
    });
    return <PeopleList people={items} peopleType="Buddies" style={this.props.style} />
  }
  
}