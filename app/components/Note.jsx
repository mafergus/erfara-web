import React from 'react';

export default class Note extends React.Component {
  render() {
    return <p>{this.props.task}</p>;
  }
}