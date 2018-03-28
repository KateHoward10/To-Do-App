import React, { Component } from 'react';
import Add from './Add';
import List from './List';

class ToDoList extends Component {
  render() {
    return (
      <div>
        <Add/>
        <List/>
      </div>
    );
  }
}

export default ToDoList;
