import React, { Component } from 'react';
import Add from './Add';
import List from './List';

class ToDoList extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		return (
			<div>
				<Add onSubmit={this.props.onSubmit}/>
			    <List tasks={this.props.tasks}/>
			</div>
		);
	}
}

export default ToDoList;
