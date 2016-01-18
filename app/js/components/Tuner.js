'use strict';

import React from 'react';


class ColorDisplay extends React.Component{
	valueField
	valueRange

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
  	this.valueField = this.props.defaultValue
  	this.valueRange = this.props.defaultValue
  }

  render() {
    return (
    	<div>
			<input type="range" name={this.props.name} min="0" max="255" defaultValue={this.valueRange} step="1" onChange={this.handleChangeRange} />
			<input type="field" defaultValue={this.valueField} onChange={this.handleChangeField} />
		</div>
    );
  }

  handleChange(event) {
    //alert("hey")
    //alert("name: " + this.props.name + "; value: " + event.target.value)
  }

  handleChangeRange(event) {
  	//alert("hey")
  	this.valueField = event.target.value
  }

}

export default ColorDisplay;