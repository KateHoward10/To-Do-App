import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editable: false,
			value: props.task.get("task"),
		}
		this.delete = this.delete.bind(this);
		this.complete = this.complete.bind(this);
		this.edit = this.edit.bind(this);
		this.editable = this.editable.bind(this);
		this.update = this.update.bind(this);
	}

	update(e) {
		this.setState({ value: e.target.value });
	}

	delete() {
		const id = this.props.task.get("id");
		this.props.onDelete(id);
	}

	complete() {
		const id = this.props.task.get("id");
		this.props.onComplete(id);
	}

	edit(e) {
		e.preventDefault();
		const id = this.props.task.get("id");
		const data = {value: this.state.value};
		this.props.onEdit(id, data);
		this.setState({
			editable: false
		});
	}

	editable() {
		this.setState({
			editable: true
		});
	}

	render() {
		const { task } = this.props;
		const style = task.get("completed") ? { textDecoration: "line-through" } : null;
		return (
			
			<li style={ style } onClick={this.editable} className="list-group-item d-flex justify-content-between align-items-center" >
				{this.state.editable ? <Input onChange={ this.update } onSubmit={this.edit} value={ this.state.value }/> : <span>{ task.get("task") }</span>}
				<div className="d-flex flex-direction-row">
					<Button onClick={this.complete} className="btn btn-success btn-sm" buttonName="✓"/>
					<Button onClick={this.delete} className="btn btn-danger btn-sm" buttonName="☓"/>
				</div>
			</li>
		);
	}
}

export default ListItem;
