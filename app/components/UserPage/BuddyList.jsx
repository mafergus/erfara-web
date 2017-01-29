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
    const { buddies } = this.props;
    const style = {
      ...this.props.style,
      padding: "0 0 0 0",
      border: `1px solid ${faintBlack}`,
      borderRadius: "1%",
    }
    let items = [];
    if (!buddies) { return <div/>; }
    buddies.forEach(item => {
      items.push(<AttendeeListItem
        key={items.length}
        name={item.name}
        location="San Jose, CA" 
        image={item.photoURL}
        />);
    });
    return <PeopleList people={items} peopleType="Buddies" style={this.props.style} />
  }
  
}