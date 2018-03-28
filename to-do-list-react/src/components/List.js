import React, { Component } from 'react';
import Button from './Button';

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
							<li className="list-group-item d-flex justify-content-between align-items-center" key={task.get("id")}>
							{ task.get("task")}
							<div className="d-flex flex-direction-row">
								<Button className="btn btn-success btn-sm" buttonName="✓"/>
								<Button className="btn btn-danger btn-sm" buttonName="☓"/>
							</div>
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
