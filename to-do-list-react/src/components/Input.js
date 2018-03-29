import React from 'react';

const Input = ({onSubmit, value, onChange}) => (
	<form onSubmit={ onSubmit } className="form-group">
    	<input className="form-control" type="text" value={value} onChange={onChange}/>
	</form>
);

export default Input;
