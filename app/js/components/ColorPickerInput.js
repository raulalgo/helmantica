'use strict';

import React from 'react';
var LinkedStateMixin = require('react-addons-linked-state-mixin');

class colorPickerInput extends React.Component {
	constructor(props) {
		super(props);
    	this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount () {
		this.setState({message: this.props.starting})
	}

	handleChange(newValue) {
		if (newValue > 255)
			var setValue = 255;
		else if (newValue < 0)
			var setValue = 0;
		else
			var setValue = newValue;

		this.props.onUserInput(this.props.name,setValue);
		this.setState({message: setValue});
	}

	render() {
		var valueLink = {
			value: this.state.message,
			requestChange: this.handleChange
		};
		return (
			<div className="third">
				<span>{this.props.label}:</span><input type="text" valueLink={valueLink} /><br />
				<input type="range" name={this.props.name} min="0" max="255" valueLink={valueLink} />
			</div> 
		);
	}
}

export default colorPickerInput;