import React, { Component } from 'react';

const Button = ({className, buttonName}) => (
	<div>
    	<button style={{margin: 5}} className={ className } >{buttonName}</button>
	</div>
);

export default Button;
