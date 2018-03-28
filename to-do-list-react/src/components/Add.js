import React, { Component } from 'react';
import Button from './Button';

class Add extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "Insert Task Here"};
		this.update = this.update.bind(this);
	}

	update(e) {
		this.setState({ value: e.target.value });
	}

	render() {
    	return (
    		<form onSubmit={ this.submit } className="form-group">
        		<input onChange={ this.update } value={ this.state.value } className="form-control" type="text"/>
        		<Button buttonName="Add Task"/>
      		</form>
    	);
  	}
}

export default Add;
