import React, { Component } from 'react';
import Button from './Button';

class Add extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "Insert Task Here"};
		this.update = this.update.bind(this);
		this.submit = this.submit.bind(this);
	}

	update(e) {
		this.setState({ value: e.target.value });
	}

	submit(e) {
		e.preventDefault();
		let data = this.state;
		this.props.onSubmit(data);
	}

	render() {
    	return (
    		<form onSubmit={ this.submit } className="form-group">
        		<input onChange={ this.update } value={ this.state.value } className="form-control" type="text"/>
        		<Button className="btn btn-primary" buttonName="Add Task"/>
      		</form>
    	);
  	}
}

export default Add;
