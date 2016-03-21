'use strict';

import React from 'react';
var LinkedStateMixin = require('react-addons-linked-state-mixin');


class Tuner extends React.Component{
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

  setInitialState() {
    return {message: 13};
  }

  render() {
    var valueLink = {
      value: this.state.message,
      requestChange: this.handleChange
    };
    return (
    	<div>
			<input type="range" name={this.props.name} min="0" max="255" defaultValue={this.valueRange} step="1" onChange={this.handleChangeRange} />
			<input type="text" valueLink={this.linkState('message')} onChange={this.handleChangeField} />
		</div>
    );
  }

  handleChange(event) {
    //alert("hey")
    //alert("name: " + this.props.name + "; value: " + event.target.value)
    this.setState({message: event.target.value});

  }

  handleChangeRange(event) {
  	//alert("hey")
  	this.valueField = event.target.value
  }

}

export default Tuner;