import React, { Component } from 'react';
import Button from './Button';

class Add extends Component {
  render() {
    return (
      <div>
        <input type="text"></input>
        <Button buttonName="Add"/>
      </div>
    );
  }
}

export default Add;
