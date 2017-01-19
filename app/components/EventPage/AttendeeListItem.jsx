import React, { PropTypes } from "react";
import { lightBlack } from "material-ui/styles/colors";

export default function AttendeesListItem({ name, image, location }) {
  return <div>
  <img src={image} style={{ height: "2em", width: "2em", borderRadius: "50%" }}/>
  <div style={{ display: "inline-block" }}>
    <div style={{ color: lightBlack }}>{name}</div>
    <div style={{ color: lightBlack }}>{location}</div>
  </div>
  </div>;
}

AttendeesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};