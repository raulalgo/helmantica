'use strict';

import React from 'react';
import ColorDisplay from './ColorDisplay'
import Tuner from './Tuner'


class ColorPicker extends React.Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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
    //this.state.color = defaultColor;
    return (
        <div id="colorPicker" className="left mr"> 
          <ColorDisplay ref="displayer" bgRed={this.state.r} bgGreen={this.state.g} bgBlue={this.state.b} />
          R:<br /><input type="range" name="red" min="0" max="255" step="1" defaultValue={this.state.r} onChange={this.handleChange} /> {this.state.r}<br />
          G:<br /><input type="range" name="green" min="0" max="255" step="1" defaultValue={this.state.g} onChange={this.handleChange} /> {this.state.g}<br />
          B:<br /><input type="range" name="blue" min="0" max="255" step="1" defaultValue={this.state.b} onChange={this.handleChange} /> {this.state.b}
        </div>
    );
  }

  handleChange(event) {
    //event.target.value
    switch (event.target.name){
      case 'red':
        this.setState({
          r: event.target.value
        });
      break;
      case 'green':
        this.setState({
          g: event.target.value
        });
      break;
      case 'blue':
        this.setState({
          b: event.target.value
        });
      break;
    }
  }
}

export default ColorPicker;