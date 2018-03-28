import React, { Component } from 'react';

class List extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { tasks } = this.props;
		return (
			<div>
				{ tasks.count() ?
					<ul>
						{ tasks.map(task => (
							<li className="list-group-item" key={task.get("id")}>
							{ task.get("task")}
							</li>)
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
