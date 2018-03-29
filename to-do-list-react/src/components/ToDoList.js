import React, { Component } from 'react';
import Add from './Add';
import List from './List';

class ToDoList extends Component {

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		return (
			<div>
				<Add onSubmit={this.props.onSubmit}/>
			    <List onEdit={this.props.onEdit} onComplete={this.props.onComplete} onDelete={this.props.onDelete} tasks={this.props.tasks}/>
			</div>
		);
	}
}

export default ToDoList;
