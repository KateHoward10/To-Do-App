import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {	

	render() {
		const { tasks, onDelete, onComplete, onEdit } = this.props;
		return (
			<div>
				{ tasks.count() ?
					<ul>
						{ tasks.map((task, index) => (
							<ListItem onEdit={ onEdit } onComplete={ onComplete } onDelete={ onDelete } task={ task } key={index} />)
						)}
					</ul>
					:
					<p>No tasks to do!</p>
				}
			</div>
		);
	}
}

export default List;
