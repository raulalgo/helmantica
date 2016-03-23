'use strict';

import React              from 'react';
import ColorDisplay       from './ColorDisplay'
import ColorPickerInput   from './ColorPickerInput'


class ColorPicker extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  componentWillMount () {
    this.setState({
      r: Math.floor(Math.random()*255),
      g: Math.floor(Math.random()*255),
      b: Math.floor(Math.random()*255)
    });
  }

  render() {
    var defaultColor = {
      redChannel: 48,
      greenChannel: 0,
      blueChannel: 150
    };
    return (
        <div id="" className="left halfWidth colorPicker"> 
          <div className="pickerWrapper">
            <ColorPickerInput name="red" label="R" starting={this.props.r} onUserInput={this.handleChangeInput} />
            <ColorPickerInput name="green" label="G" starting={this.props.g} onUserInput={this.handleChangeInput} />
            <ColorPickerInput name="blue" label="B" starting={this.props.b} onUserInput={this.handleChangeInput} />
          </div>
          <ColorDisplay ref="displayer" bgRed={this.props.r} bgGreen={this.props.g} bgBlue={this.props.b} cdClass="mainColor centeredBox" />
        </div>
    );
  }

  handleChange(event) {
    this.props.onUserInput(this.props.name,event.target.name,event.target.value);
  }

  handleChangeInput (name,value) {
    //alert("name: " + this.props.name + " name: " + name + " value: " +value);
    this.props.onUserInput(this.props.name, name, value);
  }

  tunerChange(chanel,value) {
    this.props.onUserInput(this.props.name,chanel,value)
  }
}

export default ColorPicker;