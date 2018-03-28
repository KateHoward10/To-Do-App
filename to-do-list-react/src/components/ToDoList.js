import React, { Component } from 'react';
import Add from './Add';
import List from './List';

class ToDoList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Add/>
			    <List tasks={this.props.tasks}/>
			</div>
		);
	}
}

export default ToDoList;
