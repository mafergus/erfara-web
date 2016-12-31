import React, { PropTypes } from 'react';
import cn from "classnames";

export default function MeetingCard({title, details, guests, className, style}) {

  return (<div className={cn("meeting-card", className)} style={style}>
    <h3>{title}</h3>
    <p>Agenda: {details}</p>
    {guests && guests.map((item, index) => {
      return <p key={index}>{item.name}</p>;
    })}
  </div>);
}

MeetingCard.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  guests: PropTypes.array,
  className: PropTypes.any,
  style: PropTypes.object,
}